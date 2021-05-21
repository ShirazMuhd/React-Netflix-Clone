
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import React from 'react';
import './App.css';
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <RowPost/>
    </React.Fragment>
  );
}

export default App;
