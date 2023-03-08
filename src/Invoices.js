import React, { useState, useEffect } from "react";
import { Space, Popover, Button } from "antd";
import DropMenu from "./DropMenu";
import { useNavigate, Link } from "react-router-dom";
import "./NavCss.css";
import TableF from "./TableF";
import { motion } from "framer-motion";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bvczchgshbalfaskstlf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ"
);
const Invoices = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
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
  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/homepage");
  }

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <div className="container1">
          <header>
            <div className="container4">
              <div className="leftNav">
                <Popover
                  placement="bottomRight"
                  title="MEDVA"
                  content="Medical Virtual Assistant"
                >
                  <h2 className="MedvaLogo">MEDVA</h2>
                </Popover>
              </div>
              <div className="rightNav">
                <Space>
                  <DropMenu logout={signOutUser} />
                </Space>
              </div>
            </div>
          </header>
          <motion.div animate={{ y: -30 }}>
            <div className="Msg9">Invoices</div>
            <div className="InvoicesMsg">
              <div className="Msg7">
                <p>
                  Our convenient system allows you to quickly view your invoices
                  and manage them in one place.
                </p>
              </div>
              <div className="Msg10">
                Keep track of your payments, and upcoming bills with ease.
              </div>
            </div>
            <div className="Tablef">
              <TableF />
            </div>
          </motion.div>
        </div>
      ) : (
        <div>""</div>
      )}
    </div>
  );
};

export default Invoices;
