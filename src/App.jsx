import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Page from "./Components/Page";
import SearchPage from "./Components/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={[
              <div className="app_page">
                <Sidebar />
                <Page />
              </div>,
            ]}
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={[
              <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>,
            ]}
          ></Route>
        </Routes>
      </Router>

      {/* <Header />
      <div className="app_page">
        <Sidebar />
        <Page />
      </div> */}
    </div>
  );
};

export default App;
