import React from 'react';
import Modal from './Modal';

export default function NavBar() {
    return (
            <>
                <Modal/>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarMenuBiblioteca" aria-controls="navBarMenuBiblioteca" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navBarMenuBiblioteca">
                        <a class="navbar-brand" href="#">Libry Prime</a>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link btn-outline-info" href="#">Inicio<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-info" href="#">Quem somos</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle  btn-outline-info" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sessões</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item btn-outline-info" href="#">Livros</a>
                                    <a class="dropdown-item btn-outline-info" href="#">Autores</a>
                                    <a class="dropdown-item btn-outline-info" href="#">Editora</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-outline-info" data-toggle="modal" data-target="#ModalLogin" href="#">Login</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search"  style={{borderRadius:18}} placeholder="Pesquisar livro" aria-label="Search" />
                            <button class="btn btn-outline-success btn-info text-light my-2 my-sm-0" style={{borderRadius:18}} type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </>
    );
}