import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='text-center m-3'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className='btn btn-secondary btn-lg"'>
        Click me
      </button>
    </div>
  );
}

export default App;