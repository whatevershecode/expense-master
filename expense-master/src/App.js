
import './App.css';
import Addtransaction from './Components/Addtransaction.jsx';
import Balance from './Components/Balance.jsx';
import Header from './Components/Header.jsx'
import IncomeExpense from './Components/IncomeExpense.jsx';
import TransactionList from './Components/TransactionList.jsx';
import { GlobalProvider } from './Context/GlobalContext.jsx';

function App() {
  return (
    <GlobalProvider>
    
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <Addtransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
