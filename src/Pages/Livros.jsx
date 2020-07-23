import React from 'react';
import ModalCadastroLivro from '../Components/ModalCadastroLivro';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LivrosCadastrados from '../Components/LivrosCadastrados';

export default function Livros() {
    return (
        <>
        <Navbar/>
                <div className="livrosTela" >
                    <div>
                        <button className="btn btn-primary" style={{ borderRadius: 15 }} data-toggle="modal" data-target="#modalCadastrarLivro">Cadastrar um livro</button>
                    </div>
                </div>
            <Footer/>
            <LivrosCadastrados/>
        </>
    );
}