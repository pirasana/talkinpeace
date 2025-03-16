from flask import Flask, jsonify, request, send_from_directory
import webbrowser
from threading import Timer
from flask_cors import CORS
from google import genai
import os

app = Flask(__name__, static_folder='build')
CORS(app)

client = genai.Client(api_key="")

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

def generate_prompt_mood(contents, mood):
    if mood == 'happy':
        return f"Generate content with a happy tone and make sure to " \
               f"highlight good things they have mentioned in their messages. " \
               f"These messages: {contents}"
    
    if mood == 'sad':
        return f"Generate content with an empathetic tone and make sure to " \
               f"highlight that there are better things coming if they mention bad things in their messages. " \
               f"These messages: {contents}"
    
    if mood == 'angry':
        return f"Generate content with friendly agreeing tone and make sure to " \
               f"highlight the things they have mentioned in their messages. " \
               f"These messages: {contents}"
    
    if mood == 'stressed':
        return f"Generate content with a calm tone and make sure to " \
               f"highlight the things they have mentioned in their messages. " \
               f"These messages: {contents}"
    
    if mood == 'bored':
        return f"Generate content with a chill and relaxed tone and make sure to " \
               f"highlight the things they have mentioned in their messages. " \
               f"These messages: {contents}"
    
    if mood == 'lazy':
        return f"Generate content with a soft motivational tone and make sure to " \
               f"highlight the things they have mentioned in their messages. " \
               f"These messages: {contents}"
    
    return f"Generate content with a neutral tone and make sure to " \
           f"highlight the things they have mentioned in their messages. " \
           f"These messages: {contents}"

@app.route('/api/generate_content', methods=['POST'])
def generate_content():
    data = request.json
    contents = data.get('contents', 'Explain how AI works')
    mood = data.get('mood', 'neutral')

    prompt_injection = generate_prompt_mood(contents, mood)

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt_injection,
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
