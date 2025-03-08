from flask import Flask, jsonify, request, send_from_directory
import webbrowser
from threading import Timer
from flask_cors import CORS
from google import genai
import os

app = Flask(__name__, static_folder='build')
CORS(app)

client = genai.Client(api_key="AIzaSyAp8dM7np9uOs1r1Sxi1qgi7HPAsWTgKLc")

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/generate_content', methods=['POST'])
def generate_content():
    data = request.json
    contents = data.get('contents', 'Explain how AI works')

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=contents,
    )
    
    # Ensure the response is serialized to JSON
    response_text = response.text if hasattr(response, 'text') else str(response)
    
    return jsonify({'response': response_text})

@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5001")
if __name__ == '__main__':
    app.run(debug=True, port=5001)