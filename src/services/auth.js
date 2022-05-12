import UserPool from "../components/UserPool.jsx";
var toke = "CognitoIdentityServiceProvider.1g36b2sqgdauaqc1ni5q6vel2b."+ UserPool.getCurrentUser() +".idToken";
export const UsuarioAutenticado = () => {
    if (localStorage.getItem(toke) !== null) {
        return true;
    }
    else return false
};

export const TokenConvertido = () => {
    if (localStorage.getItem(toke) !== null) {
        
        let Base64 = localStorage.getItem(toke).split('.')[1];
        return JSON.parse( window.atob(Base64) );
    }
    else return null

}