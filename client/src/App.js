import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import AllNews from "./pages/AllNews/AllNews";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news/category/:category" element={<AllNews />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
