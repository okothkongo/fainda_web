import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/Header'
import Homepage from './components/Homepage'
import Usersignup from './components/User/Usersignup';


function App() {
  return (
    <div >
      <Router> 
      <Header/> 
       <Route exact path="/" component={Homepage} />  
        <Route path="/user/signup" component={Usersignup} />
      </Router>     
    </div>
  );
  
}

export default App;
