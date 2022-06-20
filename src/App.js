import logo from './logo.svg'
import './App.css'
import Person from './components/Person/Person'

function App() {
  return (
    <div className="App">
      <Person name="Ana" surname="del Pino" age="20" />
      <Person name="David" surname="Ochando" age="23" />
      <Person name="Jose" surname="Marín" age="26" />
    </div>
  );
}

export default App;
