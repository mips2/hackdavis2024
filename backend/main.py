from flask import Flask, send_from_directory,session,request
import os
from flask_cors import CORS
from pymongo import MongoClient
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})
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

@app.route('/profile')
def get_profile():
    return 0




@app.route('/',methods=['GET'])
def index():
    documents = jobs_collection.find()
    json_data = dumps(documents)
    print(json_data)
    print("Someone requested root path")
    
    return dict(status = 200, number = 99,data=json_data)

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
