import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { ContextProvider } from './Components/Context/Context';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import './App.css';
import './responsive.css'
import ProductItemPage from "./Components/ProductItemPage/ProductItemPage";
import Shop from "./Components/Shop/Shop";

function App() {


  return (

    <ContextProvider>
      <Router>
        <div className="wrapper-without-footer">
          <Switch>
            <Route path="/brand/:brandName">
              <Header />
              <Shop by="brand"/>
            </Route>
            <Route path="/category/:categoryName">
              <Header />
              <Shop by="category"/>
            </Route>
            <Route path="/product/:id">
              <Header />
              <ProductItemPage />
            </Route>
            <Route path="/about">
              <Header />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="*">
              <Header />
              <ErrorPage />
            </Route>
          </Switch> 
        </div >
      </Router>
      <Footer />
    </ContextProvider >
  );
}

export default App;
