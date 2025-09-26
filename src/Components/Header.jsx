import React from 'react'
import { GiSecretBook } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
       <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div  className="container-fluid" id='navmain'>
    <div className='d-flex'>
      <GiSecretBook style={{margin:'3px'}} size={'30px'} />
      <h4 className="fw-bold fs-medium" ><span id='title1'>Mon</span><span id='title2'>Journal</span></h4>
    </div>

    <div className='ms-auto'>
      <Link to={''} className=' navlink' >Home</Link>
      

    </div>
   
    
  </div>
</nav>
       
    </>
  )
}

export default Header