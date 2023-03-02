import { Table } from 'antd';
import './Card.css'
const columns = [
  {
    title: <div className='titlTable'>Actions</div>,
 
  },
  {
    title: <div className='titlTable'>Status</div>,
   
  },
  {
    title: <div className='titlTable'>Invoice #</div>,
   
  },

  {
    title: <div className='leftproject'>Project name</div>,
   
  },
  {
    title: <div className='titlTable'>Due date</div>,
   
  },
  {
    title: <div className='titlTable'>amount</div>
    
  },
];


const TableF = () => (
  <>

    <Table className='tablez'  columns={columns}  size="small" />

  </>
);
export default TableF;