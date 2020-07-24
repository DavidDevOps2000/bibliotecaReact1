import React from 'react';

export default function ValidarLogin(){
    return(
        <>
        <script>{
            function verLogin(){
            var email = document.getElementById('email');
            var senha = document.getElementById('senha');
        
            if((senha=='admin123') && (email=='admin')){

                    alert("Parabens vc está logado");
            }else{
                alert("Senha ou email incorretos");
            }
        }}
        </script>
    </>
    );

}