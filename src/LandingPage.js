import React from "react";
import "./NavCss.css";
import { Space, Popover, Divider } from "antd";
import { useNavigate, Link } from "react-router-dom";
import CardData from "./Data";
import DropMenu from "./DropMenu";
import Cardsss from "./Cardsss";
import logoo from "./images/logoo.webp";
import ModalCards from "./ModalCards";

const LandingPage = ({ token }) => {
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
};

export default LandingPage;
