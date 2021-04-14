import './App.css';
import { Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './Shared/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" />
      </Switch>
      <Home />
      <Header/>
      
      <Footer/>
    </div>
  );
}

export default App;
