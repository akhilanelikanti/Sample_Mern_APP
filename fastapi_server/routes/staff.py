from fastapi import APIRouter

staff_router = APIRouter(prefix="/staff",tags=["staff"])


# localhost:8000/staff/addstaff
@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"


# localhost:8000/staff/getstaff
@staff_router.get("/getstaff")
def getstaff():
    return "get staff method called"


# localhost:8000/staff/updatestaff
@staff_router.put("/updatestaff")
def updatestaff():
    return "update staff method called"