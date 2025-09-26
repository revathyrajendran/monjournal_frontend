import React, { useState } from 'react';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const created = (e) => {
    e.preventDefault();

    const name = document.getElementById("Signupname").value;
    const email = document.getElementById("Signupemail").value;
    const pass = document.getElementById("Signuppass").value;

    let existingUsers = JSON.parse(localStorage.getItem("users")) || {}; // ✅ Always get object

    if (existingUsers[email]) {
      alert('Looks like you already have a diary 📔👀❗. Log in to create today’s page 📖.');
    } else {
      existingUsers[email] = { name, password: pass };

      localStorage.setItem("users", JSON.stringify(existingUsers));

      // ✅ Save logged-in user after signup
      localStorage.setItem("loggedInUser", email);

      alert('Your diary is ready! 📔 Begin your journey and capture your first memory today. ❤️');
      setShowSignup(false);
      setShowLogin(true);
    }
  };

  const logind = (e) => {
    e.preventDefault();

    const email = document.getElementById("loginemail").value;
    const pass = document.getElementById("loginpassword").value;

    let existingUsers = JSON.parse(localStorage.getItem("users")) || {};

    if (!existingUsers[email]) {
      alert('Looks like you have not created a diary yet 👀❗. Create one to get started!');
    } else if (existingUsers[email].password !== pass) {
      alert('Oops! That key doesn’t fit your diary. Try again carefully. 🔑📔');
    } else {
      localStorage.setItem("loggedInUser", email); // ✅ Track logged-in user
      alert('🔓 Your diary is unlocked! Start writing your next page.');
      window.location = '/write';
    }
  };

  return (
    <>    
         <div >
          <section style={{backgroundImage:"url('https://www.writediary.com/static/writediary/gfx/diarywriting.jpg') ", backgroundPosition : 'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', width:'100%', height:'100vh ', overflowX:'hidden', overflowY:'hidden'}}>

          <div>
           <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                 <p className=' shadow p-3 text-dark fw-semibold  ' style={{marginTop:'180px'}}>Each page holds a story  of happiness, gratitude, struggle, sorrow, and secret whispers✨.Come in, lock your thoughts, read them back, and treasure every memory 🔒📔.
            <br /> Your journey, beautifully safe and forever yours ❤️.</p>

             <div className='d-flex justify-content-between'>
              <button onClick={()=>(setShowSignup(false) ,setShowLogin(true))} className="button btn-info btn p-3">Login</button>
              <button onClick={()=>(setShowLogin(false),setShowSignup(true))} className="button btn-success btn p-3">Sign Up</button>

             </div>

              </div>
              <div className="col-md-4"></div>
            </div>
           </div>
          </div>

          </section>
              
         </div>

         <div >
          <div className="row ">
            <div className="col-md-4 login p-3"></div>
            <div className="col-md-4 login p-3">

            {showLogin && (
          <form className='text-center border border-dark border-2 ' >
           <br /><input className='m-2' id='loginemail' type="text" placeholder='Enter your email id !' />
           <br /> <input className='m-2' id='loginpassword' type="password" placeholder='Enter your password  !' />
           <br /> <button onClick={(e)=>(logind(e))} className="btn btn-primary m-4 p-3">Unlock My diary</button>
          </form>
         )}


          {showSignup && (
          <form id='Signup' className='text-center border border-dark border-2' >
            <input className='m-2' id='Signupname' type="text" placeholder='Enter your name !' />
           <br /> <input className='m-2' id='Signupemail'  type="text" placeholder='Enter your email id !' />
           <br /> <input className='m-2' id='Signuppass'  type="password" placeholder='Create your password  !' />
           <br /> <button  onClick={(e)=>(created(e))} className="btn btn-primary m-4 p-3">Create My Diary</button>
          </form>
         )}

            </div>
            <div className="col-md-4 login"></div>
          </div>
         </div>
        
        


    </>
  )
}

export default Home