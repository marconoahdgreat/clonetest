import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Button, Popover, Divider, Space } from "antd";
import Cardsss from "./Cardsss";
import DropMenu from "./DropMenu";
import ModalCards from "./ModalCards";
import CardData from "./Data";
import Login from "./LoginDirect";

const supabase = createClient(
  "https://bvczchgshbalfaskstlf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Y3pjaGdzaGJhbGZhc2tzdGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTY1NzcsImV4cCI6MTk5Mjk3MjU3N30.l8fzd8VbPe31q453tV-emJ89zxfBJUQDl_HubpaUkaQ"
);

function Success() {
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
                  <Link to="/landing">
                    <h2 className="MedvaLogo">MEDVA</h2>
                  </Link>
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
            <Cardsss className="cardClass" title="Admin" />
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
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Success;
