
import './App.css';
import Todos from './componants/Todos';
const array = ["1","2","3"]
function App() {
  return (
    <div>
      <Todos array={array} />
    </div>
  );
}

export default App;
