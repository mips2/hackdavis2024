from flask import Flask, send_from_directory
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def index():
    print("Someone requested root path")
    return dict(status = 200, number = 99)

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join('..', 'front', 'build', 'static'), path)

if __name__ == '__main__':
    app.run(debug=True)
