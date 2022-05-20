
import Modal_VPC from "../../components/Modal";
import '../../css/empresa.css'
import Logo from '../../img/imgLogin/darede.png'
import Fake from '../../img/imgCliente/iagemFake.jpg'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import prancheta from '../../img/imgCliente/prancheta.png'
import boneco from "../../img/imgCliente/boneco_listagem.png"
import sair from '../../img/imgCliente/sair.png'
import chatboot from '../../img/imgCliente/icone_chat.png'
import Modal_EC2 from "../../components/Modal_EC2";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function ListaMeusClientes() {
    const [isModalVisibleVPC, setIsModalVisibleVPC] = useState(false);
    const [isModalVisibleEC2, setIsModalVisibleEC2] = useState(false);


    const [users, getUsers] = useState([]);
    const url = 'https://sb92tpp6dl.execute-api.us-east-1.amazonaws.com/Prod/clientes'

    useEffect(() => {
        listagemUsuarios();
        // listagemEmail();

    }, []);

    const listagemUsuarios = () => {
        axios.get(url)
            .then((res) => {
                const listagemnomes = res.data.data.listagemnomes;
                getUsers(listagemnomes);
                console.log(res)
            })


            .catch(error => console.error(`Erro: ${error}`));


    }

    return (
        <div>

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


            {
                users.listSubnet.map((res) => {


                    console.log(res)
                    return (



                        <div className=''>
                            <select name="" id="">

                                <option key={res.data} value={res}>

                                    {res}
                                </option>

                            </select>

                        </div>

                    )
                })

            }


            {/* <header>
            <div className='corFundoH'>
                <img className='logo' src={Logo} alt="" />
                <div className='nave'>
                    <a href="/MeusEquipamentos">Meus Equipamentos</a>
                    <a href="">Contato</a>
                    <section className='imgHeader'>
                        <img className='iconeUC' src={Fake} alt="" />
                    </section>
                    <a href="/" target="principal" ><img className='sair' src={sair} alt="" /></a>
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
                            <img src={prancheta} alt="" />
                            <h1>EQUIPAMENTOS</h1>
                        </div>
                        <div className='blocoCentral'>
                            <section >
                                <img src={VPC} alt="" />
                            </section>
                            <section className='informacoes'>
                                <h2>VPC</h2>
                                <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                <center>
                                    <div>
                                        <button onClick={() => setIsModalVisibleVPC(true)} className='botaoEC2'> Mais Informações</button>
                                        {isModalVisibleVPC ? <Modal_VPC onClose={() => setIsModalVisibleVPC(false) } />: null}
                                    </div>
                                </center>
                            </section>
                        </div>
                        <div className='blocoCentral'>
                            <section >
                                <img src={EC2} alt="" />
                            </section>
                            <section className='informacoes'>
                                <h2>EC2</h2>
                                <p>Amazon Elastic Compute Cloud é uma parte central da plataforma de cloud computing da Amazon.com, Amazon Web Services. O EC2 permite que os usuários aluguem computadores virtuais nos quais rodam suas próprias aplicações.</p>
                                <center>
                                <div>
                                        <button onClick={() => setIsModalVisibleEC2(true)} className='botaoEC22'> Mais Informações</button>
                                        {isModalVisibleEC2 ? <Modal_EC2 onClose={() => setIsModalVisibleEC2(false) } />: null}
                                    </div>
                                </center>
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
        </footer> */}
        </div>
    );
}

export default ListaMeusClientes