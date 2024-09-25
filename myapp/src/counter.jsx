import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  
  const [showCount, setShowCount] = useState(false);  

  return (
    <div>
      <button onClick={() => setShowCount(!showCount)}>
        {showCount ? 'Hide Count' : 'Show Count'}
      </button>
      {showCount && (
        <>
          <h2>Counter Show Open</h2>
          <h3>Counter Is- {count}</h3>
          <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Changed to decrement */}
        </>
      )}
    </div>
  );
}

export default Counter;

