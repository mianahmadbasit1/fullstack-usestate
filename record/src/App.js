import React from 'react'
import Header from './Comp/header'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import './App.css'
import { Stack } from '@mui/material';
import { useState } from 'react';

import Fields from './Comp/fields';
// for rating
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import MultilineTextFields from './Comp/ahmad';
import Ahmad from './ahmad/ahmad';


function App() {
const [fname , setfname] = useState(1);






  const [name,setName]=useState("")
  const [email,setEmail] =useState("")



  const [data,setData] = useState([]);



function check () {
  setfname(fname*2)
}


  // const [value, setValue] = React.useState(2);
  const addData = () => {

    setData([...data,{
      //  name,email
   name:name,
      email:email}
    ]);
      setName("");
      setEmail("");
  }

  return (

<div className='App'>
<Ahmad/>
<Ahmad/>
<Ahmad/>
<MultilineTextFields/>
<h1>{fname}</h1>
<button onClick={check}>change</button>
       {/* <Stack spacing={2}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
 <Box
      sx={{
        '& > legend': { mt: 8 },
      }}
    ></Box>
 <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}



<Header/>
<div className='form'>

<Stack direction='row' spacing={6}>

<TextField
          value={name}
          onChange={(event)=> setName(event.target.value)}
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          />
<TextField
      value={email}
      onChange={(event)=> setEmail(event.target.value)}    
      id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          />
<Button variant="contained" color='success' onClick={addData}> <AddIcon/> </Button>
          </Stack>
          </div>
          
          {/* data show */}
          <div className='data'>
            <div className='data_val'>
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Remove</h4>
            </div>





            
            {
              data.map((element,index) =>{
                return (
                  <Fields key={index} name={element.name} email={element.email} index={index}/>
                )
              })



            }
             
          </div>
    </div>
  )
}

export default App