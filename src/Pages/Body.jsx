import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BemVindo from '../Components/BemVindo';
import Carrosel from '../Components/Carrosel';
export default function Body() {
  return (
    <>
      <Navbar/>
      <Carrosel/>
      <Footer/>
      <BemVindo/>
    </>
  );
}
