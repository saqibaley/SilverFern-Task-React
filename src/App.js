import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test1 from "./pages/Test1"
import Test2 from "./pages/Test2";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </Router>
  );
}

export default App;
