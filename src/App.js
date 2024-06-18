import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Model from './components/Model';




export default function App() {
  return (
    <React.Fragment>
     <NavBar></NavBar>
     <Routes>
      <Route exact path='/' Component={ProductList}/>
      <Route path='/details' Component={Details}/>
      <Route path='/cart' Component={Cart}/>
      <Route path='/default' Component={Default}/>
     </Routes>
     <Model/>
    </React.Fragment>
  )
}
