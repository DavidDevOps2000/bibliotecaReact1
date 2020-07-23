import React, { Component } from 'react';
import ModalCadastroLivro from './ModalCadastroLivro';

export default class LivrosCadastrados extends Component {//Class nao pode fazer uso de Hoks
    constructor() {// Serão esses dados que serão carregados por padrão ao abrir isso
        super();

        this.manipuladorSubmit = this.manipuladorSubmit.bind(this);
        this.delLivroAutor = this.delLivroAutor.bind(this);
        this.state = {
            disc: [
                {
                    id: 1,
                    nomeLivro: 'PHP',
                    nomeAutor: '200hrs'
                },
                {
                    id: 2,
                    nome: 'Java',
                    nomeAutor: '180hrs'
                },
                {
                    id: 3,
                    nome: 'C#',
                    nomeAutor: '300hrs'
                },
            ]
        }
    }

    manipuladorSubmit({nomeLivro, nomeAutor}){
        let state = this.state;
        let dados ={
            id:state.disc.length + 1,
            nomeLivro:nomeLivro,
            nomeAutor: nomeAutor
        }
        this.setState({disc: state.disc.concat(dados)});
    }

    delLivroAutor(id){
        const {disc} = this.state;
        const discIndex = disc.findIndex(disc => disc.id == id);
        disc.splice(discIndex);
        this.setState({disc});
    }
    
    render() {
        return (
            <>
                <ModalCadastroLivro carregarInfo={this.manipuladorSubmit}/>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome Livro</th>
                            <th scope="col">Nome Autor</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.disc.map((numLivro, index) => {
                            return (
                                <tr>
                                    <th scope="row">{numLivro.id}</th>
                                    <td>{numLivro.nomeLivro}</td>
                                    <td>{numLivro.nomeAutor}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm"
                                        onClick={this.delLivroAutor}>Remover</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
