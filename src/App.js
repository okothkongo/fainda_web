import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Usersignup from "./components/User/Usersignup";
import Footer from "./components/Footer";
import Usersignin from "./components/User/Usersignin";
import CreateAdvertisment from "./components/Advertisement/CreateAdvertisment";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/user/signup" component={Usersignup} />
        <Route path="/user/signin" component={Usersignin} />
        <Route path="/advertisement/create" component={CreateAdvertisment}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
