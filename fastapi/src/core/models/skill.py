from typing import List

from sqlalchemy.orm import Mapped, relationship, mapped_column

from base import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text, ForeignKey
from pydantic import EmailStr, BaseModel
from user import User


class UserSkill(Base):
    __tablename__ = "user_skill"

    id: Mapped[int] = Column(Integer, primary_key=True)
    skill_id: Mapped[int] = Column(Integer, ForeignKey("skill.id"), nullable=False)
    user_id: Mapped[int] = Column(Integer, ForeignKey("users.id"), nullable=False)


class Skill(Base):
    __tablename__ = "skill"

    id: Mapped[int] = Column(Integer, primary_key=True)
    name: List[str] = Column(String, nullable=False)
    aliases: List[str] = Column(String, nullable=False)

    skill_ids: Mapped[List["UserSkill"]] = relationship()
