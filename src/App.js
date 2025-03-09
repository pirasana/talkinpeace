import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoodSelection from './MoodSelection';
import './App.css';

function Chat({ mood }) {
  const [content, setContent] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = () => {
    axios.post('http://localhost:5001/api/generate_content', { contents: content, mood: mood })
      .then(response => {
        setResponse(response.data.response);
      })
      .catch(err => {
        console.error('Error generating content:', err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gemini AI Generate Content</h1>
        <h2>Selected Mood: {mood}</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content to generate"
        />
        <button onClick={handleGenerate}>Generate</button>
        <h2>Response</h2>
        <pre>{response}</pre>
      </header>
    </div>
  );
}

function App() {
  const [mood, setMood] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TalkinPeace</h1>
          <Routes>
            <Route path="/" element={<MoodSelection setMood={setMood} />} />
            <Route path="/chat" element={<Chat mood={mood} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;