import React, { Component } from 'react';
import ModalCadastroLivro from './ModalCadastroLivro';

export default class LivrosCadastros extends Component {//Class nao pode fazer uso de Hoks

    constructor() {
        super();

        this.manipuladorSubmit = this.manipuladorSubmit.bind(this);
        this.delCadastro = this.delCadastro.bind(this);
        this.state = {
            lugar: [
                {
                    id: 1,
                    nomeLivro: 'Senhor dos aneis',
                    nomeAutor: 'J. R. R. Tolkien'
                },
                {
                    id: 2,
                    nomeLivro: 'As Aventuras de Alice no País das Maravilhas,',
                    nomeAutor: 'Lewis Carroll'
                },
            ]
        }
    }

    manipuladorSubmit({nomeLivro, nomeAutor}){
        let state = this.state;
        let dados ={
            id:state.lugar.length + 1,
            nomeLivro: nomeLivro,
            nomeAutor: nomeAutor
        }
        this.setState({lugar: state.lugar.concat(dados)});
    }

    delCadastro(id){
        const {lugar} = this.state;
        const discIndex = lugar.findIndex(lugar => lugar.id == id);
        lugar.splice(discIndex);
        this.setState({lugar});

    }
    render() {
        return (
            <>
                <ModalCadastroLivro carregarInfo={this.manipuladorSubmit}/>
                <table className="table table-sm livro-cadastrado">
                    <thead>
                        <tr>
                            <th scope="col">Nº</th>
                            <th scope="col">Nome do Livro</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lugar.map((numLivro, index) => {
                            return (
                                <tr>
                                    <th scope="row">{numLivro.id}</th>
                                    <td>{numLivro.nomeLivro}</td>
                                    <td>{numLivro.nomeAutor}</td>
                                    <td><button type="button" className="btn btn-info btn-sm btn-outline-danger"
                                        onClick={this.delCadastro}>Remover</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )

    }

}
