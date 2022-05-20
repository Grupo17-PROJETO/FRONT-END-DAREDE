// import {CognitoUserPool} from "amazon-cognito-identity-js";

// const poolData = {

//     UserPoolId: process.env.REACT_APP_USERPOOL_ID,
//     ClientId: process.env.REACT_APP_CLIENT_ID
// }

// export default new CognitoUserPool(poolData);

import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {

    UserPoolId: "us-east-1_m66C6CNQS",
    ClientId: "5qs3296s54ksu0jml1atmkosho"
}

export default new CognitoUserPool(poolData);