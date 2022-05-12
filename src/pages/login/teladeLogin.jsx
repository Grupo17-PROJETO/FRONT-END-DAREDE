import '../../css/estilo.css'
import fundoB1 from '../../img/imgLogin/imgFundo1.png';
import Logoo from '../../img/imgLogin/darede.png';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPool from '../../components/UserPool';
import { TokenConvertido, UsuarioAutenticado } from '../../services/auth';

// export default class teladeLogin extends Component {


// constructor(props) {
//   super(props);
//   this.state = {
//     email: '',
//     senha: '',
//     erroMensagem: '',
//     isLoading: false,
//     redirectTo: null,
//   };
// }


// efetuaLogin = (event) => {
//   event.preventDefault();
//   console.log('logando')
//   this.setState({ erroMensagem: '', isLoading: true });

//   axios.post('http://localhost:5000/api/Login', {
//     email: this.state.email,
//     senha: this.state.senha,
//   })

//     .then((resposta) => {
//       if (resposta.status === 200) {

//         if (resposta.status === 200) {

//           localStorage.setItem('usuario-login', resposta.data.token);
//           this.setState({ isLoading: false })

//           let base64 = localStorage.getItem('usuario-login').split('.')[1];


//           console.log(base64)

//           if (parseJwt().role === '1') {

//             this.props.history.push('/listarconsulta');
//             console.log('logado: ' + usuarioAutenticado());
//           } else if (parseJwt().role === '2') {
//             this.props.history.push('/listarmedicos');
//           } else {
//             this.props.history.push('/listarminhas');
//           }
//         }

//         // localStorage.setItem('usuario-login', resposta.data.token);
//         // this.setState({ isLoading: false });
//         // this.setState({ redirectTo: "/Listagem" });
//       }
//     })

//     .catch(() => {
//       this.setState({
//         erroMensagem: 'E-mail ou senha inválidos, corrija NOVAMENTE',
//         isLoading: false,
//       });
//     });

// }

// atualizaStateCampo = (campo) => {
//   this.setState({ [campo.target.name]: campo.target.value });
// };


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
        console.log("onSuccess: ", data);

        var toke = "CognitoIdentityServiceProvider.1g36b2sqgdauaqc1ni5q6vel2b."+ UserPool.getCurrentUser().getUsername() +".idToken"
        console.log(TokenConvertido())
        
        // console.log(toke)
        //   let base64 = localStorage.getItem('usuario-login').split('.')[1];
        
        //   console.log(base64)

        // if (TokenConvertido().CognitoUser === 'Funcionarios') {

        // this.props.history.push('/MeusEquipamentos');
        //   console.log('logado: ' + UsuarioAutenticado());
        // } else if (TokenConvertido().role === '2') {
        //   this.props.history.push('/ListaClientes');
        // } else {
        //   this.props.history.push('/CadastroFuncionario');
        // }

        navigate("/ListagemEquipamentos")
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