from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
# used to connecting with our mongo db connection
client=MongoClient(os.getenv("MONGO_URL"))
# connect with our database
db=client["vignan_db"]
# connect with collection
student_collection=db["students"]
staff_collection=db["staff"]