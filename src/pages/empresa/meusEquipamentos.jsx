import '../../css/empresa.css'
import { Component, useEffect, useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import axios from 'axios';
import ganhos from '../../img/imgCliente/ganhos.png'
import empresa2 from '../../img/imgCliente/gif_empresa2.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MeusEquipamentos() {

    const [inst, setInst] = useState('');
    const [inst1, setInst1] = useState('');
    const [inst2, setInst2] = useState('');
    const [ec2, getEc2] = useState([]);
    const urlget = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2'
    const urloff = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/desligar'
    const urlon = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/ligar'

    // useEffect(() => {
    //     listarEc2();
    // }, []);

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
                        <a href="/ListagemEquipamentos">Equipamentos</a>
                        <a href="/" target="principal" ><img className='sair_empresa' src={sair} alt="" /></a>
                    </div>


                </div>

            </header>
            <div className='divisaoPrin'>

                <div className='divisaoFundo'>

                    <div>
                        <img className='imagem_lado_d' src={ganhos} alt="" />
                    </div>

                </div>


                <div className='Coluna_Linhas'>
                    <div>

                        <div className='divisao_listagem_cliente'>
                            <h1 className='lista_do_map2'>Acompanhamento</h1>
                        </div>
                        <div className='blocoCentralPrincipal_Lista_CLientes'>

                            <div>

                                <div >

                                    <form action='#'>
                                        <label htmlFor="text"></label>
                                        <p className='font'>Pausar</p>
                                        <div className='divsao_acompanhamento'>

                                            <div>
                                                <input className='input_busca2' type="text" name='desligar' value={inst} onChange={(event) => setInst(event.target.value)}></input>
                                            </div>
                                            <div>
                                                <input type="button" className='botaozinho1' onClick={pararEc2} />
                                                {/* <button className='botaozinho1'onClick={pararEc2}></button> */}
                                            </div>

                                        </div>


                                    </form>


                                    <form action='#'>
                                        <label htmlFor="text"></label>
                                        <p className='font'>Ligar</p>
                                        <div className='divsao_acompanhamento'>

                                            <div>

                                                <input className='input_busca2' type="text" name='texto' value={inst2} onChange={(event) => setInst2(event.target.value)}></input>

                                            </div>

                                            <div>
                                                <input type="button" className='botaozinho2' onClick={ligarEc2} />
                                                {/* <button className='botaozinho2'onClick={ligarEc2}></button> */}
                                            </div>

                                        </div>



                                    </form>

                                    <form action='#'>
                                        <label htmlFor="text"></label>
                                        <p className='font'>Estado</p>
                                        <div className='divsao_acompanhamento'>

                                            <div>
                                                <input className='input_busca2' type="text" name='texto' value={inst1} onChange={(event) => setInst1(event.target.value)}></input>
                                            </div>
                                            <div>
                                                <input className='botaozinho3' type="button" onClick={listarEc2} />
                                            </div>

                                        </div>


                                    </form>

                                    {
                                        ec2.map((res) => {
                                            return (
                                                <div className='blocoCentral_Lista_Clientes'>
                                                    <div key={res}>
                                                        <div className="informacoes">
                                                            <section className="separacao" >
                                                                <ul>
                                                                    <li className='font'>Estado: {res}</li>
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
                                </div>
                            </div>
                            <ToastContainer />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}