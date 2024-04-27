from datetime import datetime
from typing import List, Optional

from sqlalchemy.orm import Mapped, relationship

from base import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, Boolean, text
from pydantic import EmailStr, BaseModel



class Request(Base):
    __tablename__ = "requests"

    id: int = Column(Integer, primary_key=True, nullable=False)
    date: datetime = Column(TIMESTAMP, nullable=False)

