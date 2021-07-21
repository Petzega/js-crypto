const NodeRSA = require('node-rsa');
import { res } from './script.js';
//const key = new NodeRSA({ b: 1024 });
let secret = "petzega rulz!";
/*var encryptedString = key.encrypt(secret, 'base64');
console.log("encrypt: " + encryptedString);*/
//klAjD5HjqwBGXtuGDI7DaMwU24gHHkRTuo4PHKvXq+xx1p/n6TQwdgYGek4EKORq3J5Kmopqx/jv03KanoHiOfr8faLBtHuE2Fq9DArjFydiZeu5S++J3B7mEp7WDFPmdcXE+sauGBOyVucGn5hmw79cDesWtXaouuF7T74KQ64=
/*var decryptedString = key.decrypt(encryptedString, 'utf8');
console.log("decrypt: " + decryptedString);*/
/*var public_key = key.exportKey('public');
var private_key = key.exportKey('private');
console.log("public: " + public_key);
console.log("private: " + private_key);*/

public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCNi+oWyVeVBx8RaU+MzX3OFbxA\n' +
'yHHMHkRewQ5Bf9V9we1n9wFLrPYvYh4AyRSNF0nBEn76fQyvIiw/YwS9qjMFUP7m\n' +
'OAAXDOXCCL8JULCWiDqAP6RUrCMV33tzDyGOyFL+5WpmYErYA7CtmS2Me3yjRWEm\n' +
'OEWca4qIgCW88Jq3fQIDAQAB\n' +
'-----END PUBLIC KEY-----\n'

private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICXAIBAAKBgQCNi+oWyVeVBx8RaU+MzX3OFbxAyHHMHkRewQ5Bf9V9we1n9wFL\n' +
'rPYvYh4AyRSNF0nBEn76fQyvIiw/YwS9qjMFUP7mOAAXDOXCCL8JULCWiDqAP6RU\n' +
'rCMV33tzDyGOyFL+5WpmYErYA7CtmS2Me3yjRWEmOEWca4qIgCW88Jq3fQIDAQAB\n' +
'AoGATNHSietcDRWAVwLAmbosvNwu/znKCO2kTYiZJBMs2sOVBQeZPGjyc2Tcw7Bd\n' +
'5vTsokxXfbrAV4xEV2J2ADmO1lPmTywEHqEtEfRZB1dsCLRl1NqfrF8ypBAKeWXT\n' +
'ztc/2+0iT1pZs8HxsQrfN6MtpLsxWgM3lxHMqrOb822BTEECQQDUz6g9F43LJF0w\n' +
'42Pi6unJc8O9AwtBYW9Edd0/rfyMcUJX6xzkfU5CmbSOWSSVN9faZVzxFDusJGtr\n' +
'td84CBifAkEAqkXKksfBEjm2mKvizkBvIbWCz96d1lKdByrUOYicokSix1HwfTwa\n' +
'4wXK41P8F7/X6B5L85NOBjH4r/hHmY+OYwJAFjHOFwkE1cHmIjok6b6cQVFcgbL2\n' +
'kowJ4bb1KzYHF9KcG7U+nyneZp3HMe1kHlfjoDhgGBiHHK3zshkWva5CewJAdMxY\n' +
'76R8SN8z5LgLZUWHtczHhYWEKY8TzeXQHAMcxqZkLmuDlrRTESVZDeT/SN884Clg\n' +
'Gh4SaGeA2lxp6OkzVwJBAK2Z5bWvrYX2sxqiPJ1C8ALA0l/14Kn/CNMcEVdgdndV\n' +
'cLn62O+9U7HnuC4HLTiL5LjzobkKpAEJ61QaCxNoXfE=\n' +
'-----END RSA PRIVATE KEY-----'

let private = new NodeRSA(private_key);
let public = new NodeRSA(public_key);

//public key for encryption
var encrypted = public.encrypt(secret, 'base64');
console.log('encrypted: ' + encrypted);
//private key for decryption
var decrypted = private.decrypt(encrypted, 'utf8');
console.log('decrypted: ' + decrypted);
//public key for decryption
/*var public_decrypted = public.decrypt(encrypted, 'utf8');
console.log("public decrypted: " + public_decrypted);*/