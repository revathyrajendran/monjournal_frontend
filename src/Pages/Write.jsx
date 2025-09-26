import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import { adddiaryApi } from '../Services/allAPIs';





function Write() {

   
    const[story, setStory]=React.useState(' ')
   const today = new Date().toLocaleDateString();

   const handlePage = async () => {
  try {
    const loggedInUser = localStorage.getItem("loggedInUser"); // ✅ get logged-in email
    if (!loggedInUser) {
      alert("No user logged in. Please log in again.");
      window.location = "/";
      return;
    }

    const newPage = { 
      story, 
      date: today, 
      owner: loggedInUser   // ✅ store owner info
    };

    const result = await adddiaryApi(newPage);
    console.log('Saved entry:', result.data);
    setStory('');
    window.location = '/mydiary';
  } catch (err) {
    console.error('Error saving page:', err);
    alert('Failed to save page. Please try again.');
  }
};
  return (
   <div className="row " style={{overflowX:'hidden', overflowY:'hidden'}}>
    <div className="col-md-4"></div>
   
    <div className="col-md-4">
       <Box component="section" >
      
        <Paper elevation={3} >
           <div className=" d-flex justify-content-between">
 <h6 className='p-3'>Date : {today} </h6>
  
           </div>
            
           
            <h5 className='px-3'>Dear Diary,</h5>
           <TextField className='px-3' id="standard-basic" variant="standard" value={story} multiline rows={10} onChange={(e)=>setStory(e.target.value)} />
        </Paper>
      </Box>

    

      
      <div className="d-flex justify-content-between">
        <button onClick={handlePage} className="btn btn-success text-center my-4">Add New Page</button>
        <button onClick={()=>(home())}  className="btn btn-success text-center my-4">Home</button>
      </div>

  </div>
   
    <div className="col-md-4"></div>

    
   
    </div>
  )
}

export default Write



