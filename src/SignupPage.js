import React, {useState} from 'react'
import {Input,Form ,Typography,Button} from 'antd';
import './Card.css'
import {MailOutlined, KeyOutlined, GooglePlusOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import { supabase } from './client'

function SignupPage() {
   
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
    try{
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      alert('Check your email for verification Link, if no link was send then try again.')
}catch (error) {
  alert(error)
}}
async function signInWithGoogle() {
//eslint-disable-next-line
  const { data, session, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    option: {
   
    },
    })}
 
  return (
    <div className='main'>
        <Form className='LoginForm'  onSubmitCapture={handleSubmit}>
            <div>
           
                <Link to='/'><Typography.Title className='welcome' style={{color: 'darkblue' }}>MEDVA</Typography.Title>
                <h6>Medical Virtual Assistants</h6></Link>
            </div>
                <h5> Sign up now.</h5>
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
                <Button size='medium' className='loginBtn ' type='Submit'  htmlType='Submit'  block>
                    Signup
                </Button>
                <Button size='medium' className='signupBtn '  onClick={signInWithGoogle}  block>
                <GooglePlusOutlined className='googlelogo' /> Log in using google
                </Button>
                <Link to="/"><center className='fpass'>Forgot password?</center></Link>
           </Form>
    </div>
    )
}

export default SignupPage
