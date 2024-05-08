
import './App.css';
import {useState} from "react";

function App() {
  const [note, setNote] = useState(" ")
  return (
    <div className="App">
      <div className="main">
         <h1 className="heading"> Todo List  </h1>
         <input type="text" placeholder="Enter Note" name="note" value={note}  onChange={(e)=> setNote(e.target.value) }/>
      </div>

      
    </div>
  );
}

export default App;
