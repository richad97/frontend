import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import Recipes from "./components/Recipes";
import EditRecipe from "./components/EditRecipe";
import DeleteRecipe from "./components/DeleteRecipe";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
          <Route index element={<Home />} />
          <Route
            path="recipes"
            element={
              <RequireAuth redirectTo={"/login"}>
                <Recipes />
              </RequireAuth>
            }
          >
            <Route path="edit" element={<EditRecipe />} />
            <Route path="delete" element={<DeleteRecipe />} />
          </Route>

          <Route path="login" element={<Login setLogIn={setLogIn} />} />
          <Route path="register" element={<Register />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
