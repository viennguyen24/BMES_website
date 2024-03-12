import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Ranking from "./components/Ranking";
import Footer from "./components/Footer";
import { Feature_Content } from "./FeatureText";
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
