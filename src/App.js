import React from "react";
import HomePage from "./screens/homepage/homepage.component";
import Layout from "./components/layout/layout.component";
import SearchPage from "./screens/searchpage/searchpage.component";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/search"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
