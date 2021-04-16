import './App.css';
import { Route, Switch } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';


import Navbar from './components/Navbar';
import Home from './components/Home';

import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <AuthContext.Provider value={{currentUser: {}}}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" /> */}
        <Route path="/sign-up" component={ SignUp}/>
        <Route path="/sign-in" component={ SignIn}/>
        {/* <Route path="/contacts" component={ Contacts}/> */}
      </Switch>
      <Footer/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
