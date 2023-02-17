import React, { useState } from "react";
import Header from "./components/header/header.component";
import SidebarOpen from "./components/sidebaropen/sidebar.component";
import SidebarClose from "./components/sidebarclose/sidebarclose.component";
import HomePage from "./screens/homepage/homepage.component";
import Container from "./components/container/container.component";
import "./App.scss";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Header setOpen={setOpen} open={open} />
      <>{open ? <SidebarOpen /> : <SidebarClose />}</>

      <Container open={open}>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
