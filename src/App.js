
import './App.css';
import { useState } from "react";

function App() {
  const [note, setNote] = useState(" ");
  const [todos,setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleDelete = (id) =>{
    const deltodo = todos.filter((num)=>
        num.id!==id);
      setTodos([...deltodo]);
  };

  const handleEdit = (id) =>{
    const editTodo = todos.find((i)=>i.id === id);
    setNote(editTodo.note);
    setEditId(id);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(note!==" ") {
       setTodos([{id:`${note}-${Date.now()}`,note}, ...todos]);
       setNote(" ");
  }
}

  return (
    <div className="App">
      <div className="main">
        <h1 className="heading"> Todo List  </h1>
        <form className='todo' onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Note" name="note" value={note} onChange={(e) => setNote(e.target.value)} />
          <button>{editId?"Edit":"Go"}</button>
        </form>

        <ul className='alltodos'>
          {
            todos.map((t)=>(
              <li className='singletodo' key={t.id}>
              <span className='todotext'>{t.note}</span>
              <button onClick={()=> handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
