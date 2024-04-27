from typing import List, Optional

from sqlalchemy.orm import Mapped, relationship

from base import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
from pydantic import EmailStr, BaseModel
from skill import Skill


class User(Base):
    __tablename__ = "users"

    id: int = Column(Integer, primary_key=True, nullable=False)
    role: str = Column(String, nullable=False)
    bio: str = Column(String, nullable=True)
    request: Optional[str] = Column(String, nullable=True)

    email: EmailStr = Column(String, nullable=False, unique=True)
    number_phone: str = Column(String, nullable=True)
    course: str = Column(String, nullable=True)
    year: int = Column(Integer, nullable=True)

    skills: Mapped[List["Skill"]] = relationship()

