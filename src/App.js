import React, { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  const incremNum = () => {
      setCount(count++);
  }

  const decremNum = () => {
    if(count == 0) {
      alert("Sorry, 0 limit reached");
    }
    setCount(count--);
  }

  return (
   <>
   <div className="main_div">
     <div className="center_div">
       <h1>{count}</h1>
       <div className="buttons">
       <button onClick={incremNum}>Increm</button>
       <button onClick={decremNum}>Decrem</button>
       </div>
     </div>
   </div>
   </>
  );
}

export default App;
