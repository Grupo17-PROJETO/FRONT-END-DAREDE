import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/teladeLogin';
import Home from './pages/Page_home/home';
import ListaClientes from '../src/pages/administardor/listadeCliente';
import CadastroCliente from './pages/administardor/cadastroClientes'
import MeusEquipamentos from './pages/empresa/meusEquipamentos';
import MeusClientes from '../src/pages/funcionario/listaMeusClientes';
import App from './pages/empresa/listagemEquipamentos';
import EC2 from '../src/pages/administardor/CadastroEC2'
import VPC from '../src/pages/administardor/CadastroVPC'

// import { UsuarioAutenticado, TokenConvertido  } from "./services/auth.js";


import {
  Routes,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';


const Routing = (
  <Router>
    <div>
      <Routes>

        {/* TELAS DE TODOS */}
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

        {/* TELAS DE ADM */}
        <Route path="/ListaClientes" element={<ListaClientes/>}/>
        <Route path="/cadastroCliente" element={<CadastroCliente/>}/>
        <Route path="/EC2" element={<EC2/>}></Route>
        <Route path="/VPC" element={<VPC/>}></Route>

        {/* TELAS DE Funcionarios */}
        <Route path="/MeusClientes" element={<MeusClientes/>}></Route>
      

        {/* TELAS DE Clientes */}
        <Route path="/ListagemEquipamentos" element={<App/>}></Route>
        <Route path="/MeusEquipamentos" element={<MeusEquipamentos/>}/>

      </Routes>
    </div>
  </Router>
)


ReactDOM.render(
  Routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
