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
import novo from '../../img/imgCliente/b_novo.png'
import chatboot from '../../img/imgCliente/icone_chat.png'


export default class meusEquipamentos extends Component {




    render() {

        return (
            <div>

                <header>
                    <div className='corFundoH'>

                        <img className='logo' src={Logo} alt="" />
                        <div className='nave'>
                            <a href="/ListagemEquipamentos">Listar Equipamentos</a>
                            <a href="">Contato</a>
                            <a href="/" target="principal" ><img className='sair' src={sair} alt="" /></a>

                        </div>




                    </div>


                </header>
                <div className='divisaoPrinc'>


                    <div className='boneco2'>
                        <img src={novo} alt="" />
                    </div>

                    <div className='blocoCentralPrincipal'>

                        <div>
                            <div className='divisao'>
                                <img src={prancheta} alt="" />
                                <h1>MEUS EQUIPAMENTOS</h1>
                            </div>


                            <div className='blocoCentral'>

                                <section >
                                    <img className='blcimg' src={VPC} alt="" />

                                </section>

                                <section className='informacoes'>
                                    <h2>VPC</h2>
                                    <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                    <center>
                                        <button className='botaoEC2'>
                                            <p>Detalhes do Uso</p>
                                        </button>

                                    </center>
                                </section>



                            </div>

                            <div className='blocoCentral'>
                                <section >
                                    <img className='blcimg' src={EC2} alt="" />
                                </section>

                                <section className='informacoes'>
                                    <h2>EC2</h2>
                                    <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                    <center>
                                        <button className='botaoEC2'>
                                            <p>Detalhes do Uso</p>
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
        )
    }
}