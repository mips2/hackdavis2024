import os
import subprocess
import threading

def start_flask(flask_ready_event):
    os.chdir('backend')
    subprocess.run(['python', 'main.py'])
    flask_ready_event.set()  # Set the event when Flask is ready

def start_react(flask_ready_event):
    flask_ready_event.wait()  # Wait for Flask to be ready
    os.chdir('front')
    subprocess.run(['npm', 'start'], shell=True)

if __name__ == "__main__":
    flask_ready_event = threading.Event()  # Create an event to synchronize Flask and React

    # Start Flask server in a separate thread
    flask_thread = threading.Thread(target=start_flask, args=(flask_ready_event,))
    flask_thread.start()
    
    # Start React server in the main thread
    start_react(flask_ready_event)
