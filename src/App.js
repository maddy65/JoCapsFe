import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListOfEmployee from './component/ListOfEmployee';
import HeaerComponent from './component/HeaerComponent';
import Footer from './component/Footer';
import MainScreen from './component/MainScreen'
import Login from './component/Login'
import NSEdata from './component/NSEdata'
import UserDashboard from './component/UserElement/UserDashboard';
import CreatePortfolio from './component/UserElement/CreatePortfolio';
import FAQ from './component/FAQ';
import Dashboard from './component/UserElement/Dashboard';
import Pricing from './component/PaidServices/Pricing'
import signin from './component/SignInLogin'



function App() {
  return (
    <div>
      <Router>
       
          
              <switch>
                <Route path = "/ListOfEmployee" exact component = {ListOfEmployee}></Route>
                <Route path = "/" exact component = {MainScreen}></Route>
                <Route path = "/login" exact component = {Login}></Route>
                <Route path = "/signin" exact component = {signin}></Route>
                <Route path = "/nseData" exact component = {NSEdata}></Route>
                <Route path = "/UserDashboard" exact component = {UserDashboard}></Route>
                <Route path = "/CreatePortfolio" exact component = {CreatePortfolio}></Route>
                <Route path = "/FAQ" exact component = {FAQ}></Route>
                <Route path = "/Dashboard" exact component = {Dashboard}></Route>
                <Route path = "/Pricing" exact component = {Pricing}></Route>
              </switch>


          
       
      </Router>
    </div>
  );
}

export default App;
