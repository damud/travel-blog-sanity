import React from "react";
import "../styles/globals.css"
import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
  <div className="app-container">
    <Navbar />
    <Component {...pageProps} />
  </div>
  )
}

export default App;
