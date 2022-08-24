import Layout from "../src/components/layout";
import useEthereum from "../src/services/ethereum/useEthereum";
import { sign } from "../src/services/ethereum/api/ethAuth";
import { getNonce, getUserProfile, updateWallets, verifySignature } from "../src/services/api/users";
import { etherValue,weiValue } from '../src/utils/ethSwaper';
import { useEffect, useState } from "react";
import { sendMoney } from "../src/services/ethereum/api/ethFinance";
import axios from "../src/services/api/axios";
import HomeHeader from '../src/components/pages/home/header';
import HomeRoadmap from "../src/components/pages/home/roadmap";
import HomeGames from "../src/components/pages/home/games";
import HomeParty from "../src/components/pages/home/party";

export default function Home() {
  // const [ user , setUser] = useState(null);
  // const [ ethValue, setEthValue ] = useState<Number>(0);
  // const { connect , isConnected, isInitialized, currentAccount } = useEthereum();
  // const [ token, setToken] = useState('');
  // const isLogedIn = !!token;

  // const handleSign = async () => {
  //   if(currentAccount){
  //     const { data : { data : { nonce }}} = await getNonce(currentAccount);
  //     const signature = await sign({account : currentAccount, message : nonce});
  //     const { data : { token,user } } = await verifySignature(currentAccount, signature);

  //     localStorage.setItem('token',token);
  //     axios.defaults.headers.common['Authorization'] = token;
      
      
  //     setToken(token);
  //     setUser(user);
  //   }
  // } 

  // const handleChargeWallet = async () => {
  //   let res = await sendMoney(Number(weiValue(ethValue+'')),currentAccount||'');
  //   let updatedUser = await updateWallets();

  //   setUser(updatedUser.data.data.user);
  // }

  // useEffect(() => {
  //   (async() => {
  //     const tokn : string = await localStorage.getItem('token') || '';
  //     if(tokn){
  //       let res = await updateWallets();
  //       setUser(res.data.data.user);
  //     }
  //   })()
  // },[])

  return (
    <Layout>
        <div className="flex flex-col">

          <HomeHeader/>
          <HomeRoadmap/>
          <HomeGames/>
          <HomeParty/>
          
          {/* <button className="border p-3" onClick={connect} disabled={isConnected}>
            connect
          </button>
          <button className="border p-3" onClick={handleSign} disabled={!isInitialized || !isConnected || isLogedIn}>
            sign
          </button>
          <div className="flex flex-row gap-4">
            <input className="border px-4" type='number' placeholder="ETH VALUE" value={ethValue} onChange={({ target : { value }}) => {setEthValue(Number(value))}}/>
            <button className="border p-3" onClick={handleChargeWallet}>
              charge
            </button>
          </div>
          {
            user && user.wallet && (
              <div>
                <h1>
                  {user.wallet.ethAddress}
                </h1>
                <h2>
                  {etherValue(user.wallet.ethValue+'')}
                </h2>
              </div>
            )
          } */}
        </div> 
    </Layout>
  );
}
