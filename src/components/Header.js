import React,{Component} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Header extends Component {
    render(){
        return(
            <div>
             <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand href='#home'>Fainda</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav className='ml-auto'>                    
                      <Link to="/">Home</Link>               
                      <Link to="/user/signup">Acount</Link>                             
                  </Nav>                 
                </Navbar.Collapse>
              </Navbar>
            </div>
        )
    }
}
export default Header;