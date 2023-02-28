import React, {useState} from 'react'
import {Input,Form ,Typography,Button} from 'antd';
import './Card.css'
import {MailOutlined, KeyOutlined, GooglePlusOutlined } from '@ant-design/icons'
import {Link,useNavigate} from 'react-router-dom'
import { supabase } from './client'

function LoginDirect() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password: "",
        
    })
  console.log(formData)
 

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
            
        })

}
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
        })
        if (error) throw error
        console.log(data)
      
        navigate('/')
       
} catch (error) {
  alert (error)
}
}

async function signInWithGoogle() {

  const { data, session, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    option: {
      redirectTo: navigate('/sucessfull'),
    },
    })}
 
  return (
    <div className='main'>
        <Form className='LoginForm'  onSubmitCapture={handleSubmit}>
            <div>
                <Typography.Title className='welcome' style={{color: 'darkblue' }}>MEDVA</Typography.Title>
                <h6>Medical Virtual Assistants</h6>
            </div>
                <h5> Login you your Account</h5>
            <Form.Item 
                 rules={[
                    { 
                        required: true, message: 'Please input a valid username.' 
                    },]}name='email'>
            <Input className='allwidth' onChange={handleChange} prefix={<MailOutlined/>} placeholder='Your email address' name='email'/>
            </Form.Item>
            <Form.Item  name='password' 
                 rules={[
                     {
                         required: true,
                        message: "Please enter your password.",
                    },
                    {min: 6}]} >
            <Input.Password className='allwidth' onChange={handleChange} placeholder='Your password' prefix={<KeyOutlined />} name='password' />
            </Form.Item>
                <Button size='medium' className='loginBtn '  htmlType='Submit'  block>
                    Login
                </Button>
                <Button size='medium' className='signupBtn '  onClick={signInWithGoogle}  block>
                <GooglePlusOutlined className='googlelogo' /> Log in using google
                </Button>
                <Link to="/"><center className='fpass'>Forgot password?</center></Link>
           </Form>
    </div>
    )
}

export default LoginDirect
