import React ,{useState}from 'react'
import { Card, Space } from 'antd';
import photo from './images/appoints.png'
import './NavCss.css'
import {CheckCircleOutlined} from '@ant-design/icons'
import {motion} from 'framer-motion'


function Cardsss() {


const [cards] = useState ([

{
    image:(photo),
    cardTitle:"Medical"

},
{
    image:(photo),
    cardTitle:"Dental"
    },
 
]);


return (
    <motion.div animate={{y : -30}}>
    <div>
         <div className='Msg3'>
            <p>Hire the best Virtual Assistants</p>
            </div>
            <div className='Msg4'>
            <p>Say goodbye to mundane tasks and welcome to the future - get your virtual assistant today!</p>
            </div>
<div className='wholecards'>
        {
        cards.map((cards) => (
<>
           
           <Space>
         <a>
           <Card className='cardsprops' 
            >
                <CheckCircleOutlined className='Checkcard'/>
            <div>   
                <img src={cards.image} ></img>
            </div>       
            <div>
                <p classname>{cards.cardTitle}</p>
            </div>
            </Card></a>
</Space></>

        )  )
        
        }
        </div>
       </div></motion.div>
)
}

export default Cardsss
