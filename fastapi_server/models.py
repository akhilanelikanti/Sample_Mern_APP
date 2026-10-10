from pydantic import BaseModel
class Student_model(BaseModel):
    stu_name:str
    stu_age:int
    stu_dept:str
    stu_mark:float
    class staff_model(BaseModel):
        staff_name:str
        staff_destination:str