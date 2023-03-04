import React from "react";
import { Space, Popover, Card } from "antd";
import DropMenu from "./DropMenu";
import { useNavigate, Link } from "react-router-dom";
import "./NavCss.css";
import { ScheduleOutlined } from "@ant-design/icons";
import logo from "./images/appoints.png";
import { motion } from "framer-motion";
import logoo from "./images/logoo.webp";

const Appointment = ({ token }) => {
  let navigate = useNavigate();
  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/Login");

    window.location.reload();
  }
  return (
    <div className="container1">
      <header>
        <div className="container4">
          <div className="leftNav">
            <Popover
              placement="bottomRight"
              title="MEDVA"
              content="Medical Virtual Assistant"
            >
              <Link to="/landing">
                <h2 className="MedvaLogo">MEDVA</h2>
              </Link>
            </Popover>
          </div>
          <div className="rightNav">
            <Space>
              <DropMenu
                phar={token.user.email}
                imgSrc={logoo}
                logout={handleLogout}
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
  );
};

export default Appointment;
