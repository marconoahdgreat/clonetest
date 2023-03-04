import React, { useState } from "react";
import { Button, Rate, Card, Space, Modal } from "antd";

import "./ModalCSS.css";

const ModalCards = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p></p>
      </Modal>

      <div className="modalhead">
        {props.details.map((value, index) => (
          <Space>
            <Card key={index} className="cssCard">
              <div>
                <img className="ProfPics" src={value.photo}></img>
              </div>
              <div className="MapName">
                <img className="Maps" src={value.mapz}></img>
                <p className="Namez">{value.name}</p>
              </div>
              <div className="nameBorder">
                <p>{value.work}</p>
              </div>
              <div className="skillls">
                <ul>
                  <li>{value.skill1}</li>
                  <li>{value.skill2}</li>
                  <li>{value.skill3}</li>
                  <li>{value.skill4}</li>
                  <li>{value.skill5}</li>
                </ul>
              </div>
              <div>
                <Rate className="ratingS" allowHalf defaultValue={2.5} />
              </div>
              <div>
                <Button className="CardButton" onClick={showModal}>
                  View Details
                </Button>
              </div>
            </Card>
          </Space>
        ))}
      </div>
    </>
  );
};

export default ModalCards;
