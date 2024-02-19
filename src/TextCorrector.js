import React, { useState, useEffect } from 'react';
import './TextCorrector.css';

const TextCorrector = () => {
  let [inputText, setInputText] = useState('');
  let [correctedText, setCorrectedText] = useState('');

  
  // Function to fetch corrected text from the backend
  const correctText = async (text) => {
    try {
      const response = await fetch('http://localhost:3001/correct-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCorrectedText(data.correctedText.words.map(word => word.name).join(' ')); // Update the state with the corrected text
    } catch (error) {
      console.error('Error correcting text:', error);
    }
  };

  // useEffect hook to log the correctedText state whenever it changes
  useEffect(() => {
    console.log(correctedText); // Log the current state of correctedText
  }, [correctedText]); // This effect runs whenever correctedText changes

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
  };
  
  const handleCorrectButtonClick = () => {
    correctText(inputText); // Correctly call the async function without assignment
  };
  
  
  return (
    <div class="container">
      <div class="column">
        <input
            type="text"
            className="inputField"
            value={inputText}
            onChange={handleTextChange}
            placeholder="Type text here..."
          />
      </div>
      <div class="button-wrapper">
        <button id="correctButton" onClick={handleCorrectButtonClick}>Correct</button> {/* Add this button */}
      </div>
      <div class="column">
        <input
          type="text"
          className="inputField"
          value={correctedText} // Assuming you have a separate state for the second input
          onChange={handleTextChange} // And a separate handler
          placeholder="Type text here..."
        />
      </div>
    </div>
  );
};



export default TextCorrector;
