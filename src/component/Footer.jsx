import React,{useContext} from 'react'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { UserContext } from '../utils/UserContex';
function Footer() {
  let content=useContext(UserContext)

  function selectcontent(value){
    content.setSelectContent(value)
  }
  return <>
  <div className='Footer1'>
    <ul className='footer12'>
      <li className='footer121' onClick={()=>selectcontent("Home")}>Home</li>
      <li className='footer122'onClick={()=>selectcontent("Skills")}>Skills</li>
      <li className='footer123'onClick={()=>selectcontent("Project")}>Projects</li>
    </ul>
    {/* <div className='footer13' >
    <a href='' style={{color:"aliceblue"}} className='footer131'><LinkedInIcon fontSize='medium'/></a>
    <a href='' style={{color:"aliceblue"}} className='footer132'><GitHubIcon fontSize='medium'/></a>
  </div> */}
  <span  style={{color:"black", fontSize:"large"}}>@Compyright Guhan || All rights reserved</span>
  </div>
  
   </>
}

export default Footer