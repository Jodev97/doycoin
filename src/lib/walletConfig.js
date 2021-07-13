const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction

const endPoint = process.env.ENDPOINT_URL
const address1= process.env.REMIT_ADDRESS
const address2 = process.env.RECIVER_ADDRESS
const keyPrivate1 = new Buffer.from(process.env.REMIT_KEY,"hex")
const keyPrivate2 = new Buffer.from(process.env.RECIVER_KEY,"hex")


/** CREAR CUENTAS CON WEB3JS
 * web3.eth.accounts.create()
> {
    address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
    privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
    signTransaction: function(tx){...},
    sign: function(data){...},
    encrypt: function(password){...}
 }
 * 
 */
const sendDonation = async(data)=>{
    const web3 = new Web3(endPoint); //instaciamos el objeto web3
    const networkId = await web3.eth.net.getId();
    let accounts = await web3.eth.getAccounts()
     /*web3.eth.getTransactionCount(address1, (err, txCount) => {
        console.log(data)
       const txObject = {
          nonce:    web3.utils.toHex(txCount),
          to:       address2,
          value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
          gasLimit: web3.utils.toHex(21000),
          gasPrice: web3.utils.toHex(web3.utils.toWei('2', 'gwei'))
        }
            
        const tx = new Tx(txObject,{'chain':'rinkeby'})
        tx.sign(keyPrivate1)

        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        web3.eth.sendSignedTransaction(raw)

        return "Congratulation!!"
    })  */
   
}
const getProvider = (data)=>{
    console.log(data.value,data.remit)
}

module.exports= {sendDonation,getProvider}
