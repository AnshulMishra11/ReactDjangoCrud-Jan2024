import {React,useEffect,useMemo,useState} from 'react'
import {MaterialReactTable} from 'material-react-table';
import Dayjs from 'dayjs';
import AxiosInstance from './Axios'
import {Box,IconButton} from '@mui/material'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import {Link} from 'react-router-dom'

const Home = () => {
  const [myData,setMyData] = useState()
  const [loading,setLoading] = useState(true)
  
  const GetData = () => {
    AxiosInstance.get(`project/`).then((res)=>{
      setMyData(res.data)
      console.log(res.data)
      setLoading(false)
    })

  }
  useEffect(()=>{
    GetData();

  },[])





  {/**

  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ];
   */}

    const columns = useMemo(
      () => [
        {
          accessorKey: 'name', //access nested data with dot notation
          header: 'Name',
          size: 150,
        },
        {
          accessorKey: 'status',
          header: 'Status',
          size: 150,
        },
        {
          accessorKey: 'comments', //normal accessorKey
          header: 'Commenting',
          size: 200,
        },
        {
          accessorFn: (row)=> Dayjs(row.start_date).format('DD-MM-YYYY'),
          header: 'Start date',
          size: 150,
        },
        {
          accessorFn: (row)=> Dayjs(row.end_date).format('DD-MM-YYYY'),
          header: 'End date',
          size: 150,
        },
      ],
      [],
    );
  
    // const table = useMaterialReactTable({
    //   columns,
    //   data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // });
  
  //   // return <MaterialReactTable table={table} />;
  // };
  



  return (
    <div>
      {/* <MaterialReactTable table={table} /> */}
      { loading ? <p> Loading data.... </p> : 
      //<MaterialReactTable columns={columns} data={data} /> 
      <MaterialReactTable 
        columns={columns} 
        data={myData}  
        enableRowActions
      renderRowActions={({row}) => (
        
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
      />
      }
    </div>
  )
}

export default Home




