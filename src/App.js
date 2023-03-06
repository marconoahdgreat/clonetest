import React from "react";

import { Route, Routes } from "react-router-dom";
import Success from "./Success";
import Login from "./LoginDirect";
import Homepage from "./Homepage";
import Invoices from "./Invoices";
import Appointment from "./Appointment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/invoices" element={<Invoices />} />
        <Route path="/success" element={<Success />} />
        <Route path="/appoint" element={<Appointment />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
