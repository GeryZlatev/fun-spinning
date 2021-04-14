import './App.css';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './Shared/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Header/>
      
      <Footer/>
    </div>
  );
}

export default App;
