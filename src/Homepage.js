import React from "react";
import "./NavCss.css";
import { Button, Popover, Space } from "antd";
import { Link } from "react-router-dom";
import Cardsss from "./Cardsss";

function Homepage() {
  return (
    <div>
      <header>
        <div className="leftNav">
          <Popover placement="bottom" content="Your Medical Virtual Assistant">
            <h2>MEDVA</h2>
          </Popover>
        </div>
        <div className="rightNav">
          <Space>
            <Link to="/signup">
              <Button size="medium" className="btn1">
                <h5>Signup</h5>
              </Button>
            </Link>
            <Link to="/Login">
              <Button size="medium" className="btn2">
                <h5>Login</h5>
              </Button>{" "}
            </Link>
          </Space>
        </div>
      </header>
      <div>
        <p className="Msg3">Hire the best Virtual Assistants</p>
        <p className="Msg4">
          Say goodbye to mundane tasks and welcome to the future - get your
          virtual assistant today!
        </p>
      </div>

      <div className="SpaceHome ">
        <Space>
          <Cardsss title="Medical" />
          <Cardsss title="Dental" />
        </Space>
      </div>
      <div className="Msg5">Which type of personnel do you need?</div>
      <div className="SpaceHome">
        <div className="container">
          <Cardsss title="Admin" />
          <Cardsss title="Biller" />

          <Cardsss title="Scribe" />
          <Cardsss title="Receptionist" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
