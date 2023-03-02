import React from 'react'
import { Space,Popover,Card} from 'antd'
import DropMenu from './DropMenu'
import { useNavigate } from 'react-router-dom'
import './NavCss.css'
import {ScheduleOutlined} from '@ant-design/icons'
import logo from './images/appoints.png'


const Appointment = ({token}) => {
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

        <div className='InvoicesName'>
        Your appointments
                </div>
        <div className='InvoicesMsg'>
       
<div className='Msg1'>Here you'll find all of your appointments. You can modify them according to your preferences</div>

        </div>
        <div  >
      
  <Card className="AppointLogo"
    style={{
      width: '100%',
      height: 500
    }}
  >
    <img  style={{height: '400px'}}src={logo} />
    <p>You do not have any appointments yet.</p>
    <a><p>Click here to find virtual assistants</p></a>
  </Card>

        </div>
    </div>
  )
}

export default Appointment
