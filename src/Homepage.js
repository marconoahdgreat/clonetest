import React from 'react'
import './NavCss.css'
import {Button, Popover, Space} from 'antd'
import {Link} from 'react-router-dom'
import Cardsss from './Cardsss'


function Homepage() {

  return (
    <div>
       <header>
            <div className='leftNav'>
                <Popover placement="bottom" content='Your Medical Virtual Assistant'><h2>MEDVA</h2></Popover>
            </div>
            <div className='rightNav'>  
                <Space>
                    <Link to='/signup'><Button size='medium' className='btn1' ><h5>Signup</h5></Button></Link>
                    <Link to='/Login'><Button size='medium' className='btn2' ><h5>Login</h5></Button> </Link>
                </Space>
            </div>
      </header>
      <Cardsss />
    </div>
  )
}

export default Homepage
