from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def index():
    print("Someone requested root path")
    return send_from_directory(os.path.join('..', 'front', 'build'), 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join('..', 'front', 'build', 'static'), path)

if __name__ == '__main__':
    app.run(debug=True)
