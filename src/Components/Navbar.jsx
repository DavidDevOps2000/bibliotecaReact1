import React from 'react';

export default function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">NomeSite</a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Quem somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contatos</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sessões</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Livros</a>
                                <a class="dropdown-item" href="#">Autores</a>
                                <a class="dropdown-item" href="#">Editoras</a>
                            </div>
                        </li>
                        </ul>
                         <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar livro" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                </div>
        </nav>
</>
    );
}