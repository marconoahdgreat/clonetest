import React from 'react'
import { Button, Spin } from 'antd'
import './NavCss.css'

const Loadingbtn = ({title , loading, onClick}) => {
  return (
    <Button className='lodBtn' onClick={onClick} type="Submit" htmlType='Submit' block>
        {
            loading ? <Spin/> : title
        }
    </Button>
  
)
}

export default Loadingbtn
