import React from 'react';
import Modal from './Modal';
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
            <>
                <Modal/>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarMenuBiblioteca" aria-controls="navBarMenuBiblioteca" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navBarMenuBiblioteca">
                        <a className="navbar-brand" href="#">Libry Prime</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link btn-outline-info" href="#">Inicio<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/QuemSomos" className="nav-link btn-outline-info  btn-outline-text-light" href="#">Quem somos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn-outline-info" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sessões</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/Livros" className="dropdown-item btn-outline-info" href="#">Livros</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn-outline-info" data-toggle="modal" data-target="#ModalLogin" href="#">Login</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search"  style={{borderRadius:18}} placeholder="Pesquisar livro" aria-label="Search" />
                            <button className="btn btn-outline-success btn-info text-light my-2 my-sm-0" style={{borderRadius:18}} type="submit"><span className="fas fa-search"></span></button>
                        </form>
                    </div>
                </nav>
            </>
    );
}