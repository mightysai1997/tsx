import React, { useState } from 'react';

const UnsafeComponent = ({ userInput }) => {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
};

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <UnsafeComponent userInput={inputValue} />
    </div>
  );
};

export default App;
