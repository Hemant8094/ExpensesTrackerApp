import './App.css';
import { Balance } from './component/balance';
import { Header } from './component/header';
import { Transaction } from './component/transaction';
import { TransactionHistory } from './component/transactionHistory';
import {AddTransactions} from './component/transactionAdd'

import {Globalprovider} from './context/GlobalState'

function App() {
  

  return (
    <Globalprovider>
      
        <Header/>
        <Balance/>
        <Transaction/>
        <TransactionHistory/>
        <AddTransactions/>
      
    </Globalprovider>
  );
}

export default App;
