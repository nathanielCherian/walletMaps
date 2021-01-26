import axios from "axios";

export default class DataLookup{

    static async makeGETRequest(url){
    
        const promise = await axios.get(url)
        return promise.data;
    }

    static async getTXfromAddr(addr){
        const data = await this.makeGETRequest(`https://explorer.api.bitcoin.com/bch/v1/addr/${addr}?from=0&to=1000&noTxList=0`)
        return data.transactions
    }

    static async getAddrfromTX(tx){
        const data = await this.makeGETRequest(`https://explorer.api.bitcoin.com/bch/v1/tx/${tx}`);
        const inAddrs = [];
        for(const a of data.vin){
          inAddrs.push([a.addr, a.value]);
        }
  
        const outAddrs = [];
        for(const a of data.vout){
          outAddrs.push([a.scriptPubKey.addresses[0], a.value]);
        }
        
        return {in: inAddrs, out:outAddrs};
    }

}