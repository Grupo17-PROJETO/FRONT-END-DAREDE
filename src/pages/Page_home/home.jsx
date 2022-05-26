import React, { useState } from "react";
import '../../css/ferrari.css'
import Fundo from '../../img/imgHome/fundo.png'
import Logo from '../../img/imgLogin/darede.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import 'react-toastify/dist/ReactToastify.css';
import icone_login from '../../img/imgHome/icone_login.png';
import imagem1 from '../../img/imgHome/fundo_vpc.png';
import imagem2 from '../../img/imgHome/fundo_ec2.png'
import imagem3 from '../../img/imgHome/fundo_vagas.png'
import imagem4 from '../../img/imgHome/fundo_migracao.png'
import imagem5 from '../../img/imgHome/fundo_ambiente.png'




function Home() {


    (function (d, m) {
        var kommunicateSettings =
            { "appId": "52bdeedeba6b4aa21e99cc515d0a0cc8", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});



    return (



        <div>

         




            <div className="body_login_ferrari">

            <header>
                <div className='corFundoH_Home'>

                        <img className='logo' src={Logo} alt="" />


                        <div className='nave2'>
                            <a href="/login" ><img className='nave_logo' src={icone_login} alt="" /></a>
                        </div>

                </div>


            </header>
                <div className="content">

                    <div className="slides">

                        <input className="radios" type="radio" name="radio" id="slide1" />
                        <input className="radios" type="radio" name="radio" id="slide2" />
                        <input className="radios" type="radio" name="radio" id="slide3" />
                        <input className="radios" type="radio" name="radio" id="slide4" />
                        <input className="radios" type="radio" name="radio" id="slide5" />

                        <div className="slide s1">

                            <img src={imagem1} alt="VOLVO" />

                        </div>

                        <div className="slide">

                            <img src={imagem2} alt="VOLVO" />

                        </div>

                        <div className="slide">

                            <img src={imagem3} alt="VOLVO" />

                        </div>

                        <div className="slide">

                            <img src={imagem4} alt="VOLVO" />

                        </div>

                        <div className="slide">

                            <img src={imagem5} alt="VOLVO" />

                        </div>


                    </div>

                </div>
                <div className="navigation">

                    <label className="bar" for="slide1"></label>
                    <label className="bar" for="slide2"></label>
                    <label className="bar" for="slide3"></label>
                    <label className="bar" for="slide4"></label>
                    <label className="bar" for="slide5"></label>


                </div>



            </div>
        </div>



    );


}

export default Home