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


    static async getNodesFromAddr(addr){

      const txs = await this.getTXfromAddr(addr);

      const allData = {}


      for(const tx of txs){
        const data = await this.getDatafromTX(tx)

        const txData = {}

        {
          const dta = {};
          data.vin.map(block=>{
            dta[block.addr] = {
              value:block.value,
            };
          });

          txData['in'] = dta;
        }


        {
          const dta = {};
          data.vout.map(block=>{
            dta[block.scriptPubKey.addresses[0]] = {
              value:block.value,
            };
          });

          txData['out'] = dta;
        }

        
        //Check transaction relation to base node
        if(Object.keys(txData.in).includes(addr)){ //sending to multiple
          console.log("in");
          allData[tx] = {
            from:{[addr]:txData.in[addr]},
            to:txData.out
          }
          
        } else if(Object.keys(txData.out).includes(addr)){ //replace with else later // reveing from multiple
          console.log("out");
          allData[tx] = {
            from: txData.in,
            to:{[addr]:txData.out[addr]}
          }

        }

      }



      return allData;
    }





}
