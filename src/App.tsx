import React from "react";
import "./App.css";

import { Modal } from "./modal/Modal";
import { Header } from "./components/Header";
import { Section_1 } from "./components/Section_1";
import { Section_2 } from "./components/Section_2";
import { Section_3 } from "./components/Section_3";
import { Signup } from "./components/Signup";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
