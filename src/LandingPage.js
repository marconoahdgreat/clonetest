import React from 'react'
import './NavCss.css'
import {Button, Space,Popconfirm, Popover, Dropdown} from 'antd'
import {useNavigate} from 'react-router-dom'
import {LogoutOutlined } from '@ant-design/icons'
import DropMenu from './DropMenu'


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
                  <DropMenu phar={token.user.identities[1].identity_data.name} imgSrc={token.user.identities[1].identity_data.picture} logout={handleLogout}/>
                   
                  
                  </Space>
            </div>
      </header>
    </div>
  )
}

export default LandingPage
