import '../../css/empresa.css'
import Logo from '../../img/imgLogin/darede.png'
import boneco from "../../img/imgCliente/boneco_listagem.png"
import sair from '../../img/imgCliente/sair.png'
import chatboot from '../../img/imgCliente/icone_chat.png'
import Sair from '../../img/imgCliente/sair.png'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function ListaCadastroClientes() {
    const [users, getUsers] = useState([]);
    const [grupo, setGrupo] = useState('');
    const [email, getEmail] = useState([]);
    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/clientes/grupos'
    const urll = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/clientes'
    const teste = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/teste'

    useEffect(() => {
        listagemEmail();
        //listagemUsuarios();
    }, []);

    const listagemUsuarios = () => {
        // let config = {
        //     headers:{
        //         grupo:Clientes
        //     }
        // }
        axios.get(teste, {
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,OPTIONS',
                'Content-Type': 'application/json',
                'grupo': grupo
            }
        })
            .then((res) => {
                const usuarios = res.data.data.usuarios;
                getUsers(usuarios);
                console.log(res)
            })
            .then((headers) => {
                console.log(headers)
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    const listagemEmail = () => {
        axios.get(urll)
            .then((res1) => {
                const listagememail = res1.data.data.listagememail;
                getEmail(listagememail);
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    return (
        <div>
            <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="https://emersondiasdealmeida.grafana.net/d/AWSEc2000/aws-ec2-01?orgId=1&from=1652812875767&to=1652899275767">Monitoramento EC2</a>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaClientes">Listagem Clientes</a>
                        <a href="/EC2">Cadastro EC2</a>
                        <a href="/login" ><img className='sair' src={sair} alt="" /></a>
                    </div>
                </div>
            </header>
            <div className='divisaoPrinc2'>

                <div className='boneco'>
                    <img src={boneco} alt="" />
                </div>
                <div className='blocoCentralPrincipal_Lista_CLientes'>
                    <div>
                        <div className='divisao_listagem_cliente'>
                            <h1 className='lista_do_map'>Lista de Clientes</h1>
                        </div>
                        <div >
                            <form onSubmit={listagemUsuarios}>
                                <label htmlFor="text"></label>
                                <input type="text" name='texto' value={grupo} onChange={(event) => setGrupo(event.target.value)}></input>
                                <button type='submit' /* value={(users)} onChange={(event) => getUsers(event.target.value)}*/>Teste</button>
                            </form>
                            {
                                users.map((res) => {

                                    console.log(res)
                                    return (
                                        <div className='blocoCentral_Lista_Clientes'>
                                            <div key={res.data}>
                                                <div className="informacoes">
                                                    <section className="separacao" >
                                                        <ul>
                                                            <li>Nome: {res} </li>
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
                <div>
                    <img className='chat' src={chatboot} alt="" />
                </div>

            </div>
        </div>
    );
}

export default ListaCadastroClientes;