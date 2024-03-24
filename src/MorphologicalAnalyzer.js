import React, { useState, useEffect } from 'react';
import './TextCorrector.css';

const MorphologicalAnalyzer = () => {
  let [inputText, setInputText] = useState('');
  let [analyzedText, setAnalyzedText] = useState('');

  
  // Function to fetch corrected text from the backend
  const resultText = async (text) => {
    try {
      const response = await fetch('https://starlang-backend-9524056bbd12.herokuapp.com/morphological-analysis', {
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
      console.log(data.response)
      setAnalyzedText(data.analyzedText); // Update the state with the corrected text
    } catch (error) {
      console.error('Error correcting text:', error);
    }
  };

  // useEffect hook to log the correctedText state whenever it changes
  useEffect(() => {
    console.log(analyzedText); // Log the current state of correctedText
  }, [analyzedText]); // This effect runs whenever correctedText changes

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
  };
  
  const handleCorrectButtonClick = () => {
    resultText(inputText); // Correctly call the async function without assignment
  };
  
  
  return (
    <div class="container">
    <div class="column">
        <textarea
            className="inputField"
            value={inputText}
            onChange={handleTextChange}
            placeholder="Type text here..."
        ></textarea>
    </div>
    <div class="button-wrapper">
        <button id="correctButton" onClick={handleCorrectButtonClick}>MorphologicalAnalyzer</button>
    </div>
    <div class="column">
        <textarea
            className="inputField"
            value={analyzedText}
            onChange={handleTextChange}
            placeholder="Type text here..."
        ></textarea>
    </div>
</div>

  );
};



export default MorphologicalAnalyzer;
