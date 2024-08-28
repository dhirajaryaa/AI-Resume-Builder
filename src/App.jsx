import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components";

const App = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </section>
  );
};

export default App;
