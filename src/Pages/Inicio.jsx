import Carrosel from '../Components/Carrosel';
import BemVindo from '../Components/BemVindo';
import Footer from '../Components/Footer';
import React from 'react';
import NavBar from '../Components/Navbar';


export default function Inicio(){

    return(
        <>
        <NavBar/>
        <Carrosel/>
        <Footer/>
        <BemVindo/>
        </>
    );
}