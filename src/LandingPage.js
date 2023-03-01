import React from 'react'
import './NavCss.css'
import {Button, Space,Popconfirm, Popover} from 'antd'
import {useNavigate} from 'react-router-dom'
import {LogoutOutlined } from '@ant-design/icons'


const LandingPage = ({token}) => {
  let navigate= useNavigate()
  
 function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/Login')
    window.location.reload()
  }

  
  return (
    
    <div>
       <header>
            <div className='leftNav'>
              <Popover placement="bottomRight" title='MEDVA' content='Medical Virtual Assistant' >
                 <h2>MEDVA</h2>
              </Popover>
            </div>
            <div className='rightNav'>  
             
                <Space>
                    <p>Welcome , {token.user.email} </p>
                    <Popover  placement="bottom" content='Logout?'><Popconfirm
                 className='logoutlogo'
                      placement="rightTop"
                      title='Are you sure you want to logout?'
                     
                      onConfirm={handleLogout}
                      okText="Yes"
                      cancelText="No"
      ><Button><LogoutOutlined /></Button></Popconfirm></Popover>
                  </Space>
            </div>
      </header>
    </div>
  )
}

export default LandingPage
