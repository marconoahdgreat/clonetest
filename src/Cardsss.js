import React, { useState } from "react";
import { Card, Space } from "antd";
import photo from "./images/appoints.png";
import "./NavCss.css";
import { CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

function Cardsss(props) {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  };

  return (
    <motion.div animate={{ y: -30 }}>
      <div>
        <Card
          className={active ? "cardsprops active " : "cardsprops inactive "}
          onClick={handleOnClick}
        >
          <CheckCircleOutlined
            className={active ? "Checkcard" : "inCheckcard "}
          />

          <div>
            <img src={photo}></img>
          </div>
          <div>
            <p classname>{props.title}</p>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export default Cardsss;
