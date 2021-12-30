require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind million good process tail gauge'; 
let testAccounts = [
"0x9264b842d6f9e385ac2f6f0706cc80cb2c56f7f0c3e8e2fb2c01ad13f2ec2cd8",
"0x3d61af894490aae4cbc96eaae2baea7bc00408592f77c65cadadc21510ff51ff",
"0xa98a3f4e315095bc4638d476b2e9622f443e04a49097ca03bcaca7452cdb934b",
"0xd8c74104f252c542f7c8504d895bb8aa26c6a419e38381c480c4986dbdd2c5e7",
"0xc4affb9fdb1fa85fbf6e59717fd7bd1089dfcfa782b48fbd823344dd7c22b70e",
"0xb37d5375eae158ee8e2e42720afce0eb81ca07c25abaf37d9fe5f54247cf52e9",
"0x9556b48489a68f3f6483420c948e2bcb90e4abecd2060f03372c36c6181597b7",
"0xdc5b178c60405d76014b0e7174ace4d1b57f8b6a0e8325389edf086ae9c6b26a",
"0xee7a604e64578989f4e50181448cc4edc8f3ab24e58442a9e4909553331b2e85",
"0xda31c2778225123169fe91daa88c6232dede9b1d13fbf99755bd9057b3cf73e2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

