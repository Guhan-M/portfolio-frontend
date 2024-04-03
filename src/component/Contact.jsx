import React, { useEffect, useRef, useState } from 'react'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ToastContainer, toast } from 'react-toastify';
import  validator  from 'validator';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
const [emailerror,setEmailError]=useState(false)
const [alertshown,setAlertShown]=useState(false)
const nameref=useRef()
const emailref=useRef()
const contentref=useRef()

function fetchthedata(name,email,content){
  if(!email||!name){
    alert("Name or Email is in-valid")
  }
  else if(!validator.isEmail(email)){
      setEmailError(true)
    }
  else {
    fetch(`https://portfolio-backend-z9ls.onrender.com/createlinkcontact`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      email:email,
      content:content
    }) 
  })
  .then((response)=>response.json())
  .then((res)=>{ 
        if(res.success){
      try{
        toast("Data submited")
        console.log("Data success")
      }
      catch(error){
        console.log("error in fetch",error)
      }
    }
  })
  .catch((error)=>{console.log(error)})
  }
}
function handlesubmit(e){
  e.preventDefault();
  const name=nameref.current.value
  const email=emailref.current.value
  const content=contentref.current.value
  fetchthedata(name,email,content)
  nameref.current.value=""
  emailref.current.value=""
  contentref.current.value=""
}
  useEffect(()=>{
    if(emailerror && ! alertshown){
      alert("Please provide a valid email")
      setAlertShown(true)
    } 
  },[emailerror,alertshown])




  return <>
  <div className='contactstyle'>
  <h2  style={{ textAlign: "center",marginBottom:"0%" }}>
  <span style={{ color: "rgb(70, 111, 238)" }}>C</span>ontact 
  <span style={{ color: "rgb(70, 111, 238)" }}> M</span>e
  </h2>
  <p style={{ textAlign: "center",marginBottom:"3%", marginRight:"1%" }}>Get in touch</p>
  
  <div className='container poppins-thin contactview'>

    <div className='contactviewchildren'>
    <div className='mailoutlineclass'>
    <span style={{padding:"4px",margin:"2px"}}><MailOutlinedIcon fontSize='large'/></span>
    <div style={{display:"flex",flexDirection:"column"}}>
    <p style={{margin:"0px",fontWeight:"500"}}>Email</p>
    <a  className='linkeninstylecontact' 
    href="mailto:guhan76guhan@gmail.com" >guhan76guhan@gmail.com</a>
    </div>
    </div>

    <div className='linkedinoutlineclass'>
    <span style={{padding:"4px",margin:"2px"}}><LinkedInIcon  fontSize='large'/></span>
    <div style={{display:"flex",flexDirection:"column"}}>
    <p style={{margin:"0px",fontWeight:"500"}}>Linked in</p>
    <a className='linkeninstylecontact' 
     href="https://www.linkedin.com/in/guhan-m-42029b25a/"target='blank'>Guhan M</a>
    </div>
    </div>

   

    <div className='linkedinoutlineclass'>
    <span style={{padding:"4px",margin:"2px"}}><GitHubIcon  fontSize='large'/></span>
    <div style={{display:"flex",flexDirection:"column"}}>
    <p style={{margin:"0px",fontWeight:"500"}}>GitHub</p>
    <a className='linkeninstylecontact' 
     href="https://github.com/Guhan-M/"target='blank'>github.com/Guhan-M</a>
    </div>
    </div>

    <div className='locationoutlineclass'>
    <span style={{padding:"4px",margin:"2px"}}><LocationOnIcon  fontSize='large'/></span>
    <p style={{marginTop:"10px",padding:"2px",fontWeight:"500"}}>Chennai, TN</p>
    </div>

    </div>



    <div className='inputfieldmail'>
    <form >
    <div style={{marginBottom:"6%",marginTop:"6%"}} >
    <div className="headinginputfield">Your Name</div>
    <input ref={nameref} className="headinginputfieldchild" style={{ width: '28ch' }}></input>
    </div>
    
    <div style={{marginBottom:"2%",marginTop:"2%"}}  >
    <div className="headinginputfield">Your Email</div>
    <input ref={emailref} className="headinginputfieldchild" style={{ width: '28ch' }}></input>
    </div>  

    <div style={{marginBottom:"2%",marginTop:"2%"}}>
    <div className="headinginputfield"> Your Message</div>
    <textarea className="textareainputfield"  name="" id="" cols="0" rows="2" ref={contentref}></textarea>
    </div>
    <div style={{display:'flex',justifyContent:"center"}}>
    <button onClick={handlesubmit}className="contactsumbitbutton" type='submit'>Submit</button>
    <ToastContainer />
    </div>
    </form>
    </div>
    </div>
    </div>
  </>
}

export default Contact