# TalkInPeace

TalkInPeace is a project developed for a hackathon. The goal of this project was to create an innovative solution that allows users to talk to an AI based on their mood, providing a comforting and friendly interaction, almost like having a friend to talk to.

## Features
- Mood-based conversation with AI
- Integration with Gemini GPT
- JSON-based frontend connected through Flask

## Technologies Used
- JavaScript
- Python
- CSS
- HTML


## Getting Started

### Prerequisites

Make sure you have the following installed on your computer:

- Python 3.9 or higher
- Node.js and npm
- Git

### Installation



1. **Navigate to the `your-repo-name folder and set up the Python virtual environment**:

    ```sh
    cd your-repo-name
    python3 -m venv venv
    source venv/bin/activate  # On Windows: .\venv\Scripts\activate
    ```
2. **Install flask thing**:

    ```sh
    pip install flask flask-cors google-genai
    ```

3. **Install Python dependencies**:

    ```sh
    pip install -r requirements.txt
    ```

4. **Set up the React frontend**:

    ```sh
    npm install
    ```

### Running the Application

1. **Build the React frontend**:

    ```sh
    npm run build
    ```

2. **Run the Flask backend**:

    ```sh
    source venv/bin/activate  # On Windows: .\venv\Scripts\activate
    python app.py
    ```

3. **Access the application**:

    Open your web browser and navigate to `http://127.0.0.1:5002`.

### Troubleshooting

If you encounter any issues, please check the following:

- Ensure the virtual environment is activated before running the Flask application.
- Ensure the React frontend is built before running the Flask application.
- Check the browser console for any error messages.
