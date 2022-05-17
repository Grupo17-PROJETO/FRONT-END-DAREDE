import HeaderFuncionario from '../../components/Header/headerFuncionario'
import '../../css/empresa.css'
import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import api from '../../Services/api'

export default function CursosRapidos() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [listaCursos, setListaCursos] = useState([]);
    const [curso, setCurso] = useState([]);
    const modalVisivel = useState(false);
    const [cursoModal, setCursoModal] = useState([]);
    let subtitle;


    function setModalVisive() {
        modalVisivel(true)
    }


    function openModal(idCurso) {
        setCursoModal(idCurso)
        setIsOpen(true);    
        
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        modalVisivel(false);
    }

    function listarCursos() {
        api('/Cursos')
            .then(resposta => {
                let id = localStorage.getItem('idCurso')
                if (resposta.status === 200) {
                    resposta.data.map((curso) => {

                        if (curso.idCurso == id) {
                            return (
                            setCurso(curso)
                            );
                        }
                        console.log('Lista')
                        console.log(resposta)
                        console.log("Aqui curso")
                        console.log(id)
                        setListaCursos(resposta.data)
                    });
                }
            })
            .catch (erro => console.log(erro));
    };

    useEffect(listarCursos, []);


    const custonModal = {
        content: {
            left: '5%',
            top: '10%',
            background: 'f2f2f2',
            bottom: 'auto',
            borderRadius: '20px',
            width: '90%',
            height: '80%',
            transition: '.2s'
        }
    }

    function pegarIdCurso(idCurso) {
        localStorage.setItem('idCurso', idCurso);
        console.log(idCurso)
    }


    return (
        <div>
            <HeaderFuncionario />

            <div className='caixa'>
                <form>
                    <label ></label>
                    <input type="search" placeholder='Pesquisar' />
                </form>
            </div>

            <h1>Cursos</h1>
            <section className='container_cursos '>

                <div className='wrap'>
                    <div className='container_wrap'>
                        {/* <section className='box_cursos'>
                            <img onClick={openModal} className='banner' src={logica} alt="" />
                            <h2 onClick={openModal}>Logica de Programação</h2>
                            <p><img className='test' onClick={openModal} src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img className='test' onClick={openModal} src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div>
                        </section> */}
                        {
                            listaCursos.map((curso) => {
                                return (
                                    <div>
                                        <section key={curso.idCurso} alt={curso.idCurso}  className='box_cursos'>
                                            {<img onClick={() => openModal(curso.idCurso)} id='imagem' className='banner' src={'https://raw.githubusercontent.com/RH-SENAI/SENAI-RH-BACKEND/back-gp-2-enzzo/GP2/API_G2/SenaiRH_G2/SenaiRH_G2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="imagem do curso" />}
                                            {<h2 onClick={() => openModal(curso.idCurso)}> {curso.nomeCurso} </h2>}
                                            {<p><img className='box_dados_curso' onClick={() => openModal(curso.idCurso)} src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                            {<p><img className='box_dados_curso' onClick={() => openModal(curso.idCurso)} src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                                            {<div className='circulo_coracao'>
                                                <img className='coracao' src={coracao} alt="" />
                                            </div>}
                                        </section>

                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            key={curso.idCurso}
                                        >
                                            <div  className='box_title'>
                                                {<img key={curso.idCurso} id='imagem' className='modal_img' src={'https://raw.githubusercontent.com/RH-SENAI/SENAI-RH-BACKEND/back-gp-2-enzzo/GP2/API_G2/SenaiRH_G2/SenaiRH_G2/StaticFiles/Images/' + curso.caminhoImagemCurso} alt="Imagem do curso" />}
                                                <div>

                                                    <div className='title_modal'>
                                                        {<h1> {curso.nomeCurso} </h1>}
                                                    </div>

                                                    <div className='dados'>
                                                        {/* <p><img src={relogio} alt="" /> 1000 Horas</p> */}
                                                        {<p><img src={relogio} alt="duracao" /> {curso.cargaHoraria} Horas </p>}
                                                        <p><img src={data} alt="" /> {curso.dataFinalizacao} </p>
                                                    </div>
                                                    {<p><img  src={local} alt="duracao" /> {curso.idEmpresaNavigation.idLocalizacaoNavigation.idLogradouroNavigation.nomeLogradouro}  </p>}
                                                </div>
                                            </div>
                                            <div className='container_modal'>

                                                <div className='box_descricao'>
                                                    <h2>Descrição:</h2>
                                                    {<p>{curso.descricaoCurso}</p>}

                                                    <h4>Empresa:</h4>
                                                    {<p>{curso.idEmpresaNavigation.nomeEmpresa}</p>}

                                                </div>
                                                <div className='btn_inscreva'>
                                                    <button>Inscreva-se</button>
                                                </div>
                                                <hr />
                                                <div className='box_cometarios'>
                                                    <h2>Comentario:</h2>
                                                    <p></p>
                                                </div>

                                            </div>
                                            <div>
                                            </div>
                                        </Modal>
                                    </div>
                                )
                            })
                        }
                        {/* <img onClick={openModal} className='banner' src={logica} alt="" />
                            <h2 onClick={openModal}>Logica de Programação</h2>
                            <p><img className='test' onClick={openModal} src={relogio} alt="duracao" /> 20 Horas </p>
                            <p><img className='test' onClick={openModal} src={local} alt="local" /> EAD</p>
                            <div className='circulo_coracao'>
                                <img className='coracao' src={coracao} alt="" />
                            </div> */}




                    </div>
                </div>

                <div className='container_img'>
                    <img src={listCurso} alt="Ver Cursos" />
                </div>
            </section >
        </div >
    )
}   