import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { getCoinsFetch } from './Redux/slices/coinState';

function App() {
  const dispatch = useDispatch()
  const coins = useSelector(state => state.coins.list)
  useEffect(() => {
    dispatch(getCoinsFetch())
    return () => {

    }
  }, [dispatch])
  console.log(coins)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
