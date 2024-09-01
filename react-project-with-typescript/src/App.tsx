
import './App.css';
import Todos from './componants/Todos';
const array = ["Learn React","Learn TypeScript"]
function App() {
  return (
    <div>
      <Todos items={array} />
    </div>
  );
}

export default App;
