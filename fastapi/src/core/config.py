from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # Database - Postgres
    POSTGRES_DB: str = "default"
    POSTGRES_PASSWORD: str = "postgres1111!"
    POSTGRES_PORT: int = 5432
    POSTGRES_SCHEMA: str = "postgresql"
    POSTGRES_USERNAME: str = "postgres"
    IS_ALLOWED_CREDENTIALS: bool = "True"

    # This is the host for Docker Postgres Image in docker-compose.yaml
    POSTGRES_HOST: str = "db"
    POSTGRES_URI: str = f"{POSTGRES_SCHEMA}://{POSTGRES_USERNAME}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/" \
                        f"{POSTGRES_DB}"

    # Database - SQLAlchemy
    DB_TIMEOUT: int = 5
    DB_POOL_SIZE: int = 100
    DB_MAX_POOL_CON: int = 80
    DB_POOL_OVERFLOW: int = 20
    IS_DB_ECHO_LOG: bool = True
    IS_DB_EXPIRE_ON_COMMIT: bool = False
    IS_DB_FORCE_ROLLBACK: bool = True


settings = Settings()
