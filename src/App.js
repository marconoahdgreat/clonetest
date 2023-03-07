import Reac, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Success from "./Success";
import Login from "./LoginDirect";
import Homepage from "./Homepage";
import Invoices from "./Invoices";
import Appointment from "./Appointment";
import PrivateRoutes from "./PrivateRoutes";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bvczchgshbalfaskstlf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ"
);
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/success" element={<Success user={user} />} />
          <Route path="/invoices" element={<Invoices user={user} />} />

          <Route path="/appoint" element={<Appointment user={user} />} />
        </Route>

        <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
