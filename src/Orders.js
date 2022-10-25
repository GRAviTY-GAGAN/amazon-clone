import React, { useEffect, useState } from "react";
import "./Orders.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      firebase
        .firestore()
        .collection("users") // going to the database and finding the colletions with the name users
        .doc(user?.uid) // we are getting the specific user logged in at that time
        .collection("orders") //we are accessing that perticular users orders
        .orderBy("created", "desc") //we need the orders to be in desending order so that the last orderer item/ order will be on top, so we are using orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  //onSnapshot gives use the snapshot of database (gives us database)
  //here we are storing the orders in the order state

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
