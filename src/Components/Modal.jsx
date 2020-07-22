import React from 'react';
export default function Modal(){
return(
<>
    <div class="modal fade" id="ModalLogin" tabindex="-1" role="dialog" aria-labelledby="ModCenter" aria-hidden="true">
		<div class="modal-dialog modal-dialig-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="ModCenter">Login</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
						<span aria-hidden="true">&times;</span>						
					</button>						
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<input type="Email" style={{borderRadius:18}} class="form-control" placeholder="Seu Email"/>
						</div>
							<div class="form-group">
							<input type="password" style={{borderRadius:18}} class="form-control" placeholder="Senha" />
						</div>
					</form>					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" style={{borderRadius:18}} data-dismiss="modal">Fechar</button>
					<button type="button" class="btn btn-primary" style={{borderRadius:18}} >logar-se</button>
				</div>					
			</div>			
		</div>		
	</div>
</>
);
}