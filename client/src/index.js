import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import "materialize-css/dist/css/materialize.min.css";
import { thunk } from "redux-thunk";

//import reportWebVitals from "./reportWebVitals";

const store = createStore(reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector("#root")
// );

// reportWebVitals();
console.log("key is", process.env.REACT_APP_STRIPE_KEY);
console.log("key is", process.env.NODE_ENV);
