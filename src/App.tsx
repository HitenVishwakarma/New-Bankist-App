import React from "react";
import "./App.css";

import { Modal } from "./modal/Modal";
import { Header } from "./components/Header";
import { Signup } from "./components/Signup";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
