import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PrimaryButton from './Components/PrimaryButton/PrimaryButton';

import SearchInput from './Components/SearchInput/SearchInput';
import { getCoinsFetch } from './Redux/slices/coinState';

function App() {
  const dispatch = useDispatch()
  const coins = useSelector(state=>state.coins.list)
  useEffect(() => {
    dispatch(getCoinsFetch())
    return () => {
      
    }
  }, [dispatch])
  console.log(coins)
  return (
    <div className="App">
      <SearchInput/>
      <PrimaryButton name="Connect Wallet"/>
    </div>
  );
}

export default App;
