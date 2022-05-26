import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logoo from '../../img/imgLogin/darede.png';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPool from '../../components/UserPool';





export default function Login() {

  const [name, setName] = useState("")
  const [senha, setSenha] = useState("")
  const [msg, setMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const efetuarLogin = (e) => {
    e.preventDefault();
    setLoading(true)

    const user = new CognitoUser({
      Username: name,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: name,
      Password: senha,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {

          setLoading(false)
          console.log("onSuccess: ", data.getIdToken().payload["cognito:groups"][0]);
          let grupo = data.getIdToken().payload["cognito:groups"][0]
          console.log(grupo);

          if (grupo === 'Funcionarios') navigate("/MeusClientes")
          else if (grupo === 'Clientes') navigate("/ListagemEquipamentos")
          else if (grupo === 'Administrador') navigate("/cadastroCliente")
          toast.success("Login Valido")
          
       
      },
        onFailure: (err) => {
        setLoading(false)
        setMsg(true)
        console.error("onFailure: ", err);
        toast.error("Login Invalido")
      },
    });
    user.getSignInUserSession();
  }

  return (
    <div className='centro'>
      <div className='lado1'>
        <h1>LOGIN</h1>
        <img className='fundob1' src={fundoB1} alt="" />
      </div>
      <div >
        <div className='digitacao'>
          <div className='bloco1'></div>
          <div className='bloco2'></div>
          <div className='bloco3'>
            <div>
              <img class="logoo" src={Logoo} alt="" />
            </div>
            <div className='estilizacaoI'>

              <form onSubmit={efetuarLogin}>
                <p>EMAIL / USUARIO</p>
                <input type="name" id="name" value={(name)} onChange={(e) => setName(e.target.value)}></input>

                <p>SENHA</p>
                <input type="password" input value={senha} onChange={(e) => setSenha(e.target.value)} class="inputS" name="senha" />
                <button id="botao" type='submit'>Login</button>
              </form>

            </div>
            <ToastContainer />
            {/* <div>
              {
                loading === true && <button type='submit' disabled id="botao"> Loading </button>
              }
              {
                loading === false && <button id="botao" type="submit">
                  Logar
                </button>
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
};