# Gemini AI Content Generator

This project is a full-stack application that uses a React frontend and a Flask backend to generate content using the Gemini AI model.

## Getting Started

### Prerequisites

Make sure you have the following installed on your computer:

- Python 3.9 or higher
- Node.js and npm
- Git

### Installation

2. **Set up the Python virtual environment**:

    ```sh
    cd your-repo-name
    python3 -m venv venv
    source venv/bin/activate  # On Windows: .\venv\Scripts\activate
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