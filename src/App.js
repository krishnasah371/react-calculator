import { useState } from 'react';


function App() {
  
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        
        </div>
        <div className="operators">
          <button >+</button>
          <button >-</button>
          <button >*</button>
          <button >/</button>
          <button >Del</button>

        </div>
        <div className="digits">
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
