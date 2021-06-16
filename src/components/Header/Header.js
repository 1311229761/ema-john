import React, { useContext } from 'react';
import { Link as Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'
import { Button } from '@material-ui/core';


const Header = () => {
  const [loogedInUser,setLoogedInUser] = useContext(UserContext)
    
    return (
        <div className="header">
            <img src={logo} alt="" />
           <nav>
            
               <Link to="/shop">shop</Link>
               <Link to="/review">order review</Link>
               <Link to="/inventory">manage inventory</Link>
               <Button  variant="contained" color="primary"  onClick= { () => setLoogedInUser({ })}>sign out</Button>
            </nav>
           
        </div>
    );
};

export default Header;