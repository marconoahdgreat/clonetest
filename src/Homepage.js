import React from "react";
import "./NavCss.css";
import { Button, Divider, Popover, Space } from "antd";
import { Link } from "react-router-dom";
import Cardsss from "./Cardsss";
import ModalCards from "./ModalCards";
import CardData from "./Data.js";

function Homepage() {
  return (
    <div className="container1">
      <header>
        <div className="container4">
          <div className="leftNav ">
            <Popover
              placement="bottom"
              content="Your Medical Virtual Assistant"
            >
              <h2 className="MedvaLogo">MEDVA</h2>
            </Popover>
          </div>
          <div className="rightNav">
            <Link to="/signup">
              <Button size="medium" className="btn1">
                <p>Signup</p>
              </Button>
            </Link>
            <Link to="/Login">
              <Button size="medium" className="btn2">
                <p>Login</p>
              </Button>{" "}
            </Link>
          </div>
        </div>
      </header>
      <div className="containe1">
        <p className="Msg1">Hire the best Virtual Assistants</p>
        <p className="Msg2">
          Say goodbye to mundane tasks and welcome to the future - get your
          virtual assistant today!
        </p>
      </div>

      <div className=" container1 ">
        <Cardsss title="Medical" />
        <Cardsss title="Dental" />
      </div>

      <div>
        <h1 className="Msg6">Which type of personnel do you need?</h1>
      </div>

      <div className="container0">
        <Cardsss title="Admin" />
        <Cardsss title="Biller" />

        <Cardsss title="Scribe" />
        <Cardsss title="Receptionist" />
      </div>
      <Divider></Divider>
      <div className="container9">
        <div>
          <h1 className="Msg8">Pick your future virtual assistant </h1>
        </div>

        <div className="container">
          <ModalCards details={CardData} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
