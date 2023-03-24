import React, { useState } from "react";
import Main from "./components/Main";
import Marvel from "./components/Marvel";
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Marvel />} />
      </Routes>
    </div>
  );
}

export default App;