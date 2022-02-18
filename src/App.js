import './App.css';
import ParsedTable from './Component/ParsedTable';
import InputForm from './Component/InputForm';
import {useState} from 'react'
import { Grid, Container, AppBar, Typography } from '@mui/material';


function App() {

  const [metaData, setMetaData] = useState("")

  return (
    <div className="App">
      <Container maxWidth="100%" >
        <AppBar position="relative" sx={{ bgcolor: 'text.secondary', marginBottom: '30px', padding: '15px', borderRadius: 2 }}>
            <Typography variant="h3"> Meta Tag Parser</Typography>
        </AppBar>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <InputForm setMetaData={setMetaData}/>
          </Grid>
          <Grid item xs={7}>
            <ParsedTable metaData={metaData} setMetaData={setMetaData}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
