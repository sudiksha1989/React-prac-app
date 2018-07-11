import React from 'react';
import './App.css'
import MainPage from './components/Main';
import LeftBar from './components/LeftBar/LeftBar'

const App=()=>{
  return(<div className='App'>
  <LeftBar/>
  <MainPage/></div>)
}

export default App;