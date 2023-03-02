import { LogoutOutlined ,SettingOutlined, SearchOutlined, BookOutlined, UserAddOutlined, CalendarOutlined  } from '@ant-design/icons';
import { Dropdown,  Space } from 'antd';
import {  useNavigate } from 'react-router-dom';


const DropMenu = (props) => {
const navigate = useNavigate()

const items =  [
  {
   icon:<SearchOutlined />,
    label: 'Find VAs',
    key: '1',
  },
  {
    icon:<CalendarOutlined />,
    label: <div onClick={() => navigate('/appoint')}>Appointments</div>,
    key: '2',
  },
  {
    icon:<BookOutlined />,
    label: <div onClick={() => navigate('/invoices')}>Invoices</div>,
    key: '3',
  },
  {
    icon:<UserAddOutlined />,
    label: 'Hired VAs',
    key: '4',
    disabled: true,
  },
  {
    icon:<SettingOutlined />,
    label: 'Settings',
    key: '5',
    disabled: true,
  },
  {
    icon:<LogoutOutlined />,
    label: <div onClick={props.logout}>'Logout'</div>,
    key: '6',
    danger: true,
  },
];
return (
  
  <Dropdown 
    menu={{
      items
   
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <p style={{color: 'black'}}>Welcome, {props.phar}</p><img className='profimage' src={props.imgSrc} />
      </Space>
    </a>
  </Dropdown>
);}
export default DropMenu;