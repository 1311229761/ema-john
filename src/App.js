import logo from './logo.svg';
import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch'; 
import ProductDetail from './components/ProductDetail/ProductDetail'; 
import './App.css';
import Shipment from './components/Shipment/Shipment';
import Loogedin from './components/Loogedin/Loogedin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const userContext = createContext()



function App() {
  const [loogedInUser,setLoogedInUser] = useState({})
  return (
    <userContext.Provider value = {[loogedInUser,setLoogedInUser]}  >
      <h1>email {loogedInUser.email}</h1>
      
      <Router>
      <Header></Header>
        <Switch>


        <Route exact path="/">
          <Shop></Shop>
          </Route>
          
          <Route path="/shop">
          <Shop></Shop>
          </Route>

          <Route path="/review">
          <Review></Review>
          </Route>

          <PrivateRoute path="/inventory">
          <Inventory></Inventory>
          </PrivateRoute>
          
          <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
          </Route>

          <Route path="/login">
          <Loogedin/>
          </Route>

          <PrivateRoute path="/shipment">
         <Shipment/>
          </PrivateRoute>

          <Route path="*">
         <NoMatch/>
          </Route>

        
     
     
     

          

        

        </Switch>
      </Router>

     
   
    
     
    </userContext.Provider>
  );
}

export default App;
