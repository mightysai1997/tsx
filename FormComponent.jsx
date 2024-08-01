import React, { useState } from 'react';

const UnsafeForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: inputValue }),
    });
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>
  );
};
