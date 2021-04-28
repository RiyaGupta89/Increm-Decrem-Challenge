import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  const incremNum = () => {
      setCount(count+1);
  }

  const decremNum = () => {
    if(count === 0) {
      alert("Sorry, zero limit reached");
      return 0;
    }
    setCount(count-1);
  }

  return (
   <>
   <div className="main_div">
     <div className="center_div">
       <h1>{count}</h1>
       <div className="buttons">
       <Tooltip title="Add">
       <Button onClick={incremNum} className="btn_green"><AddIcon /></Button>
       </Tooltip>
       <Tooltip title="Delete">
       <Button onClick={decremNum} className="btn_red"><DeleteIcon /></Button>
       </Tooltip>
       </div>
     </div>
   </div>
   </>
  );
}

export default App;
