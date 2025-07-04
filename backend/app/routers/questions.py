from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from pydantic import BaseModel
from typing import Optional
from app.services import ai_service

router = APIRouter()

class TextQuestion(BaseModel):
    question: str
    language: Optional[str] = "en"

@router.post("/text")
def ask_text_question(q: TextQuestion):
    try:
        result = ai_service.answer_text_question(q.question, q.language)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/image")
def ask_image_question(file: UploadFile = File(...), language: str = Form("en")):
    try:
        image_bytes = file.file.read()
        result = ai_service.answer_image_question(image_bytes, language)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/voice")
def ask_voice_question(file: UploadFile = File(...), language: str = Form("en")):
    try:
        audio_bytes = file.file.read()
        result = ai_service.answer_voice_question(audio_bytes, language)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 