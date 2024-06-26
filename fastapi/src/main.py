from fastapi import APIRouter, HTTPException, status, Depends, FastAPI
from pydantic import EmailStr, BaseModel
from typing import List
from .api_v1.users.crud import UserCRUD
from .api_v1.users.schemas import UserAuthorization  # Импортируйте ваш модуль CRUD и модель Pydantic

app = FastAPI()
crud = UserCRUD()  # Укажите URL вашей базы данных


@app.post("/", status_code=status.HTTP_201_CREATED, response_model=UserAuthorization)
def create_user(user: UserAuthorization):
    existing_user = crud.get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    crud.create_user(user)
    return user


@app.get("/{email}", response_model=UserAuthorization)
def read_user(email: EmailStr):
    user = crud.get_user_by_email(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


class PasswordUpdate(BaseModel):
    new_password: str


@app.patch("/{email}", response_model=UserAuthorization)
def update_user_password(email: EmailStr, password_data: PasswordUpdate):
    user = crud.get_user_by_email(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    crud.update_user_password(email, password_data.new_password)
    user.password = password_data.new_password  # Обновите пароль для ответа
    return user


@app.delete("/{email}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(email: EmailStr):
    user = crud.get_user_by_email(email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    crud.delete_user(email)
    return {"message": "User deleted"}
