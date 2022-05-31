import '../../css/empresa.css'
import { Component, useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import prancheta from '../../img/imgCliente/prancheta.png'
import sair from '../../img/imgCliente/sair.png'
import novo from '../../img/imgCliente/b_novo.png'
import chatboot from '../../img/imgCliente/icone_chat.png'
import axios from 'axios';


export default function MeusEquipamentos() {

    (function (d, m) {
        var kommunicateSettings =
            { "appId": "52bdeedeba6b4aa21e99cc515d0a0cc8", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    const [ec2, setEc2] = useState([]);

    const pararEc2 = () => {
        const options = {
            method: 'POST',
            headers: { 'regiao': 'us-east-1', nomeinst: ec2.join([ ]) }
        }
        console.log(options);
        axios.post('https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/desligar', options)
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    return (
        <div>

            <header>
                <div className='corFundoH'>

                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="/ListagemEquipamentos">Listar Equipamentos</a>
                        <a href="">Contato</a>
                        <a href="/" target="principal" ><img className='sair_empresa' src={sair} alt="" /></a>

                    </div>

                </div>

            </header>
            <div className='divisaoPrinc'>

                <div className='boneco2'>
                    <img src={novo} alt="" />
                </div>

                <div className='blocoCentralPrincipal'>

                    <form action='#'> 
                        <label htmlFor="text"></label>
                        <input type="text" name='texto' value={ec2} onChange={(event) => setEc2(event.target.value)}></input>
                        <input type="button" onClick={pararEc2}/>
                    </form>

                    <div>
                        <div className='divisao_meus'>
                            <img src={prancheta} alt="" />
                            <h1>MEUS EQUIPAMENTOS</h1>
                        </div>

                        <div className='blocoCentral_Meus_equipamentos'>

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

                        <div className='blocoCentral_Meus_equipamentos'>
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
                    {/* <img className='chat' src={chatboot} alt="" /> */}
                </div>

            </div>

        </div>
    )
}