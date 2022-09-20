import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Screens/Landing/Landing';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Landing/>  
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
