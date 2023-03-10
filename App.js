import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import LoginDirect from "./LoginDirect";
import LandingPage from "./LandingPage";
import SignupPage from "./SignupPage";
import Invoices from "./Invoices";
import Appointment from "./Appointment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingPage token={token} />} />

        <Route path="/Login" element={<LoginDirect setToken={setToken} />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/invoices" element={<Invoices token={token} />} />

        <Route path="/appoint" element={<Appointment token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
