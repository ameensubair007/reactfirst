import React from 'react';
import Counter from './Counter'; // Ensure the path is correct

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Make sure it takes up the full viewport height
      textAlign: 'center' // Center text horizontally
    }}>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
