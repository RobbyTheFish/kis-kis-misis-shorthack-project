import motor.motor_asyncio
from ..core.config import settings

MONGO_DETAILS = f"mongodb://{settings.MONGO_INITDB_ROOT_USERNAME}:{settings.MONGO_INITDB_ROOT_PASSWORD}@{settings.MONGO_HOST}:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)
database = client[settings.MONGO_DATABASE]


