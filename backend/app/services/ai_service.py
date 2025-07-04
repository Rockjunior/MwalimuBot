# ai_service.py
# Modular AI service for answering questions (placeholders for now)

import os
import openai
from io import BytesIO
from PIL import Image
import pytesseract
import tempfile
# If you are using openai/whisper:
import whisper

openai.api_key = os.getenv("OPENAI_API_KEY")

# Load Whisper model once (small for demo; use larger for production)
try:
    whisper_model = whisper.load_model("base")
except Exception:
    whisper_model = None

# If you are using faster-whisper, comment out the above and use the following instead:
# from faster_whisper import WhisperModel
# openai.api_key = os.getenv("OPENAI_API_KEY")
# try:
#     whisper_model = WhisperModel("base")
# except Exception:
#     whisper_model = None

def answer_text_question(question: str, language: str = "en"):
    # Use OpenAI GPT for text question answering
    prompt = f"Answer this homework question in a simple, friendly way for a parent to explain to a child. Language: {language}. Question: {question}"
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful homework assistant for parents."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=300,
            temperature=0.7
        )
        answer = response.choices[0].message.content.strip()
        # Optionally, add tips or educational links (placeholder)
        tips = ["Encourage your child to try similar problems.", "Break down the question into smaller steps."]
        return {"answer": answer, "tips": tips}
    except Exception as e:
        return {"answer": f"Sorry, I couldn't process your question. ({str(e)})", "tips": []}

def answer_image_question(image_bytes: bytes, language: str = "en"):
    try:
        image = Image.open(BytesIO(image_bytes))
        text = pytesseract.image_to_string(image)
        if not text.strip():
            return {"answer": "Sorry, I couldn't read any text from the image.", "tips": []}
        return answer_text_question(text, language)
    except Exception as e:
        return {"answer": f"Sorry, I couldn't process the image. ({str(e)})", "tips": []}

def answer_voice_question(audio_bytes: bytes, language: str = "en"):
    if not whisper_model:
        return {"answer": "Sorry, voice model is not available.", "tips": []}
    try:
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=True) as tmp:
            tmp.write(audio_bytes)
            tmp.flush()
            result = whisper_model.transcribe(tmp.name, language=language if language != "en" else None)
            text = result.get("text", "").strip()
            if not text:
                return {"answer": "Sorry, I couldn't understand the audio.", "tips": []}
            return answer_text_question(text, language)
    except Exception as e:
        return {"answer": f"Sorry, I couldn't process the audio. ({str(e)})", "tips": []} 