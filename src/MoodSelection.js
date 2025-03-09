import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
function MoodSelection({ setMood }) {
  const navigate = useNavigate();

  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
    navigate('/chat');
  };

  return (
    <div>
      <h2>Select your current mood</h2>
      <div className='button-container'>
        <button className='button buttonhappy' onClick={() => handleMoodSelection('happy')}>Happy</button>
        <button className='button buttonsad' onClick={() => handleMoodSelection('sad')}>Sad</button>
        <button className= 'button buttonangry' onClick={() => handleMoodSelection('angry')}>Angry</button>
        <button className= 'button buttonstressed' onClick={() => handleMoodSelection('stressed')}>Stressed</button>
        <button className= 'button buttonbored' onClick={() => handleMoodSelection('bored')}>Bored</button>
        <button className= 'button buttonlazy'  onClick={() => handleMoodSelection('lazy')}>Lazy</button>
      </div>
    </div>
  );
}

export default MoodSelection;