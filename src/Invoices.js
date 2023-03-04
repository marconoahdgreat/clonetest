import React from "react";
import { Space, Popover } from "antd";
import DropMenu from "./DropMenu";
import { useNavigate, Link } from "react-router-dom";
import "./NavCss.css";
import TableF from "./TableF";
import { motion } from "framer-motion";
import logoo from "./images/logoo.webp";

const Invoices = ({ token }) => {
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
        <div className="Msg9">Invoices</div>
        <div className="InvoicesMsg">
          <div className="Msg7">
            <p>
              Our convenient system allows you to quickly view your invoices and
              manage them in one place.
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
  );
};

export default Invoices;
