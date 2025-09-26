import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import { deletediaryapibyID, getsiaryApi, togglefavouriteAPI } from '../Services/allAPIs';

function Diary() {

  // Load entries on component mount
React.useEffect(() => {
    loadEntries();
  }, []);

// When creating a page


  const[entries,setEntries]=React.useState([]);
//fetching diary pages 
  const loadEntries = async () => {
  try {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("No user logged in. Please log in again.");
      window.location = "/";
      return;
    }

    const res = await getsiaryApi();
    // ✅ Filter pages belonging to current user
    const userPages = res.data.filter(page => page.owner === loggedInUser);

    setEntries(userPages);
  } catch (err) {
    console.error("Error fetching diary pages:", err);
  }
};

  //deleteing pages
  const handleDelete = async (id) => {
  try {
    await deletediaryapibyID(id); // call backend to delete
    // remove the entry from local state without calling loadEntries
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
  } catch (err) {
    console.log(err);
  }
};
  const handlefavourite = async (id, currentfav) => {
  try {
    // Call backend to toggle favourite
    await togglefavouriteAPI(id, currentfav);

    // Update local state without touching story content
    setEntries(prevEntries =>
      prevEntries.map(entry =>
        entry.id === id ? { ...entry, favourite: !currentfav } : entry
      )
    );

    alert(currentfav ? "Removed from favourite" : "Added to favourite");
  } catch (err) {
    console.log(err);
  }
};

  

  return (
    <>
      <h1 className="text-center">My Diary</h1>

      <button onClick={()=>(window.location=('/write'))} className="btn btn-primary mx-5">Create More</button>

     
        <div className="row p-5">
          {entries.map((entry)=> (
            <div key={entry.id} className="col-md-4">
  
           <div className="d-flex ">
            <i onClick={()=>(handleDelete(entry.id))} className="fa-solid fa-trash fa-2xl m-3 p-3 " style={{ color: "#ff2424"}}></i>
            <i onClick={()=>(handlefavourite(entry.id,entry.favourite))}  className="fa-solid fa-heart mx-5 fa-2xl m-3 p-3" style={{color :entry.favourite?"red":"gray"}}></i>
            
            </div>
  
  
            <Box component="section" >
              
                <Paper elevation={3} >
                   <div className=" d-flex justify-content-between">
          
         
                  <h6>Date:{entry.date}</h6>
                  
               
          
                   </div>
                    
                   
                    <h5 className='px-3'>Dear Diary,</h5>
                   <div className="px-3" style={{whiteSpace: "pre-wrap", fontSize: "1rem", height:'300px', width:'400px'}}>
                                     {entry.story}
                           </div>
                   
                </Paper>
              </Box>
          </div>
          ))}
          
        </div>
        
     
    </>
  );
}


export default Diary;
