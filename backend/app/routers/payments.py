from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services import payment_service

router = APIRouter()

class PayPerUseRequest(BaseModel):
    user_id: str
    amount: int
    provider: str = "stripe"

class PayPerUseVerifyRequest(BaseModel):
    payment_id: str
    provider: str = "stripe"

class SubscriptionRequest(BaseModel):
    user_id: str
    plan_id: str
    provider: str = "stripe"

class SubscriptionVerifyRequest(BaseModel):
    subscription_id: str
    provider: str = "stripe"

@router.post("/pay-per-use")
def pay_per_use(req: PayPerUseRequest):
    try:
        result = payment_service.initiate_pay_per_use_payment(req.user_id, req.amount, req.provider)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/pay-per-use/verify")
def verify_pay_per_use(req: PayPerUseVerifyRequest):
    try:
        result = payment_service.verify_pay_per_use_payment(req.payment_id, req.provider)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/subscribe")
def subscribe(req: SubscriptionRequest):
    try:
        result = payment_service.initiate_subscription(req.user_id, req.plan_id, req.provider)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/subscribe/verify")
def verify_subscription(req: SubscriptionVerifyRequest):
    try:
        result = payment_service.verify_subscription(req.subscription_id, req.provider)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 