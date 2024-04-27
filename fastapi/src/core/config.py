from pydantic import BaseSettings
from pathlib import Path

env_path = Path(__file__).parent.parent.joinpath('.env')


class Settings(BaseSettings):
    MONGO_HOST: str
    MONGO_PORT: int
    MONGO_INITDB_ROOT_USERNAME: str
    MONGO_INITDB_ROOT_PASSWORD: str
    MONGO_DB: str

    class Config:
        env_file = env_path

settings = Settings()
