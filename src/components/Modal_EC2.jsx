import React from "react";
import "../css/modal.css"
import EC22 from "../img/imgCliente/EC2.png"
import Sair from "../img/imgCliente/sair.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Modal_EC2 = ({ onClose = () => { } }) => {


    return (

        <div className="fundaoModal" >
            <div className="fundo_Modall">

                <div>


                    <div className="divisaoEC2">

                        <div>

                            <img className="SAINDO" onClick={onClose} src={Sair} />

                        </div>

                        <div className="ec2">

                            <img src={EC22} />

                        </div>

                    </div>

                    <div className="txtt">

                        <p> As organizações precisam de profissionais de TI com habilidades para implementar soluções em nuvem, para colaborar com a transformação, migração e inovação de suas operações.
                            Através dos treinamentos oficiais você desenvolve as suas habilidades profissionais, para que se torne um especialista em elaborar soluções na nuvem da AWS, no Brasil e no mundo.

                        </p>
                    </div>


                    <div className="btnss">

                        <button onClick={onClose} >Solicitar Orçamento</button>

                    </div>

                </div>

            </div>
        </div>


    );



}

export default Modal_EC2;