import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import DestinationIndex from "./Components/DestinationIndex";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
//import { destinationApi } from "./api/destinationApi";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import RandomDestination from "./Components/RandomDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Provider store={store}>
      <Header />
      <div className="px-4"></div>
      <DestinationIndex />
      <RandomDestination />
      <Footer />
    </Provider>
  </div>
);
