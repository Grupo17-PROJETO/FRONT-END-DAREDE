import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_1zOhTzksz',
  ClientId: '3ua8g0ptjij0q5rncdspcnq8j3'
};

export default new CognitoUserPool(poolData);