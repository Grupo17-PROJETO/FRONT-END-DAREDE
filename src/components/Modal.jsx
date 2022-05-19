import React from "react";
import "../css/modal.css"
import VPC2 from "../img/imgCliente/VPC.png"
import Saindo from "../img/imgCliente/sair.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal_VPC = ({ onClose = () => { } }) => {


    return (

        <div className="fundaoModal" >
            <div className="fundo_Modal">

                <div>


                    <div className="divisaoVPC">

                        <div>

                            <img className="SAINDO" onClick={onClose} src={Saindo}></img>

                        </div>

                        <div className="vpc">

                            <img src={VPC2}></img>

                        </div>

                    </div>

                    <div className="txt">

                        <p> As organizações precisam de profissionais de TI com habilidades para implementar soluções em nuvem, para colaborar com a transformação, migração e inovação de suas operações.
                            Através dos treinamentos oficiais você desenvolve as suas habilidades profissionais, para que se torne um especialista em elaborar soluções na nuvem da AWS, no Brasil e no mundo.

                        </p>
                    </div>


                    <div className="btns">

                        <button onClick={onClose}>Solicitar Orçamento</button>


                    </div>







                </div>
                <ToastContainer />

            </div>
        </div>

    );



}

export default Modal_VPC;