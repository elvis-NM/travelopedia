import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import DestinationIndex from "./Components/DestinationIndex";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { destinationApi } from "./api/destinationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <ApiProvider api={destinationApi}>
      <Header />
      <div className="px-4"></div>
      <DestinationIndex />
      <Footer />
    </ApiProvider>
  </div>
);
