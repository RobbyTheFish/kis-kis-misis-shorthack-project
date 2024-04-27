import uuid
from pydantic import BaseModel, validator, Field
from typing import Optional


class User(BaseModel):
    _id: int = Field(default_factory=uuid.uuid4(), alias="_id")
    fullname: Optional[str]
