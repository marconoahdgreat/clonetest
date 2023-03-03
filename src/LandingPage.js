import React from "react";
import "./NavCss.css";
import { Space, Popover } from "antd";
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
    <div>
      <header>
        <div className="leftNav">
          <Popover
            placement="bottomRight"
            title="MEDVA"
            content="Medical Virtual Assistant"
          >
            <Link to="/landing">
              <h2>MEDVA</h2>
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
      </header>

      <div>
        <p className="Msg3">Hire the best Virtual Assistants</p>
        <p className="Msg4">
          Say goodbye to mundane tasks and welcome to the future - get your
          virtual assistant today!
        </p>
      </div>

      <div className="Msg5">Which type of personnel do you need?</div>
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
      <p className="Msg2">
        <b>Pick your future virtual assistant</b>
      </p>
      <div className="container">
        <Space>
          <ModalCards details={CardData} />
        </Space>
      </div>
    </div>
  );
};

export default LandingPage;
