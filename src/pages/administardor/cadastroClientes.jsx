import '../../css/funcionario.css'
import { useState } from 'react';
import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
import UserPool from '../../components/UserPool'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function Signup() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [celular, setCelular] = useState("");
    const [endereco, setEndereco] = useState("");
    const [grupo, setGrupo] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(
            email, senha,
            [
                { Name: 'given_name', Value: nome },
                { Name: 'birthdate', Value: nascimento },
                { Name: 'phone_number', Value: celular },
                { Name: 'address', Value: endereco },


            ],
            null, (err, data) => {
                if (err) { console.log(err);toast.error("Ta errado") } else{

                    console.log(data.user)
                    toast.success("Cadastrado com Sucesso!!")
                }
            });
    };

    return (


        <div>
            <header>
                <div className='corFundoH'>
                    <img className='logo' src={Logo} alt="" />
                    <div className='nave'>
                    <a href="https://administradordarede.grafana.net/d/AWSEc2000/aws-ec2-01?orgId=1&from=now-24h&to=now&kiosk">Monitoramento EC2</a>
                        <a href="/cadastroCliente">Cadastro Clientes</a>
                        <a href="/ListaClientes">Listagem Usuarios</a>
                        <a href="/EC2">Cadastro EC2/VPC</a>
                        <a href="/" ><img className='sair' src={sair} alt="" /></a>
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

                        <h1 className='cima'>Cadastro de Clientes</h1>
                        <form onSubmit={onSubmit}>

                            <p className='paragro__'>Empresa:</p>
                            <div className='parte1'>
                                <label htmlFor="name"></label>
                                <input value={nome} placeholder='ex: Scania Latim America' name='Nome' onChange={(event) => setNome(event.target.value)}></input>
                            </div>

                            <p className='paragro__'>Email:</p>
                            <label htmlFor="email"></label>
                            <input type="email" placeholder='ex: email@email.com' className='solitarioss' name='Email' value={email} onChange={(event) => setEmail(event.target.value)}></input>


                            <p className='paragro__'>Endereço:</p>
                            <label htmlFor="address"></label>
                            <input className='solitarioss' placeholder='ex: Rua joao, 10 , SP' name='Endereco' value={endereco} onChange={(event) => setEndereco(event.target.value)}></input>

                            <div className='parte2'>

                                <div>
                                    <p className='paragro__'>Data Atual:</p>
                                    <label htmlFor="birthdate"></label>
                                    <input type="date" value={nascimento} name='Data' onChange={(event) => setNascimento(event.target.value)}></input>
                                </div>
                            </div>


                            <div className='parte4'>
                                <div>
                                    <p className='paragro__'>Celular:</p>
                                    <label htmlFor="phone"></label>
                                    <input type="tel" placeholder='ex: +5511999552288' value={celular} name='Celular' onChange={(event) => setCelular(event.target.value)}></input>
                                </div>

                            </div>

                            <div>
                                <p className='paragro__'>Criar Senha:</p>
                                <label htmlFor="password"></label>
                                <input type="password" className='solitarioss' name='Senha' value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                            </div>

                            <div>
                                <button type='submit' className='cadastrarbtn'>Cadastrar</button>
                            </div>

                        </form>

                    </div>

                    <ToastContainer />
                </div>

            </div>

        </div>
    );
};