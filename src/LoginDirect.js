import React, { useState } from "react";
import { Input, Form, Typography, Button, Popover } from "antd";
import "./Card.css";
import {
  MailOutlined,
  KeyOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "./client";
import Loadingbtn from "./Loadingbtn";
import { motion } from "framer-motion";

const LoginDirect = ({ setToken }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/landing");
    } catch (error) {
      alert(error);
    }
  };

  async function signInWithGoogle(event) {
    //eslint-disable-next-line
    const { data, session, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      option: {},
    });
  }

  return (
    <motion.div animate={{ y: -30 }}>
      <div className="main">
        <Form className="LoginForm" onSubmitCapture={handleSubmit}>
          <div>
            <Link to="/">
              <Typography.Title>
                <Popover placement="right" content="return to mainpage">
                  <p className="welcome"> MEDVA</p>
                </Popover>
              </Typography.Title>
              <h6>Medical Virtual Assistants</h6>
            </Link>
          </div>
          <h5> Login you your Account</h5>
          <div className="containerItem">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input a valid username.",
                },
              ]}
              name="email"
            >
              <Input
                className="allwidth"
                onChange={handleChange}
                prefix={<MailOutlined />}
                placeholder="Your email address"
                name="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password.",
                },
                { min: 6 },
              ]}
            >
              <Input.Password
                className="allwidth"
                onChange={handleChange}
                placeholder="Your password"
                prefix={<KeyOutlined />}
                name="password"
              />
            </Form.Item>
          </div>
          <div className="BtnHead">
            <Loadingbtn
              className="Btn4"
              title={"Log in"}
              loading={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
            />

            <Popover
              placement="bottom"
              content="Not working for the moment, use the Custom Log in."
            >
              <Button
                disabled
                size="medium"
                className="Btn4"
                onClick={signInWithGoogle}
                block
              >
                <GooglePlusOutlined className="googlelogo" /> Log in using
                google
              </Button>
            </Popover>
          </div>
          <Link to="/">
            <center className="fpass">Forgot password?</center>
          </Link>
        </Form>
      </div>
    </motion.div>
  );
};

export default LoginDirect;
