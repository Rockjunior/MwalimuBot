import firebase_admin
from firebase_admin import credentials, auth
import os

cred = credentials.Certificate(os.getenv('FIREBASE_CREDENTIALS_PATH', 'C:/Users/RODGERS/Documents/GitHub/MwalimuBot/backend/config/mwalimubot-c2928-firebase-adminsdk-fbsvc-2f70935f0b.json'))
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred) 