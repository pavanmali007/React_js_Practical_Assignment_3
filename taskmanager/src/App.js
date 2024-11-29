import './App.css';
import Header from './Components/Header';
import TasksContent from './Components/TasksContent';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    "goto market",
    "buy some chips",
    "goto garden",
    "buy some cookies",
  ]);

  const onDelete = (todo) => {
    console.log("i am delete of todo: "+ todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  return (
    <>
    <Header todos={todos} setTodos={setTodos}/>
    <div className="contentWraper">
      <TasksContent onDelete={onDelete} todos={todos} />
      <div className="statsCont content">
        <div className="lable">stats</div>
        <div className="stat">
          <div className="statText">total tasks <span className='subStatText'>5/5</span></div>
          <div className="totalBar progressBar"></div>
        </div>
        <div className="stat">
          <div className="statText">pending tasks <span className='subStatText'>5/5</span></div>
          <div className="pendingBar progressBar"></div>
        </div>
        <div className="stat">
          <div className="statText">completed tasks <span className='subStatText'>5/5</span></div>
          <div className="completedBar progressBar"></div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;