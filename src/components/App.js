import '../App.css'
import axios from 'axios';
import React from 'react';
import Header from './Header'
import Footer from './Footer'
import ParkDetails from './ParkDetails';
import ParkList from './ParkList';
// import NewParkForm from './NewParkForm';

function App() {
  return (
    <>
      <Header />
      <ParkList />
      <ParkDetails />
      {/* <NewParkForm /> */}
      <Footer />
    </>
  )
}


export default App;
