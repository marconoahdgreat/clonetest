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

    <Table style={{width: "90%" , marginLeft: "5%" }} columns={columns}  size="small" />

  </>
);
export default TableF;