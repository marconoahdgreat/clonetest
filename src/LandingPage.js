import React from 'react'
import './NavCss.css'
import { Space,Popover} from 'antd'
import {useNavigate} from 'react-router-dom'

import DropMenu from './DropMenu'
import Cardsss from './Cardsss'
import logoo from './images/logoo.webp'


const LandingPage = ({token}) => {
  let navigate= useNavigate()
  

  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/Login')
    
    window.location.reload()
  }

  return (
    
    <div >
       <header>
            <div className='leftNav'>
              <Popover placement="bottomRight" title='MEDVA' content='Medical Virtual Assistant' >
                 <h2>MEDVA</h2>
              </Popover>
            </div>
            <div className='rightNav'>  
 
                <Space>
                  <DropMenu phar={token.user.email} imgSrc={logoo} logout={handleLogout}/>
                </Space>
           
            </div>
      </header> <Cardsss />
    </div>
  )
}

export default LandingPage
