import '../../css/empresa.css'
import Logo from '../../img/imgLogin/darede.png'
import boneco from "../../img/imgCliente/boneco_listagem.png"
import sair from '../../img/imgCliente/sair.png'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import empresa from '../../img/imgCliente/gif_empresa.png'
import usuario from '../../img/imgCliente/img_usuario.png'
import lupa from '../../img/imgCliente/lupa.png'
import ganhos from '../../img/imgCliente/ganhos.png'



function ListaCadastroClientes() {
    const [users, getUsers] = useState([]);
    const [grupo, setGrupo] = useState('');

    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/clientes/grupos'

    useEffect(() => {
        listagemUsuarios();
    }, []);

    const listagemUsuarios = () => {
        const options = {
            headers: { 'grupo': grupo }
        }
        console.log(options);
        axios.get(url, options)
            .then((res) => {
                const users = res.data.data.usuarios;
                console.log(res);
                getUsers(users);
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    return (
        <div>
            <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="https://administradordarede.grafana.net/d/AWSEc2000/aws-ec2-01?orgId=1&from=now-24h&to=now&kiosk">Monitoramento EC2</a>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaClientes">Listagem Usuario</a>
                        <a href="/acompanhamento">Acompanhamento</a>
                        <a href="/EC2">Cadastro EC2/VPC</a>
                        <a href="/login" ><img className='sair' src={sair} alt="" /></a>
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


                    <div className='centro_cliente'>

                        <div className='descer'>

                            <div className='divisao_listagem_cliente'>
                                <h1 className='lista_do_map'>Lista de Usuarios</h1>
                            </div>
                            <div className='blocoCentralPrincipal_Lista_CLientes2'>

                                <div>

                                    <div >
                                        <form action='#'>
                                            <label htmlFor="text"></label>
                                            <div className='divdiv'>

                                                {/* <div>
                                            <input className='input_busca' placeholder='ex: Clientes ou Funcionarios' type="text" name='texto' value={grupo} onChange={(event) => setGrupo(event.target.value)}></input>

                                        </div> */}

                                                <div>
                                                    <select className='input_busca' value={grupo} onChange={(event) => setGrupo(event.target.value)}>
                                                        <option>Escolha Uma Op????o</option>
                                                        <option>Clientes</option>
                                                        <option>Funcionarios</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <button className='botaozinho' type="button" onClick={listagemUsuarios}>
                                                        <img className='lupa' src={lupa} alt="" />
                                                    </button>

                                                </div>


                                            </div>


                                        </form>
                                        {
                                            users.map((res) => {
                                                return (
                                                    <div className='blocoCentral_Lista_Clientes2'>
                                                        <div key={res}>
                                                            <div className="informacoes">
                                                                <section className="separacao" >
                                                                    <ul>

                                                                        <div className='divisao_listagem_blocos'>
                                                                            <img className='usus_blococs' src={usuario} alt="" />
                                                                            <div className='divisao_nomes'>

                                                                                <li className='resut_nome'>{res}</li>

                                                                            </div>

                                                                        </div>


                                                                        {/* <li>Email: {res1}</li>
                                                                <li>Celuar: {res2}</li>  */}
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
                            </div>

                        </div>



                    </div>

                </div>



            </div>
        </div>
    );
}

export default ListaCadastroClientes;