import React from 'react';
import Image from './../../assets/images/background-desktop.avif';
import './App.css';
import { 
  Container 
} from '@mui/material';
import MainBody from '../mainBody/MainBody';


function App() {
  const BackgroundHead = {
    backgroundImage: 'url('+ Image+')',
    backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
    }
  
  /*
  This is the main component for the page which sets the backgroud image.
  */
  return (
    <>
      <Container maxWidth="false" style={BackgroundHead}>
        <MainBody />
      </Container> 
    </>
  );
}
export default App;