from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services import admin_service

router = APIRouter()

class PricingRequest(BaseModel):
    pay_per_use: int
    subscription_monthly: int

@router.get("/metrics")
def get_metrics():
    try:
        result = admin_service.get_metrics()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/pricing")
def get_pricing():
    try:
        result = admin_service.get_pricing()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/pricing")
def set_pricing(req: PricingRequest):
    try:
        result = admin_service.set_pricing(req.pay_per_use, req.subscription_monthly)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 