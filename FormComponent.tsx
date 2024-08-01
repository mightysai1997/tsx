import React, { useState } from 'react';

const FormComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: inputValue }),
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
