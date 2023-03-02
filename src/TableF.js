import { Table } from 'antd';
const columns = [
  {
    title: 'Actions',
 
  },
  {
    title: 'Status',
   
  },
  {
    title: 'Invoice #',
   
  },

  {
    title: <div className='leftproject'>Project name</div>,
   
  },
  {
    title: 'Due date',
   
  },
  {
    title: 'amount',
    
  },
];


const TableF = () => (
  <>

    <Table columns={columns}  size="middle" />

  </>
);
export default TableF;