from flask import Flask, send_from_directory,session,request
import os
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})
client = MongoClient('mongodb+srv://root:admin@cluster.v5xklt0.mongodb.net/')
db = client['App']
users_collection = db['Users']

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
        return dict(status=200, message='Logged in successfully')
        
    else:
        print("Failed")
        return dict(status=401, message='Invalid credentials')




@app.route('/')
def index():
    print("Someone requested root path")
    
    return dict(status = 200, number = 99,message="test")

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join('..', 'front', 'build', 'static'), path)

if __name__ == '__main__':
    app.run(debug=True)
