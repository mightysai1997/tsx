import React, { useState } from 'react';

const AppComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setError('Input cannot be empty');
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      setError(null);
    } catch (error) {
      setError('Failed to submit data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AppComponent;
