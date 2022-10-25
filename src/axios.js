import axios from "axios";

const instance = axios.create({
  //THE API (cloud function) URL
  // baseURL: "http://127.0.0.1:5001/clone-8f6a7/us-central1/api",
  baseURL: "https://us-central1-clone-8f6a7.cloudfunctions.net/api",
});

export default instance;

// https://us-central1-clone-8f6a7.cloudfunctions.net/api
