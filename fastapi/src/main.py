from fastapi import FastAPI
import uvicorn
from core.config import settings
from core import models

models.Base.metadata.create_all(bind=models.base.engine)
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}