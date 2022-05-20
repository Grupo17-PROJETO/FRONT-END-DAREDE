import '../../css/funcionario.css'
import { useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
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
        

        <div>
              <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                        <a href="https://emersondiasdealmeida.grafana.net/d/AWSEc2000/aws-ec2-01?orgId=1&from=1652812875767&to=1652899275767">Monitoramento EC2</a>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaClientes">Listagem Clientes</a>
                        <a href="/EC2">Cadastro EC2</a>
                        <a href="/VPC">Cadastro VPC</a>
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
                    <h1 className='cima'>Cadatro de Clientes</h1>
                    <form onSubmit={onSubmit}>

                        <p>EMPRESA:</p>
                        <div className='parte1'>
                            <label htmlFor="name"></label>
                            <input value={nome} placeholder='ex: Scania Latim America' name='Nome' onChange={(event) => setNome(event.target.value)}></input>
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
                                <p>DATA ATUAL:</p>
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