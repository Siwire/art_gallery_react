import React from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import './App.css';
import store from './redux/store';
import Header from './components/header';
import { ViewPictures } from './components/viewpictures';
import { ToolBar } from './components/toolbar'

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid className="App-viewpicture">
            <Provider store={store}>
              <Header />
            </Provider>
            <ToolBar />
            <ViewPictures />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

    </div>
  );
}

export default App;
