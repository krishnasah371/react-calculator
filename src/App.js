import { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <div className="fl-calculator">
        <div className="fl-display">
        
        </div>
        <div className="fl-operators">
          <button >+</button>
          <button >-</button>
          <button >*</button>
          <button >/</button>
          <button >Del</button>

        </div>
        <div className="fl-digits">
          {createDigits()}
          <button >0</button>
          <button >.</button>
          <button >=</button>

        </div>
      </div>

      
    </div>
  );
}

export default App;
