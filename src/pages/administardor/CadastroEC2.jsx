import '../../css/funcionario.css'

import Logo from '../../img/imgLogin/darede.png'
import sair from '../../img/imgCliente/sair.png'
import ganhos from '../../img/imgCliente/ganhos.png'
import UserPool from '../../components/UserPool'
import React, { useState, useEffect } from "react";
import axios from "axios";

//custom:CPF custom:RG custom:ESTADO custom:CIDADE

export default function CadastroEC2() {
    const [AMI, setAMI] = useState("");
    const [TYPE, setTYPE] = useState("");
    const [KEY, setKEY] = useState("");
    const [TAG, setTAG] = useState("");


    const [ec2, setEc2] = useState('');
    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/criar'

    const criacaoec2 = (event) => {
        event.preventDefault();
        axios.post(url)
            .then((res) => {
                console.log(`Instancia criada ${res.data}`)
            })
            .catch(error => console.error(`Erro: ${error}`));
    }







    // function listagemUsuarios() {

    //     let ec2 = {
    //         AMI: AMI,
    //         TYPE: TYPE,
    //         KEY: KEY,
    //         TAG: TAG

    //     }

    //     console.log(AMI)

    //     axios.post('https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/ec2/criar', ec2)
    //     .then((r)=>{
    //         console.log(r)
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })

    // }


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
            {/* <div className='divisaoPrin'>
                <div className='divisaoFundo'>
                    <div>
                        <img className='imagem_lado_d' src={ganhos} alt="" />
                    </div>
                   
                </div>
                <div className='Coluna_Linhas'>
                    <h1 className='cima'>Cadatro de EC2</h1>
                    <form onSubmit={listagemUsuarios}>
                      


                        <p>AMI:</p>
                        <label htmlFor="email"></label>
                        <input type="text" placeholder='ex: email@email.com' className='solitarioss' name='Email' value={AMI} onChange={(event) => setAMI(event.target.value)}></input>


                        <p>TYPE:</p>
                        <label htmlFor="address"></label>
                        <input className='solitarioss' placeholder='ex: Rua joao, 10 , SP' name='Endereco' value={TYPE} onChange={(event) => setTYPE(event.target.value)}></input>

                   


                        <div className='parte4'>
                            <div>
                                <p>KEY:</p>
                                <label htmlFor="phone"></label>
                                <input type="text" placeholder='ex: 5511999552288' value={KEY} name='Celular' onChange={(event) => setKEY(event.target.value)}></input>
                            </div>

                        </div>

                        <div>
                            <p>TAG:</p>
                            <label htmlFor="password"></label>
                            <input type="text" className='solitarioss' name='Senha' value={TAG} onChange={(event) => setTAG(event.target.value)}></input>
                        </div>

                        <div>
                        </div>
                            <button type="submit" className=''>Cadatrar</button>


                    </form>

                </div>

            </div> */}

            <h1>Testezinho</h1>
            <form onSubmit={criacaoec2}>
                <button type="submit" value={(ec2)} onChange={(event) => setEc2(event.target.value)}>CRIAR</button>
            </form>

        </div>

    );
};