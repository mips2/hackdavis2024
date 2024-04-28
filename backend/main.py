from flask import Flask, send_from_directory,session,request,jsonify
import os
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps
from bson import ObjectId, json_util

app = Flask(__name__)
CORS(app, supports_credentials=True)
client = MongoClient('mongodb+srv://root:admin@cluster.v5xklt0.mongodb.net/')
db = client['App']
users_collection = db['Users']
jobs_collection = db['Jobs']

app.secret_key = 'your_secret_key'

@app.route('/login',methods=['GET','POST'])
def login():
    data = request.json
    username = data.get('username')#request.form['username']
    password = data.get('password')#request.form['password']

    print(username, password)
    user = users_collection.find_one({'username': username})
    print("got this far")
    if user and user['password'] == password:
        # Authentication successful, set session
        session['logged_in'] = True
        session['username'] = username
        print("Success")
        return dict(status=200, message='Logged in successfully', user = username)
        
    else:
        print("Failed")
        return dict(status=401, message='Invalid credentials')

@app.route('/update_profile', methods=['POST'])
def update_profile():
    print("Unpacking ...")
    data = request.json
    print("Attribute to change: ", data.get('attribute_changed'))
    print("New Value: ", data.get('new_attr_value'))
    # TODO
    # database interactions
    return dict(status = 200)

@app.route('/profile',methods=['GET','POST'])
def profile():
    data = request.json
    user = db.Users.find_one({"username": data.get('username')}, {"_id": 1})
    print(user)
    if user:
        user_id = user['_id']
        profile = (db.profiles.find_one({"userID": ObjectId(user_id)}))
        print(profile)
        if profile:

            json_data = json_util.dumps({
            "status": 200,
            "data": profile
        })

            return json_data

    else:
        return json_util.dumps({
            "status": 401,
            "message": "No user found with that username"
        })

@app.route('/profile_update',methods=['GET','POST'])
def profile_update():
    data = request.json
    user = db.Users.find_one({"username": data.get('username')}, {"_id": 1})
    print(user)
    if user:
        user_id = user['_id']
        profile = (db.profiles.find_one({"userID": ObjectId(user_id)}))
        print(profile)
        if profile:
            result = db.profiles.update_one(
            {"userID": user_id},  # Filter matching the document to update
           
            {"$push": {data.get('update_field'): data.get('new_value')}}
           # Update operation
)

            json_data = json_util.dumps({
            "status": 200,
        })

            return json_data

    else:
        return json_util.dumps({
            "status": 401,
            "message": "No user found with that username"
        })



@app.route('/',methods=['GET'])
def index():
    documents = jobs_collection.find()
    json_data = dumps(documents)
    print(json_data)
    print("Someone requested root path")
    
    return dict(status = 200, number = 99,data=json_data)




@app.route('/test1',methods=['GET','POST'])
def test1():
    username = request.json.get('username')
    Field =request.json.get('data')
    return dict(status = 200, number = 99,data=data)




@app.route('/applications',methods=['GET','POST'])
def applications():
    data = request.json
    user = db.Users.find_one({"username": data.get('username')}, {"_id": 1})

    if user:
        user_id = user['_id']
        all_applications = list(db.applications.find({"ApplicantID": ObjectId(user_id)}))

        applications_details = []

        for application in all_applications:
            application_status = application['Status']

            job_details = db.Jobs.find_one({"_id": ObjectId(application['JobID'])}, {"company": 1,"logo":1,"title":1, "_id": 0})
            print(application['JobID'])
            if job_details:
                company_name = job_details['company'] 
                job_title = job_details['title']
                job_logo = job_details['logo']

                applications_details.append({
                    "company_name": company_name,
                    "application_status": application_status,
                    "job_title": job_title,
                    "job_logo": job_logo
                })

        json_data = json_util.dumps({
            "status": 200,
            "number": len(all_applications),
            "data": applications_details
        })

        return json_data

    else:
        return json_util.dumps({
            "status": 401,
            "message": "No user found with that username"
        })

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join('..', 'front', 'build', 'static'), path)

@app.route('/register',methods=['GET','POST'])
def register():
    data = request.json
    username = data.get('username')#request.form['username']
    password = data.get('password')
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    address = data.get('address')

   
    if(users_collection.find_one({'username': username})):
        print("00-s")
        print(username)
        return dict(status=401, message='Username already exists')
    
    else:
        document = {
            "username": username,
            "password": password,
            "name": name,
            "email": email,
            "phone": phone,
            "address": address,
            "data": []
}
        results = users_collection.insert_one(document)
        return dict(status = 200, number = 99,message="test")
    


if __name__ == '__main__':
    app.run(debug=True)
