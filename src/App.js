
import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerate = () => {
    axios.post('http://localhost:5001/api/generate_content', {contents : content})
      .then(response => {
        setResponse(response.data.response);
      })
      .catch(err => {
        console.error('Error generating content:' , err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gemini AI generate Content</h1>
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

export default App;
