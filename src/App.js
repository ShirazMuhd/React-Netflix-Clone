
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import React from 'react';
import './App.css';
import RowPost from './Components/RowPost/RowPost';
import {originals,action, comedy,horror, romantic, documentaries} from './Components/urls'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Original'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romantic} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </React.Fragment>
  );
}

export default App;
