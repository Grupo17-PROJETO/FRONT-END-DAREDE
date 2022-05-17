import React, { useState } from "react";
import Modal_VPC from "../../components/Modal";
import '../../css/home.css'
import Fundo from '../../img/imgHome/fundo.png'
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



function Home() {

    const [isModalVisibleVPC, setIsModalVisibleVPC] = useState(false);
    const [isModalVisibleEC2, setIsModalVisibleEC2] = useState(false);

    return (

        <div >

            <header>
                <div className='corFundoH2'>

                    <img className='logo' src={Logo} alt="" />


                    <div className='nave2'>
                        <a href="/login">Login</a>
                        <a href="/login" ><img className='pranchinha' src={prancheta} alt="" /></a>


                    </div>




                </div>


            </header>
            <div className="cordefundo">


                <img className="imgfundohome" src={Fundo} alt="" />

                <div className='fundodivhome2'>

                    <div className='fundodivhome'>
                        <h1>Serviços</h1>

                    </div>

                </div>



                <div className="servicoshome">

                    <div className="bloquinhos2">

                        <div className="VPCHOME"></div>
                        <div className="EC2HOME"></div>

                    </div>


                    <div className="enviar_email">
                        <form action="">
                            <h4>REALIZAR ORÇAMENTO</h4>
                            <p>Empresa</p>
                            <input className="inputhome" type="text" />
                            <p>Telefone</p>
                            <input className="inputhome" type="tel" />
                            <p>Email</p>
                            <input className="inputhome" type="email" />
                            <div className="divdiv">
                                <div>
                                    <p>Data de Nascimento</p>
                                    <input className="datahome" type="date" />
                                </div>

                                <div>
                                    <p>Serviço</p>
                                    <select className="servicoshome" name="servicosselec" id="servicosselec">
                                        <option value="">Selecione uma das Opções</option>
                                        <option value="">EC2</option>
                                        <option value="">VPC</option>

                                    </select><br></br>
                                </div>
                            </div>




                            <button>ENVIAR</button>
                        </form>


                    </div>




                </div>

                <footer className='corFundoF'>

                <div className='divisaoF'>

                </div>
            </footer>

            </div>
            

        </div>


    );


}

export default Home