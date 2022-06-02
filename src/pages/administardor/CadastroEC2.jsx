import '../../css/funcionario.css'

import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
import UserPool from '../../components/UserPool'
import React, { useState, useEffect } from "react";
import axios from "axios";

//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function CadastroEC2() {
    const [AMI, setAMI] = useState('');
    const [TYPE, setTYPE] = useState('');
    const [TAG, setTAG] = useState('');
    const [ec2, setEc2] = useState('');

    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/criar'

    const criacaoec2 = () => {
        axios.post(url, { Ami: AMI, Instance: TYPE, Tag: TAG })
            .then((res) => {
                console.log(`Instancia criada`, res.data)
                console.log(res)
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
                        <a href="/ListaClientes">Listagem Usuarios</a>
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
                    <div>
                        <h1 className='cima'>Cadastro de EC2/VPC</h1>
                        <form action='#'>

                            <p className='font'>Ami:</p>
                            <label htmlFor="email"></label>
                            <input type="text" placeholder='ex:' className='solitarioss' name='Email' value={AMI} onChange={(event) => setAMI(event.target.value)}></input>


                            <p className='font'>Tipo:</p>
                            <label htmlFor="address"></label>
                            <input className='solitarioss' placeholder='ex: Rua joao, 10 , SP' name='Endereco' value={TYPE} onChange={(event) => setTYPE(event.target.value)}></input>


                            <p className='font'>Empresa:</p>
                            <label htmlFor="password"></label>
                            <input type="text" className='solitarioss' name='Senha' value={TAG} onChange={(event) => setTAG(event.target.value)}></input>

                            <div>
                            </div>

                            <label htmlFor="text"></label>
                            <input className='botao_vpc_ec2' type="button" onClick={criacaoec2} value={ec2} onChange={(event) => setEc2(event.target.value)} ></input>
                        </form>

                    </div>

                    <label htmlFor="text"></label>
                    {/* <div>
                            <button type='submit' onClick={criacaoec2} value={ec2} onChange={(event) => setEc2(event.target.value)} >Cadastrar</button>
                        </div> */}
                </div>

            </div>

        </div>
    );
};