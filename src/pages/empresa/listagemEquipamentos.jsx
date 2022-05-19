import React, {useState} from "react";
import Modal_VPC from "../../components/Modal";
import '../../css/empresa.css'
import Logo from '../../img/imgLogin/darede.png'
import VPC from '../../img/imgCliente/VPC.png'
import EC2 from '../../img/imgCliente/EC2.png'
import prancheta from '../../img/imgCliente/prancheta.png'
import boneco from "../../img/imgCliente/boneco_listagem.png"
import sair from '../../img/imgCliente/sair.png'
import chatboot from '../../img/imgCliente/icone_chat.png'
import Modal_EC2 from "../../components/Modal_EC2";
import 'react-toastify/dist/ReactToastify.css';



function App() {

    const[isModalVisibleVPC, setIsModalVisibleVPC] = useState(false);
    const[isModalVisibleEC2, setIsModalVisibleEC2] = useState(false);

    return(

        <div>

        <header>
            <div className='corFundoH'>

                <img className='logo' src={Logo} alt="" />
                <div className='nave'>
                    <a href="/MeusEquipamentos">Meus Equipamentos</a>
                    <a href="/">Home</a>
                    <a href="/Login" target="principal" ><img className='sair' src={sair} alt="" /></a>
                </div>




            </div>


        </header>
        <div className='divisaoPrinc2'>
           

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
                                <img className="blcimg" src={VPC} alt="" />

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
                                <img className="blcimg" src={EC2} alt="" />
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
    );


}

export default App