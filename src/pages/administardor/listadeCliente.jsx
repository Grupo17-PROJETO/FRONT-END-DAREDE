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
    useEffect(() => {
        listagemUsuarios();
    }, []);

    const listagemUsuarios = () => {
        const options = {
            method: 'GET',
            headers: { 'grupo': grupo }
        }
        axios.get(url, options)
            .then((res) => {
                const usuarios = res.data.data.usuarios;
                getUsers(usuarios);
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
                            <form action='#'>
                                <label htmlFor="text"></label>
                                <input type="text" name='texto' value={grupo} onChange={(event) => setGrupo(event.target.value)}></input>
                                <input type="button" onClick={listagemUsuarios} />
                            </form>
                            {
                                users.map((res) => {
                                    return (
                                        <div className='blocoCentral_Lista_Clientes'>
                                            <div key={res}>
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
                            {/* {
                                users.map((res, key) => {

                                    console.log(res, key)
                                    return (
                                        <div className='blocoCentral_Lista_Clientes'>
                                            <div>
                                                <div className="informacoes">
                                                    <section className="separacao" >
                                                        <ul>
                                                            <li>Nome: {res} </li>
                                                            <li>Email: {key[1]}</li>
                                                            <li>Celuar: {res2}</li> 
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })
                            } */}

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