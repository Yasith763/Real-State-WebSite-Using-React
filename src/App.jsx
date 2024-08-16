import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Residence from './Pages/Residence';
import Home from './Pages/Home';
import PropertyListings from './Pages/PropertyListings';
import BuyingServices from './Pages/BuyingServices';
import SellingServices from './Pages/SellingServices';
import RentingAndLeasingServices from './Pages/RentingAndLeasingServices'
import InvestmentServices from './Pages/InvestmentServices'
import RelocationServices from './Pages/RelocationServices'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/residence' element={<Residence/>}></Route>
          <Route path='/propertyListings' element={<PropertyListings/>}></Route>
          <Route path='/buyingServices' element={<BuyingServices/>}></Route>
          <Route path='/sellingServices' element={<SellingServices/>}></Route>
          <Route path='/rentingAndLeasingServices' element={<RentingAndLeasingServices/>}></Route>
          <Route path='/investmentServices' element={<InvestmentServices/>}></Route>
          <Route path='/relocationServices' element={<RelocationServices/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
