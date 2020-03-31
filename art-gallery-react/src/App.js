import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Header } from './components/header';
import { ViewPictures } from './components/viewpictures';

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <header className="App-header">
            <Header />
            <ViewPictures />
          </header>
        </Grid>
        <Grid item xs={1} />
      </Grid>
        
    </div>
  );
}

export default App;
