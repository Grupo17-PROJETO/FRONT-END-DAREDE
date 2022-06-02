import '../../css/empresa.css'
import { Component, useEffect, useState } from 'react';
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

    const [inst, setInst] = useState('');
    const [inst1, setInst1] = useState('');
    const [inst2, setInst2] = useState('');
    const [ec2, getEc2] = useState([]);
    const urlget = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2'
    const urloff = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/desligar'
    const urlon = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/ligar'

    useEffect(() => {
        listarEc2();
    }, []);

    const listarEc2 = () => {
        const options = {
            headers: { 'nome': inst1 }
        }
        console.log(options);
        axios.get(urlget, options)
            .then((res) => {
                console.log(res);
                const ec2 = res.data.data.status;
                getEc2(ec2);
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    const pararEc2 = () => {
        axios.post(urloff, { 'tag': inst })
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    const ligarEc2 = () => {
        axios.post(urlon, { 'tag': inst2 })
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
                        <input type="text" name='desligar' value={inst} onChange={(event) => setInst(event.target.value)}></input>
                        <input type="button" onClick={pararEc2} />
                    </form>

                    <form action='#'>
                        <label htmlFor="text"></label>
                        <input type="text" name='texto' value={inst1} onChange={(event) => setInst1(event.target.value)}></input>
                        <input type="button" onClick={listarEc2} />
                    </form>

                    <form action='#'>
                        <label htmlFor="text"></label>
                        <input type="text" name='texto' value={inst2} onChange={(event) => setInst2(event.target.value)}></input>
                        <input type="button" onClick={ligarEc2} />
                    </form>
                    {
                        ec2.map((res) => {
                            return (
                                <div className='blocoCentral_Lista_Clientes'>
                                    <div key={res}>
                                        <div className="informacoes">
                                            <section className="separacao" >
                                                <ul>
                                                    <li>Estado: {res}</li>
                                                    {/* <li>Estado2: {res}</li>
                                                    <li>Estado3: {res}</li> */}
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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