import './App.css';
import { Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';

import SignUp from './components/Auth/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" /> */}
        <Route path="/sign-up" component={ SignUp}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
