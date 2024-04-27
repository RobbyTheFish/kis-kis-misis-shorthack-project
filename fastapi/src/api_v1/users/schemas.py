from pydantic import BaseModel


class UserAuthorization(BaseModel):
    role: str
    email: str
    password: str
    fullname: str

