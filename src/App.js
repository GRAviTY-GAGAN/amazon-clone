import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import firebaseConfig from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

firebase.initializeApp(firebaseConfig);

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
                <Header /> <Payment />
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
