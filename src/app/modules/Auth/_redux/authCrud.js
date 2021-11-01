import axios from "axios";
export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
export const ME_URL = "http://localhost:7073/api/authorization";
export const IDENTITY ="http://20.82.138.184:30001";
export const IDENTITY_LOCAL ="http://192.168.1.101:31000/connect/token";
export const RMIRA_IDENTITY ="http://192.168.1.101:31000/connect/token";
export const RMIRA_IDENTITY_USER_INFO ="http://192.168.1.101:31000/connect/userinfo";


/** 
 * const options = {
  headers: {
  'secret-key': process.env.REACT_APP_NOT_SECRET_CODE,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}};
*/

const options_1 = {
  headers: {
    'secret-key': process.env.REACT_APP_NOT_SECRET_CODE,
    'Content-Type': 'application/x-www-form-urlencoded'
    
  }
};
export function login(email, password) {
  var bodyFormData = new FormData();
  bodyFormData.append('username', 'o.dunay@r-mira.com');
  bodyFormData.append('password', '123456');
  bodyFormData.append('client_id', 'testClient');
  bodyFormData.append('client_secret', 'SuperSecretPassword');
  bodyFormData.append('grant_type', 'password');
  
  //TODO : Login
  //console.log("bodyFormData");
  //console.log(bodyFormData);

  const formUrlEncoded = x =>
  Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

 var  bodyFormData1= formUrlEncoded({
    username:email,
    password:password,
    client_id: 'testClient',
    client_secret: 'SuperSecretPassword',
    grant_type: 'password'
 })

 //console.log("bodyFormData_1");
 //console.log(bodyFormData1);
 //var getToken = axios.post( RMIRA_IDENTITY, bodyFormData1, options_1)

  var getToken = axios.post( RMIRA_IDENTITY, bodyFormData1, options_1)
  //console.log("data");
  //console.log(getToken);
  getToken.then(function(axiosTestResult) {
    /*
     console.log('response.JSON:', {
      message: 'Request received',
      data: axiosTestResult.data
    })*/
   
    localStorage.setItem("access-token",axiosTestResult.data.access_token)
    localStorage.setItem("expires_in",axiosTestResult.data.expires_in)
    localStorage.setItem("token_type",axiosTestResult.data.token_type)
  });
  
  return getToken;
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  //console.log("getUserByToken")
  var payload = JSON.stringify({
    token:  localStorage.getItem('access-token')
  });
  
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('access-token')}`}
  };
 return axios.post(RMIRA_IDENTITY_USER_INFO, payload,options);}
