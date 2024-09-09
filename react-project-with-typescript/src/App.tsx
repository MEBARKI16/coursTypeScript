
import './App.css';
import NewTodo from './componants/NewTodo';
import Todos from './componants/Todos';
import Todo from './models/todo';
const array = [
  new Todo("learn react"),
  new Todo("learn typescript")
]
function App() {
  return (
    <div>
      <NewTodo />
      <Todos items={array} />
    </div>
  );
}

export default App;
