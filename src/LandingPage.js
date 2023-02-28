import React from 'react'
import './NavCss.css'
import {Button, Space,Popconfirm} from 'antd'
import {useNavigate} from 'react-router-dom'
import {LogoutOutlined } from '@ant-design/icons'


const LandingPage = ({token}) => {
  let navigate= useNavigate()
  
 function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/login')
  }

  
  return (
    <div>
       <header>
            <div className='leftNav'>
                <h2>MEDVA</h2>
            </div>
            <div className='rightNav'>  
             
                <Space>
                    <p>Welcome , {token.user.email} </p>
                    <Popconfirm
                 className='logoutlogo'
                      placement="rightTop"
                      title='Are you sure you want to logout?'
                     
                      onConfirm={handleLogout}
                      okText="Yes"
                      cancelText="No"
      ><Button><LogoutOutlined /></Button></Popconfirm>
                  </Space>
            </div>
      </header>
    </div>
  )
}

export default LandingPage
