import '../../css/funcionario.css'
import { useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
import UserPool from '../../components/UserPool'

//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function CadastroVPC() {
    
    const [AMI, setAMI] = useState("");
    const [TYPE, setTYPE] = useState("");
    const [KEY, setKEY] = useState("");
    const [TAG, setTAG] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        
    };




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
                        <a href="https://emersondiasdealmeida.grafana.net/d/AWSEc2000/aws-ec2-01?orgId=1&from=1652812875767&to=1652899275767">Monitoramento EC2</a>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaClientes">Listagem Usuarios</a>
                        <a href="/EC2">Cadastro EC2</a>
                        <a href="/login" ><img className='sair' src={sair} alt="" /></a>
                    </div>
                </div>
            </header>
            <div className='divisaoPrin'>
                <div className='divisaoFundo'>
                    <div>
                        <img className='imagem_lado_d' src={ganhos} alt="" />
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
                    <h1 className='cima'>Cadatro de VPC</h1>
                    <form onSubmit={onSubmit}>
                        <div className='divisoesdaVPC'>

                            <p>Empresa:</p><br></br>
                            <div className='divisoesdaVPC2'>
                                <select name="" id="">

                                    <option value="">Escolha uma das Opções</option>
                                    <option value="">SCANIA</option>
                                    <option value="">MERCEDES</option>
                                    <option value="">BMW</option>
                                    <option value="">CASAS BAHIA</option>

                                </select>
                            </div>

                            <p>Funcionário:</p><br></br>
                            <div className=''>
                                <select name="" id="">

                                    <option value="">Escolha uma das Opções</option>
                                    <option value="">Carlos</option>
                                    <option value="">Pedro</option>
                                    <option value="">Makoto</option>
                                    <option value="">Gabrielly</option>

                                </select>
                            </div>

                        </div>



                        <p>EMAIL:</p>
                        <label htmlFor="email"></label>
                        <input type="email" placeholder='ex: email@email.com' className='solitarioss' name='Email' ></input>

                        {/* <p>FUNCIONARIO:</p>
                        <label htmlFor="email"></label>
                        <input className='solitarioss'  name='Email' value={email} onChange={(event) => setEmail(event.target.value)}></input> */}


                        <p>ENDEREÇO:</p>
                        <label htmlFor="address"></label>
                        <input className='solitarioss' placeholder='ex: Rua joao, 10 , SP' name='Endereco'></input>

                        <div className='parte2'>

                            <div>
                                <p>DATA DE NASCIMENTO:</p>
                                <label htmlFor="birthdate"></label>
                                <input type="date"  name='Data'></input>
                            </div>
                        </div>


                        <div className='parte4'>
                            <div>
                                <p>CELULAR:</p>
                                <label htmlFor="phone"></label>
                                <input type="tel" placeholder='ex: 5511999552288' name='Celular'></input>
                            </div>

                        </div>

                        <div>
                            <p>CRIAR SENHA:</p>
                            <label htmlFor="password"></label>
                            <input type="password" className='solitarioss' name='Senha'></input>
                        </div>

                        <div>
                            <button type='submit' className='cadastrarbtn'>Cadatrar</button>
                            <button className='cancelarbtn'>Cancelar</button>
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