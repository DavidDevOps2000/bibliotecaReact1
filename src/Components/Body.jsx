import React from 'react';
import Navbar from './Navbar';
import Carrosel from './Carrosel';
import BemVindo from './BemVindo';
import Footer from './Footer';

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
