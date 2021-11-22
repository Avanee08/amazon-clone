import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase";
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JxynUSCaKF7gs31FhMxo35chFynLCzvx5JO0xlmVBrKTVrUk5UYBzMkWj7khkqw32jpwXA9atrkYmmnOx4W4HIo00wYUXdzvs' );

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THIS USER IS>>>', authUser);

      if(authUser){
        //user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Header/>
       <Switch>
         
         <Route path="/checkout">
           <Checkout/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>

         <Route path="/payment">
           <Elements stripe={promise}>
              <Payment/>
           </Elements>
          
           
         </Route>

         <Route path="/">
          
           <Home />

           
         </Route>
       </Switch>

    </div>

     </Router>
  );
}

export default App;