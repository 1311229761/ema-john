import React, { useContext } from 'react';
import { Link as Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  const [loogedInUser,setLoogedInUser] = useContext(UserContext)
    
    return (
        <div className="header">
            <img src={logo} alt="" />
           <nav>
            
               <Link to="/shop">shop</Link>
               <Link to="/review">order review</Link>
               <Link to="/inventory">manage inventory</Link>
               <button onClick= { () => setLoogedInUser({ })}>sign out</button>
            </nav>
           
        </div>
    );
};

export default Header;