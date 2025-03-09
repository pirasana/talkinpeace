import React from 'react';
import { useNavigate } from 'react-router-dom';

function MoodSelection({ setMood }) {
  const navigate = useNavigate();

  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
    navigate('/chat');
  };

  return (
    <div>
      <h2>Select your current mood</h2>
      <div>
        <button onClick={() => handleMoodSelection('happy')}>Happy</button>
        <button onClick={() => handleMoodSelection('sad')}>Sad</button>
        <button onClick={() => handleMoodSelection('angry')}>Angry</button>
        <button onClick={() => handleMoodSelection('stressed')}>Stressed</button>
        <button onClick={() => handleMoodSelection('bored')}>Bored</button>
        <button onClick={() => handleMoodSelection('lazy')}>Lazy</button>
      </div>
    </div>
  );
}

export default MoodSelection;