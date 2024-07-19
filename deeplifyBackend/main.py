from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# CORS Middleware hinzufügen
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Endpoint for image upload
@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    classification = random.choice(["OK", "NOK"])
    return JSONResponse(content={"classification": classification})
