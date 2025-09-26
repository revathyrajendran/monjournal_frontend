import React from 'react'

function Footer() {
  return (
    <>
        <div  id='footer'>
          <div id='footicons' className=' p-5 d-flex justify-content-center  align-items-center'>
            <i  className="fa-brands fa-square-instagram fa-2xl"></i>
            <i  className="fa-brands fa-facebook-f fa-2xl"></i>
            <i  className="fa-brands fa-x-twitter fa-2xl"></i>
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </div>
          
        <div className='text-center '>
            <h5>© 2025 MonJournal</h5>
            <h5 className='mb-3'>Designed by Revathy Rajendran</h5>
        </div>
      </div>
    </>
  )
}

export default Footer