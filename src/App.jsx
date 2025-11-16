import React from "react";
import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import { Route, Routes } from "react-router-dom";
import PrivatieRoute from "./components/commons/PrivateRouter";

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <PrivatieRoute>
                <Contact />
              </PrivatieRoute>
            }
          />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Post />
      </DefaultLayout>
    </>
  );
};

export default App;
