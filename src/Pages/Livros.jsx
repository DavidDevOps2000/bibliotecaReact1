import React from 'react';
import ModalCadastroLivro from '../Components/ModalCadastroLivro';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Livros() {
    return (
        <>
        <Navbar/>
            <ModalCadastroLivro />
                <div className="livrosTela">
                    <div>
                        <button className="btn btn-primary" style={{ borderRadius: 15 }} data-toggle="modal" data-target="#modalCadastrarLivro">Cadastrar um livro</button>
                    </div>
                </div>
            <Footer/>
        </>
    );
}