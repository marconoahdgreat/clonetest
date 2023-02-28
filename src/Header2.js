import React from 'react'
import './NavCss.css'
import {Button, Space} from 'antd'

import {Link} from 'react-router-dom'
import { Header } from 'antd/es/layout/layout'

function Homepage() {
  return (
    <div>
       <Header>
            <div className='leftNav'>
                <h2>MEDVA</h2>
            </div>
            <div className='rightNav'>  
                <Space>
                    <Link to='/Login'><Button size='medium' className='btn1' ><h5>Signup</h5></Button></Link>
                    <Link to='/Login'><Button size='medium' type="primary" className='btn2'><h5>Login</h5></Button></Link>
                </Space>
            </div>
        </Header>
    </div>
  )
}

export default Homepage
