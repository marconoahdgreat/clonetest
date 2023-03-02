import React from 'react'
import { Space,Popover} from 'antd'
import DropMenu from './DropMenu'
import { useNavigate } from 'react-router-dom'
import './NavCss.css'
import TableF from './TableF'
import {motion} from 'framer-motion'


const Invoices = ({token}) => {
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
       <motion.div animate={{y : -30}}>
        <div className='InvoicesName'>
                  Invoices
                </div>
        <div className='InvoicesMsg'>
       
<div className='Msg1'>Our convenient system allows you to quickly view your invoices and manage them in one place.</div>
<div className='Msg2'>Keep track of your payments, and upcoming bills with ease.</div>
        </div>
        <div className='Tablef'>
        <TableF/>
        </div>
         </motion.div> 
    </div>
   
  )
}

export default Invoices
