import { JSEncrypt } from "jsencrypt";
export const encryptCredential = (credentials) => {
  const encrypt = new JSEncrypt();
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuIGVY6DVBZ/X4rWIOC5B
  kwXupvlRDZibogBmdkoER0Z3WX8PtyWcpf09fcvjaBw6Xwcw73E6uQMWMbSYR/Q8
  /6lk7TjQ7bDBnJ5M2ZI3cXhVEth2sGPfdrTWwiDjmyTOCtUUrs7DkC1vwV/uWQNo
  /Ed2wTdY6VKk8Dnkg4yZwqfzwFzJ82dh8zh0l08UHP+35B5SqDkbi4x/xCf7Qgp4
  g7omgBLfxqsTAllWAs2Ra+1jn3xzr4gOdbNZpXuoCRfrcrE/EcXbTxaPqArXSzff
  VZqjR5ulv5o5dRPT4vu7f2RKAhheXfWjQ3fzmlrckBfQf2EC3aBUu4mZmnzMIYJt
  MQIDAQAB
  -----END PUBLIC KEY-----`;
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(credentials);

  return encrypted;
};
