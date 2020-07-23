import React from 'react';
export default function Modal(){
return(
<>
    <div className="modal fade" id="ModalLogin" tabIndex="-1" role="dialog" aria-labelledby="ModCenter" aria-hidden="true">
		<div className="modal-dialog modal-dialig-centered" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="ModCenter">Login</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
						<span aria-hidden="true">&times;</span>						
					</button>						
				</div>
				<div className="modal-body">
					<form>
						<div className="form-group">
							<input type="Email" style={{borderRadius:18}} id='email' className="form-control" placeholder="Seu Email"/>
						</div>
							<div className="form-group">
							<input type="password" style={{borderRadius:18}} id='senha' className="form-control" placeholder="Senha" />
						</div>
					</form>					
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" style={{borderRadius:18}} data-dismiss="modal">Fechar</button>
					<button type="button" className="btn btn-primary" onclick="" style={{borderRadius:18}} >logar-se</button>
				</div>					
			</div>			
		</div>		
	</div>
</>
);
}