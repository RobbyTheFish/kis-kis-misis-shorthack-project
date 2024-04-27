from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from schemas import UserAuthorization
from ...core.models.user import User
from ...core.models.base import Base, engine, SessionLocal


class UserCRUD:
    def __init__(self):
        self.engine = engine
        Base.metadata.create_all(self.engine)
        self.Session = SessionLocal()

    def create_user(self, user_data: UserAuthorization):
        session = self.Session()
        user = User(
            role=user_data.role,
            email=user_data.email,
            password=user_data.password,
            fullname=user_data.fullname
        )
        session.add(user)
        session.commit()
        session.close()

    def get_user_by_email(self, email: str):
        session = self.Session()
        user = session.query(User).filter_by(email=email).first()
        session.close()
        return user

    def update_user_password(self, email: str, new_password: str):
        session = self.Session()
        user = session.query(User).filter_by(email=email).first()
        if user:
            user.password = new_password
            session.commit()
        session.close()

    def delete_user(self, email: str):
        session = self.Session()
        user = session.query(User).filter_by(email=email).first()
        if user:
            session.delete(user)
            session.commit()
        session.close()
