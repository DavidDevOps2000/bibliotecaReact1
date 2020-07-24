import React, {Component} from 'react';
import { render } from '@testing-library/react';
export default class Modal extends Component{//Nao use () juntamente com Componente pois ele é uma Classe e não uma função

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			senha:""
		}
	}

	logar(){
		if (this.state.senha == "admin123" && this.state.email == "admin"){
			alert("Parabéns vc está logado");
			
		}else{
			alert("Senha ou email incorretos");
		}
	}

	render() {
		return (
			<>
				<div className="modal fade" id="ModalLogin" tabIndex="-1" role="dialog" aria-labelledby="ModCenter" aria-hidden="true">
					<div className="modal-dialog modal-dialig-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModCenter">Login: <p style={{color:'gray'}}>Login:Admin, Senha:Admin123</p> </h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<input type="Email" onInput={(e) =>this.setState({email: e.target.value})} style={{ borderRadius: 18 }} className="form-control" placeholder="Seu Email" />
									</div>
									<div className="form-group">
										<input type="password" onInput={(e) =>this.setState({senha: e.target.value})} style={{ borderRadius: 18 }} className="form-control" placeholder="Senha" />
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" style={{ borderRadius: 18 }} data-dismiss="modal">Fechar</button>
								<button type="button" className="btn btn-primary" onClick={this.logar.bind(this)} style={{ borderRadius: 18 }} >logar-se</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}