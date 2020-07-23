import React from 'react';
import livroLido from '../Assets/bookAnimation.gif';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

export default function QuemSomos() {
    return (
        <>
            <NavBar />
            <div className="quemSomos">
                <strong>Quem somos</strong>
                <p>Somos uma empresa de vendas e cadastramento de livros.</p>
                <p> Muito tempo atrás, nosso objetivo consistia em criar uma loja virtual,</p>
                <p> onde todos pudessem se utilizar da nossa plataforma, para negociar livros.</p>
                <p> Foi então, que um grupo de amigos se juntaram pra levantar essa empresa.</p>
                <p>Nossa plataforma online, disponibiliza recursos interessantes </p>
                <p>a novos empreendimentos focado em troca de livros ou vendas do mesmo.</p>
                <p>Prezamos pelo o cuidado e segurança dos nossos usuários.</p>
                <p>Muito Obrigado a todos os colaboradores</p>
                <p> Por nos ajudar a atingir esse objetivo nobre e espetacular na nossa vida.</p>
                <img src={livroLido} style={{ height: 155, width: 200 }} />
            </div>
            <Footer />

        </>
    );
}