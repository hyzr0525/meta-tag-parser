import './App.css';
import ParsedTable from './Component/ParsedTable';
import ImputForm from './Component/ImputForm';
function App() {
  return (
    <div className="App">
      <h1> Meta Tag Parser</h1>
      <ImputForm />
      <ParsedTable />
    </div>
  );
}

export default App;
