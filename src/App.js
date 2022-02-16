import './App.css';
import ParsedTable from './Component/ParsedTable';
import ImputForm from './Component/ImputForm';
import {useState} from 'react'
function App() {

  const [metaData, setMetaData] = useState("")

  return (
    <div className="App">
      <h1> Meta Tag Parser</h1>
      <ImputForm setMetaData={setMetaData}/>
      <ParsedTable metaData={metaData}/>
    </div>
  );
}

export default App;
