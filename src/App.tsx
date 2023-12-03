import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { RootState } from './reducers';

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ onIncrement, onDecrement }: Props) {
  const disoatch = useDispatch()
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const counter = useSelector((state: RootState) => state.counter)
  const [todoValue, setTodoValue] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    disoatch({type:"ADD_TODO", text: todoValue})
    setTodoValue("");
  }

  return (
    <div className="App">
      Clicked: {counter} times
      {" "}
      <button onClick={onIncrement}>
        +
      </button>
      {" "}
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />

      </form>
    </div>
  );
}

export default App;
