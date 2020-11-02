import React, {Component} from 'react';
import './App.css'; 
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import {Switch, Route} from 'react-router-dom'; 
import Modal from './components/Modal';
import ProductManage from './components/ProductManage';
import Login from './components/Login';
import Logout from './components/Logout';
import Menu from './components/Menu';

class App extends Component {
  render(){
    return <React.Fragment>
       <Menu/>
       
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/manage" component={ProductManage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route component={Default}></Route>
        </Switch>
        
        <Modal />
      </React.Fragment>;
  }
  
}

export default App;
