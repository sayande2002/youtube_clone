import React from "react";
import Header from "./components/header/header.component";
import SidebarOpen from "./components/SidebarOpen/sidebar.component";
import SidebarClose from "./components/SidebarClose/sidebarclose.component";
import HomePage from "./components/HomePage/homepage.component";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <SidebarOpen />
      {/* <SidebarClose /> */}
      {/* <HomePage /> */}
    </>
  );
}

export default App;
