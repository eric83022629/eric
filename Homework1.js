/*
(20%) 1. Please compare hash function and cryptographic hash function and give an example.
Cryptographic hash function為密碼雜湊函式，Hash function為雜湊函式，
最大的區別為Cryptographic hash function因密碼的安全性所以不能出現collision
且Cryptographic hash function為one-way-function無法回推原始的訊息
例如Digital Signature, Message authentication code
*/


// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:",privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:",pubKey.toString('hex'));

// address

let address = "0x"+keccak256(pubKey).slice(-40);
console.log("address:",address);
var wallets = Wallet.fromPrivateKey(privKey);
console.log("wallet:",wallet.toV3String('nccu'));
