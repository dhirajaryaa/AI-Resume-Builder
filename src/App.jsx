import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <main className="container ">
        <Outlet />
      </main>
      <Toaster />

    </section>
  );
};

export default App;
