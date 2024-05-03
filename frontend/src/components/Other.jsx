import {React, useEffect,useState}  from 'react'
// import { useState } from 'react'
import {Box,Typography} from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MyMultilineField from './forms/MyMultilineField'
import MyTextField from './forms/MyTextField'
import MySelectField from './forms/MySelectField'
import {useForm} from 'react-hook-form'
import { Button } from '@mui/material'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs';
import {useNavigate,useParams} from 'react-router-dom'
const Delete = () => {

  const MyParams = useParams();
  const MyId = MyParams.id;
//   const [loading, setLoading] = useState(true);


  const [myData,setMyData] = useState()
  const [loading,setLoading] = useState(true)

  const GetData = () => {
    
   AxiosInstance.get(`project/${MyId}/`).then((res)=>{
    setMyData(res.data)
    console.log(res.data)
    setLoading(false)
    })
    .error((err)=>{
        console.log(err)
    })

  }


  useEffect(() => {
    GetData();
  }, []);
  const navigate = useNavigate()
  const submission = (data)=> {


    AxiosInstance.delete(`project/${MyId}/`)
    .then((res)=>{
      navigate(`/`)
    })
    
  }
  return (
    <div>
        { loading ? <p> Loading data.... </p> : 
      <div>
      <Box sx={{display:'flex',width:'100%',backgroundColor:'#00003f',marginBottom:'10px'}}>
        <Typography sx={{marginLeft:'20px',color:'#fff'}}>
          Delete Records : {myData.name}
        </Typography>
      </Box>
      <Box sx={{display:'flex',width:'100%',boxShadow:3,padding:4,flexDirection:'column'}}>
        <Box sx={{display:'flex',justifyContent:'start',marginBottom:'40px'}}> 
            Really want to delete : {myData.name}
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around'}}>
          
          <Box sx={{width:'30%'}}>
            <Button variant="contained" onClick={submission} sx={{width:'100%'}}>
              Delete
            </Button>
          </Box>
        </Box>
      </Box>

    </div>
    }

    </div>
  )
}

export default Delete





















