import '../../css/funcionario.css'

import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
import UserPool from '../../components/UserPool'
import React, { useState, useEffect } from "react";
import axios from "axios";

//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function CadastroEC2() {
    const [ami, setAmi] = useState('');
    const [type, setType] = useState('');
    const [tag, setTag] = useState('');
    const [ec2, setEc2] = useState('');

    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/criar'

    const criacaoec2 = () => {
        const options = {
            method: 'POST',
            headers: { 'Ami': ami, 'Instance': type, 'Tag': tag }
        }
        console.log(options);
        axios.post(url, options)
            .then((res) => {
                console.log(`Instancia criada ${res.data}`)
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

                </div>
                <div className='Coluna_Linhas'>
                    <h1 className='cima'>Cadatro de EC2</h1>
                    <form action='#'>

                        <p>AMI:</p>
                        <label htmlFor="email"></label>
                        <input type="text" placeholder='ex: email@email.com' className='solitarioss' name='Email' value={ami} onChange={(event) => setAmi(event.target.value)}></input>


                        <p>TYPE:</p>
                        <label htmlFor="address"></label>
                        <input className='solitarioss' placeholder='ex: Rua joao, 10 , SP' name='Endereco' value={type} onChange={(event) => setType(event.target.value)}></input>


                        <p>TAG:</p>
                        <label htmlFor="password"></label>
                        <input type="text" className='solitarioss' name='Senha' value={tag} onChange={(event) => setTag(event.target.value)}></input>

                        <div>
                        </div>

                        <label htmlFor="text"></label>
                        <input type="button" onClick={criacaoec2} value={ec2} onChange={(event) => setEc2(event.target.value)} ></input>
                    </form>


                </div>

            </div>

        </div >

    );
};