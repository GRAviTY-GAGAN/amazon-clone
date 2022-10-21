import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import firebaseConfig from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

firebase.initializeApp(firebaseConfig);

const promise = loadStripe(
  "pk_test_51LvDRBSDkcfJt12Xt8UuLu6qrdBOadY9yNg7JnIMTpTrjA7mmk1TjgKWZN8saKgSdbia7FluY0xeaE1yt1OWmzRP00Ua5AROKX"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in and this will help even when we refresh the page we will be signed in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header /> <Orders />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
