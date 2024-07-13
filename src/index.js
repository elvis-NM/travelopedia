import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import DestinationIndex from "./Components/DestinationIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="px-4"></div>
    <DestinationIndex />
    <Footer />
  </div>
);
