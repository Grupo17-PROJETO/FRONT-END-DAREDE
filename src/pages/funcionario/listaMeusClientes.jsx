import React, {useState} from "react";
import Modal_VPC from "../../components/Modal";
import '../../css/empresa.css'
import { Component } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import IconeUsuario from '../../img/imgCliente/iconeUsuario.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import prancheta from '../../img/imgCliente/prancheta.png'
import boneco from "../../img/imgCliente/boneco_listagem.png"
import sair from '../../img/imgCliente/sair.png'
import localizacao from '../../img/imgCliente/localizacao.png'
import telefone from '../../img/imgCliente/telefone.png'
import insta from '../../img/imgCliente/instagram.png'
import linkedin from '../../img/imgCliente/linkedin.png'
import whats from '../../img/imgCliente/whats.png'
import chatboot from '../../img/imgCliente/icone_chat.png'
import Modal_EC2 from "../../components/Modal_EC2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const[isModalVisibleVPC, setIsModalVisibleVPC] = useState(false);
    const[isModalVisibleEC2, setIsModalVisibleEC2] = useState(false);

    return(
        <div>
        <header>
            <div className='corFundoH'>
                <img className='logo' src={Logo} alt="" />
                <div className='nave'>
                    <a href="/MeusEquipamentos">Meus Equipamentos</a>
                    <a href="">Contato</a>
                    <section className='imgHeader'>
                        <img className='iconeUC' src={Fake} alt="" />
                    </section>
                    <a href="/" target="principal" ><img className='sair' src={sair} alt="" /></a>
                </div>
            </div>
        </header>
        <div className='divisaoPrinc2'>
            <div className='divisaoFundo'>
                <div className='boneco'>
                    <img src={boneco} alt="" />
                </div>
                <div className='blocoCentralPrincipal'>
                    <div>
                        <div className='divisao'>
                            <img src={prancheta} alt="" />
                            <h1>EQUIPAMENTOS</h1>
                        </div>
                        <div className='blocoCentral'>
                            <section >
                                <img src={VPC} alt="" />
                            </section>
                            <section className='informacoes'>
                                <h2>VPC</h2>
                                <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                <center>
                                    <div>
                                        <button onClick={() => setIsModalVisibleVPC(true)} className='botaoEC2'> Mais Informações</button>
                                        {isModalVisibleVPC ? <Modal_VPC onClose={() => setIsModalVisibleVPC(false) } />: null}
                                    </div>
                                </center>
                            </section>
                        </div>
                        <div className='blocoCentral'>
                            <section >
                                <img src={EC2} alt="" />
                            </section>
                            <section className='informacoes'>
                                <h2>EC2</h2>
                                <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                <center>
                                <div>
                                        <button onClick={() => setIsModalVisibleEC2(true)} className='botaoEC22'> Mais Informações</button>
                                        {isModalVisibleEC2 ? <Modal_EC2 onClose={() => setIsModalVisibleEC2(false) } />: null}
                                    </div>
                                </center>
                            </section>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='chat' src={chatboot} alt="" />
                </div>
            </div>
        </div>
        <footer className='corFundoF'>
            <div className='divisaoF'>   
            </div>
        </footer>
    </div>
    );
}

export default App