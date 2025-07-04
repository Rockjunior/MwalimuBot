from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from app.firebase_config import auth as firebase_auth
import firebase_admin
import jwt
import os

router = APIRouter()

JWT_SECRET = os.getenv('JWT_SECRET', 'supersecret')

class UserRegister(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

@router.post("/register")
def register(user: UserRegister):
    try:
        user_record = firebase_auth.create_user(
            email=user.email,
            password=user.password
        )
        return {"msg": "Registration successful", "uid": user_record.uid}
    except firebase_admin._auth_utils.EmailAlreadyExistsError:
        raise HTTPException(status_code=400, detail="Email already registered.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/login")
def login(user: UserLogin):
    try:
        # Firebase Admin SDK does not support password verification directly
        # In production, use Firebase REST API or client SDK for login
        # Here, we simulate login for demo purposes
        user_record = firebase_auth.get_user_by_email(user.email)
        # Issue JWT token (for demo, not secure)
        token = jwt.encode({"uid": user_record.uid, "email": user.email}, JWT_SECRET, algorithm="HS256")
        return {"msg": "Login successful", "token": token}
    except firebase_admin._auth_utils.UserNotFoundError:
        raise HTTPException(status_code=401, detail="Invalid credentials.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/google-oauth")
def google_oauth():
    # TODO: Implement Google OAuth
    return {"msg": "Google OAuth not implemented"} 