import React, { useState, useEffect } from "react";
import { Space, Popover, Card } from "antd";
import DropMenu from "./DropMenu";
import { useNavigate, Link } from "react-router-dom";
import "./NavCss.css";

import logo from "./images/appoints.png";
import { motion } from "framer-motion";

import { createClient } from "@supabase/supabase-js";
import Login from "./LoginDirect";

const supabase = createClient(
  "https://bvczchgshbalfaskstlf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ"
);

const Appointment = () => {
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
                  <DropMenu
                    phar={user.user_metadata.full_name}
                    imgSrc={user.user_metadata.picture}
                    logout={signOutUser}
                  />
                </Space>
              </div>
            </div>
          </header>

          <motion.div animate={{ y: -30 }}>
            <div className="Msg9">Your appointments</div>
            <div className="InvoicesMsg">
              <div>
                <p className="Msg11">
                  Here you'll find all of your appointments. You can modify them
                  according to your preferences
                </p>
              </div>
            </div>

            <div>
              <Card className="AppointLogo" style={{}}>
                <img style={{ height: "200px" }} src={logo} />
                <p>You do not have any appointments yet.</p>
                <a>
                  <p>Click here to find virtual assistants</p>
                </a>
              </Card>
            </div>
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Appointment;
