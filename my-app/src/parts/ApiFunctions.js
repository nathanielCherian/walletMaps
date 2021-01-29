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


    static async getDatafromTX(tx){
      return await this.makeGETRequest(`https://explorer.api.bitcoin.com/bch/v1/tx/${tx}`);
    }


    static async getPoofromAddr(addr){

      const txs = await this.getTXfromAddr(addr);


      const data = [];

      for(const tx of txs){
        const txData = await this.getAddrfromTX(tx);

        var FROM = null;
        var TO = null;
        for(const block of txData.in){
          if(block[0] == addr){
            FROM = block
            break;
          }
        }

        if(FROM){
          TO = txData.out;
        }else{
          FROM = txData.in;
          for(const block of txData.out){
            if(block[0] == addr){
              TO = [block,];
              break;
            }
          }
        }


        data.push({
          txid:tx,
          from:FROM,
          to:TO
        });
      }

      return data
    }



    static async getNodesFromAddr(addr){

      const txs = await this.getTXfromAddr(addr);

      const newData = {}


      for(const tx of txs){
        const returnData = {};
        const data = await this.getDatafromTX(tx)

        var SENDER = false;

        data.vin.map(b=>{
          if(b.addr == addr){
            newData["from"] = [b.addr, b.value];
            SENDER = true;
          }
        });

        console.log(data.vout)

        if(SENDER){
          newData["to"] = data.out;
        }else{
          newData["from"] = data.vin
        }

      }


      return newData


      /*
      return fetch('https://explorer.api.bitcoin.com/bch/v1/addr/1BV7g7hcMDGJYF1CkeUzcgqF2WbJruz7Jk?from=0&to=1000&noTxList=0')
        .then(response=>{
          return response.json();
        }).catch(error => console.warn(error));
        */
    }


}
