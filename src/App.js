import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './includes/Header';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Sarees from './components/Sarees';
import Skirts from './components/Skirts';
import Pants from './components/Pants';
import Stoles from './components/Stoles';
import Products from './components/Product'
import Footer from './includes/footer';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'


import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import MainContext from './context/MainContext';



function App() {


  const [loading, setLoading] = useState(false)

  
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])

  const loadingStyle = {
    'color':'#000',
    'textAlign':'center'
  }

  return (
    <div>
    <MainContext>
    {loading ? 
      <ClimbingBoxLoader
      style={loadingStyle}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    :
    <Router>
      <Header/>
        <Switch>
          <Route exact path ="/" element={<Index/>}></Route>
          <Route exact path ="/about" element={<About/>}></Route>
          <Route exact path ="/contact" element={<Contact/>}></Route>
          <Route exact path ="/sarees" element={<Sarees/>}></Route>
          <Route exact path ="/skirts" element={<Skirts/>}></Route>
          <Route exact path ="/pants" element={<Pants/>}></Route>
          <Route exact path ="/stoles" element={<Stoles/>}></Route>
          <Route exact path ="/product" element={<Products/>}></Route>

          <Route exact path="/product/:id" element={<Products/>} />
        </Switch>
      <Footer/>
      </Router>
    }
    </MainContext>
    </div>
  );
}

export default App;
