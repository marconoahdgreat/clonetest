import { SmileOutlined,BulbOutlined } from '@ant-design/icons';
import { Button, notification, Popover } from 'antd';
import './NavCss.css'

const Notif = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Are you signed up?',
      description:
        'Please check your email for Email verification. If you recieve nothing then please signup again,',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  return (
    <>
      {contextHolder}
      <Popover placement="bottom" title='Click me!' content='Signup problem?'><Button size="small"  className='Clickme' type="primary" onClick={openNotification}>
      <BulbOutlined />
      </Button></Popover>
    </>
  );
};
export default Notif;