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

  const myparams = useParams();
  const myid = myparams.id;
//   const [loading, setLoading] = useState(true);


  const [myData,setMyData] = useState()
  const [loading,setLoading] = useState(true)

  const GetData = () => {
    
   AxiosInstance.get(`project/${myid}/`).then((res)=>{
    setMyData(res.data)
    console.log(res.data)
    setLoading(false)
    })
    .catch((err)=>{
        console.log(err)
        setLoading(false)
    })

  }


  useEffect(() => {
    GetData();
  }, []);
  const navigate = useNavigate()
  const submission = (data)=> {


    AxiosInstance.delete(`project/${myid}/`)
    .then((res)=>{
      navigate(`/`)
    })
    .catch((err) => {
        console.log(err);
    });
    
  }
  return (
    <div>
        { loading ? <p> Loading data.... </p> : 
      <div>
      <Box sx={{display:'flex',width:'100%',backgroundColor:'#00003f',marginBottom:'10px',justifyContent:'space-around'}}>
        <Typography sx={{marginLeft:'20px',color:'#fff'}}>
          Delete Records : {myData.name}
        </Typography>
      </Box>
      <Box sx={{display:'flex',width:'100%',boxShadow:3,padding:4,flexDirection:'column'}}>
        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}> 
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





















