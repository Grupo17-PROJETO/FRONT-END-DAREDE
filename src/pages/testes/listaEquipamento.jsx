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


export default class listaEquipamento extends Component {

   


    render() {

        return (
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


                        <div className='blocoInfo'>

                            <div>
                                <section className='posicaoI' >
                                    <img className='circuloFoto' src={Fake} alt="" />
                                </section>

                                <section className='selecaoLinhas'>


                                    <div className='linha'></div>

                                    <div >

                                        <div className='dividirLinha'>
                                            <img className='iconeU' src={IconeUsuario} alt="" />
                                            <h1>Dados Usuario</h1>
                                        </div>


                                        <div className='dividirLinha'>
                                            <h3 >Nome:</h3> <p>Pedro</p>
                                        </div>
                                        <div className='dividirLinha'>
                                            <h3>Empresa:</h3> <p>Corinthians</p>
                                        </div>
                                        <div className='dividirLinha'>
                                            <h3>Nome:</h3> <p>ti@corinthians.com</p>
                                        </div>
                                        <div className='dividirLinha'>
                                            <h3>CNPJ:</h3> <p>131.213.421-89</p>
                                        </div>
                                        <div className='dividirLinha'>
                                            <h3>CEL:</h3> <p>11 92134-1223</p>
                                        </div>
                                        <div className='dividirLinha'>
                                            <h3>TEL:</h3> <p>11 2752-2190</p>
                                        </div>

                                    </div>
                                </section>

                            </div>




                        </div>



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
                                            <button className='botaoEC2'>
                                                <p>Mais Informções</p>
                                            </button>

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
                                            <button className='botaoEC2'>
                                                <p>Mais Informções</p>
                                            </button>
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
                        <div >
                            <img className='logoF' src={Logo} alt="" />
                            <p className='baixoL'>Nosso objetivo é oferecer inovação sustentada,

                                aliando resultados e valores.</p>
                        </div>


                        <div className='localizacao' >
                            <img src={localizacao} alt="" />

                            <p>Alameda Araguaia, 2044 - Bloco 1 - CJ 210/211
                                06455-000 - Alphaville, Barueri
                                São Paulo - Brasil
                            </p>

                        </div>

                        <div className='divisaoFD'>
                            <img src={telefone} alt="" />
                            <p>+55 11 3900-1010 | 3995-6919</p>
                        </div>

                        <div className='divisaoFDN'>
                            <h3>Redes Sociais</h3>
                            <div>
                                <img src={whats} alt="" />
                                <img src={linkedin} alt="" />
                                <img src={insta} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }

}

