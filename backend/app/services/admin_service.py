# admin_service.py
# Modular admin service for metrics and pricing management (placeholders for now)

def get_metrics():
    # TODO: Integrate with real database/analytics
    return {
        "users": 42,
        "questions": 123,
        "revenue": 1000
    }

def get_pricing():
    # TODO: Fetch from real config/database
    return {
        "pay_per_use": 10,  # KES per question
        "subscription_monthly": 500  # KES per month
    }

def set_pricing(pay_per_use: int, subscription_monthly: int):
    # TODO: Save to real config/database
    return {
        "pay_per_use": pay_per_use,
        "subscription_monthly": subscription_monthly,
        "msg": "Pricing updated (placeholder)"
    } 