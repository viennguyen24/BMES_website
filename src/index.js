import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Ranking from "./components/Ranking";

import { Feature_Content } from "./assets/FeatureText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Feature information={Feature_Content} />
    <Ranking />
    <Footer />
  </React.StrictMode>
);
