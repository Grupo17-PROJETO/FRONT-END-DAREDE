import '../../css/funcionario.css'
import { Component, useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import sair from '../../img/imgCliente/sair.png'
import ganhos2 from '../../img/imgCliente/ganhos2.png'
import IconeUsuario from '../../img/imgCliente/iconeUsuario.png'
import localizacao from '../../img/imgCliente/localizacao.png'
import telefone from '../../img/imgCliente/telefone.png'
import insta from '../../img/imgCliente/instagram.png'
import linkedin from '../../img/imgCliente/linkedin.png'
import whats from '../../img/imgCliente/whats.png'
import boneco from '../../img/imgFuncionarios/boneco_cadastro.png'
import UserPool from '../../components/UserPool'

//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function Signup() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [celular, setCelular] = useState("");
    const [endereco, setEndereco] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(
            email, senha,
            [
                { Name: 'given_name', Value: nome },
                { Name: 'birthdate', Value: nascimento },
                { Name: 'phone_number', Value: celular },
                { Name: 'address', Value: endereco }
            ],
            null, (err, data) => {
                if (err) { console.log(err); }
                console.log(data.user)
            });
    };

    function Limpar() {
        document.onSubmit.nome.value = "";
        document.onSubmit.nascimento.value = "";
        document.onSubmit.celular.value = "";
        document.onSubmit.endereco.value = "";
        document.onSubmit.nome.focus();
    }

    function Sair() {




    }


    return (
        // <div>
        //     <form onSubmit={onSubmit}>
        //         <label htmlFor="name">Nome</label>
        //         <input value={nome} onChange={(event) => setNome(event.target.value)}></input>

        //         <label htmlFor="birthdate">Data de nascimento</label>
        //         <input value={nascimento} onChange={(event) => setNascimento(event.target.value)}></input>

        //         <label htmlFor="phone">Celular</label>
        //         <input value={celular} onChange={(event) => setCelular(event.target.value)}></input>

        //         <label htmlFor="address">Endereço</label>
        //         <input value={endereco} onChange={(event) => setEndereco(event.target.value)}></input>

        //         <label htmlFor="email">Email</label>
        //         <input value={email} onChange={(event) => setEmail(event.target.value)}></input>

        //         <label htmlFor="password">Senha</label>
        //         <input value={senha} onChange={(event) => setSenha(event.target.value)}></input>

        //         <button type='submit'>Cadastrar</button>
        //     </form>
        // </div>


        <div>
            <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/CadastroFuncionario">Cadastro Funcionarios</a>
                        <a href="/ListaCadastroClientes">Listagem Clientes</a>
                        <a href="">Listagem Funcionarios</a>
                        
                        <img onClick={Sair} className='sair' src={sair} alt="" />
                    </div>
                </div>
            </header>
            <div className='divisaoPrin'>
                <div className='divisaoFundo'>
                    <div>
                        <img className='imagem_lado_d' src={ganhos2} alt="" />
                    </div>
                    {/* <div className='blocoInfo'>
                        <div>
                            <section className='posicaoI' >
                                <img className='circuloFoto' src={Fake} alt="" />
                            </section>
                            <section className='selecaoLinhas'>
                                <div className='linha'></div>
                                <div >
                                    <div className='dividirLinha'>
                                        <img className='iconeU' src={IconeUsuario} alt="" />
                                        <h1>Dados Usuario</h1>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3 >Nome:</h3> <p>Pedro</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>Empresa:</h3> <p>Corinthians</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>Nome:</h3> <p>ti@corinthians.com</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>CNPJ:</h3> <p>131.213.421-89</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>CEL:</h3> <p>11 92134-1223</p>
                                    </div>
                                    <div className='dividirLinha'>
                                        <h3>TEL:</h3> <p>11 2752-2190</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div> */}
                </div>
                <div className='Coluna_Linhas'>
                    <h1 className='cima'>Cadatro de Funcionarios</h1>
                    <form onSubmit={onSubmit}>

                        <p>NOME:</p>
                        <div className='parte1'>
                            <label htmlFor="name"></label>
                            <input value={nome} placeholder='ex: Maria de Fatima de Oliveira Nunes ' name='Nome' onChange={(event) => setNome(event.target.value)}></input>
                        </div>

                        <p>EMAIL:</p>
                        <label htmlFor="email"></label>
                        <input type="email" placeholder='ex: email@email.com'  className='solitarioss'  name='Email' value={email} onChange={(event) => setEmail(event.target.value)}></input>

                        {/* <p>FUNCIONARIO:</p>
                        <label htmlFor="email"></label>
                        <input className='solitarioss'  name='Email' value={email} onChange={(event) => setEmail(event.target.value)}></input> */}


                        <p>ENDEREÇO:</p>
                        <label htmlFor="address"></label>
                        <input className='solitarioss'  placeholder='ex: Rua joao, 10 , SP' name='Endereco' value={endereco} onChange={(event) => setEndereco(event.target.value)}></input>

                        <div className='parte2'>

                            <div>
                                <p>DATA DE NASCIMENTO:</p>
                                <label htmlFor="birthdate"></label>
                                <input type="date"  value={nascimento} name='Data' onChange={(event) => setNascimento(event.target.value)}></input>
                            </div>
                        </div>


                        <div className='parte4'>
                            <div>
                                <p>CELULAR:</p>
                                <label htmlFor="phone"></label>
                                <input type="tel"  placeholder='ex: 5511999552288'  value={celular} name='Celular'  onChange={(event) => setCelular(event.target.value)}></input>
                            </div>

                        </div>

                        <div>
                            <p>CRIAR SENHA:</p>
                            <label htmlFor="password"></label>
                            <input type="password"  className='solitarioss'name='Senha' value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                        </div>

                        <div>
                            <button  type='submit' className='cadastrarbtn'>Cadatrar</button>
                            <button className='cancelarbtn' onClick={Limpar}>Cancelar</button>
                        </div>


                    </form>

                </div>


                {/* <div>
                    <img className='imagem_lado_d' src={boneco} alt="" />
                </div> */}
            </div>
            
        </div>
    );
};