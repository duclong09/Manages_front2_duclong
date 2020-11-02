import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {ButtonContainer} from "./Button"; 
import {Link} from 'react-router-dom';
import '../App.css'
class Menu extends Component{
    render(){
        return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src="images/amazon.ico" style={{width: 28 + 'px' }}alt="store"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Product Manage</Nav.Link>    
             
          </Nav>
          <Nav className="mr-sm-2">
          <Link to="/cart">
            <ButtonContainer>
                <span>
                    <i className="fa fa-cart-plus"/> My Cart
                </span>
            </ButtonContainer>
        </Link>  
          </Nav>
  
        </Navbar.Collapse>
        
      </Navbar>
    }
}
export default Menu