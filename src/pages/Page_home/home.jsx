import React, { useState } from "react";
import '../../css/home.css'
import Fundo from '../../img/imgHome/fundo.png'
import Logo from '../../img/imgLogin/darede.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import 'react-toastify/dist/ReactToastify.css';
import icone_login from '../../img/imgHome/icone_login.png'



function Home() {


    (function(d, m){
        var kommunicateSettings = 
            {"appId":"52bdeedeba6b4aa21e99cc515d0a0cc8","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});



    return (

        <div >

            <header>
                <div className='corFundoH2'>

                    <img className='logo' src={Logo} alt="" />


                    <div className='nave2'>
                        <a href="/login" ><img className='pranchinha' src={icone_login} alt="" /></a>
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

                        <div className="VPCHOME">


                            <section className="section_ec2B" >
                                <img className="blcima_home" src={VPC} alt="" />
                                <h4>VPC</h4>
                            </section>
                            <section className="section_ec2A">


                                <p className="paragrafo1_home">Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>

                            </section>


                        </div>
                        <div className="EC2HOME">

                            <section className="section_ec2B" >
                                <img className="blcima_home" src={EC2} alt="" />
                                <h4>EC2</h4>
                            </section>
                            <section className="section_ec2A">


                                <p className="paragrafo1_home">O Amazon Virtual Private Cloud é um serviço comercial de computação em nuvem que fornece aos usuários uma nuvem virtual privada, "fornecendo [uma] seção logicamente isolada do Amazon Web Services Cloud".</p>

                            </section>

                        </div>

                    </div>


                    {/* <div className="enviar_email">
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


                    </div> */}




                </div>

                <footer className='corFundoFHome'>

                    <div className='divisaoF'>

                    </div>
                </footer>

            </div>


        </div>


    );


}

export default Home