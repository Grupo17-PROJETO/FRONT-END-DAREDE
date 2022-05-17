
import Modal_VPC from "../../components/Modal";
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
import Modal_EC2 from "../../components/Modal_EC2";
import Sair from '../../img/imgCliente/sair.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function ListaCadastroClientes() {
    const [users, getUsers] = useState([]);
    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/clientes'

    useEffect(() => {
        listagemUsuarios();
    }, []);

    const listagemUsuarios = () => {
        axios.get(url)
            .then((res) => {
                const listagemnomes = res.data.data.listagemnomes;
                getUsers(listagemnomes);
                console.log(res)
            })
            .then((res1) => {
                const listagememail = res1.data.data.listagememail;
                getUsers(listagememail);
                console.log(res1)
            })
            .then((res2) => {
                const listagemcelular = res2.data.data.listagemcelular;
                getUsers(listagemcelular);
                console.log(res2)
            })
            .catch(error => console.error(`Erro: ${error}`));
    }

    return (
        <div>
            <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaCadastroClientes">Listagem Clientes</a>
                        <a href="/EC2">Cadastro EC2</a>
                        <a href="/VPC">Cadastro VPC</a>
                        {/* <a href="/CadastroFuncionario">Cadastro Funcionarios</a>
                        <a href="">Listagem Funcionarios</a> */}
                        <img onClick={Sair} className='sair' src={sair} alt="" />
                    </div>
                </div>
            </header>
            <div className='divisaoPrinc2'>
                <div className='divisaoFundo'>
                    <div className='boneco'>
                        <img src={boneco} alt="" />
                    </div>
                    <div className='blocoCentralPrincipal'>
                        <div>
                            <div className='divisao'>
                                <h1>Lista de Clientes</h1>
                            </div>
                            <div className='blocoCentral'>
                                {
                                    users.map((res, res1, res2) => {
                                        console.log(res)
                                        return (
                                            <div key={res.data}>
                                                <div className="informacoes">
                                                    <section className="separacao" >
                                                        <ul>
                                                            <li>Nome: {res} </li>
                                                            <li>Email: {res1}</li>
                                                            <li>Celuar: {res2}</li>
                                                        </ul>
                                                    </section>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <section className='informacoes'>
                                    <ul>
                                        <li>Nome:</li>
                                        <li>Email:</li>
                                        <li>Celuar:</li>
                                    </ul>
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
                </div>
            </footer>
        </div>
    );
}
export default ListaCadastroClientes

{/* <div class="LARANJAO">

{
    ListarConsultas.map((consulta) => {

        return (
            <div key={consulta.idPaciente}>
                <div className="brancao">

                    <section className="lista">
                        <ul className="separacao">
                            <li>Paciente: {consulta.idPacienteNavigation.nomePaciente}</li>
                            <li>Médico: {consulta.idMedicoNavigation.nomeMedico} </li>
                            <li>Especialidade:{consulta.idMedicoNavigation.idEspecialidadeNavigation.nomeEspecialidade}</li>
                            <li>Data/Hora:{Intl.DateTimeFormat("pt-BR", {
                                year: 'numeric', month: 'numeric', day: 'numeric',
                                hour: 'numeric', minute: 'numeric', hour12: true
                            }).format(new Date(consulta.dataHora))}</li>
                            <li>Descrição:{consulta.descricao}</li>
                            <li>Situação:{consulta.idSituacaoNavigation.tipoSituacao}</li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    })
}


</div> */}