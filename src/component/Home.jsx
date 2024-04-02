import React,{useContext} from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { UserContext } from '../utils/UserContex';
import resume from "../assets/GUHAN M.pdf"
function Home() {
 const data= useContext(UserContext)

 function handleClickdata(name){
  data.setSelectContent(name)
 }
  return <>
  <div className='body1'>
  <div  className='body11'>
    <div className='poppins-thin'>
      <div className='bodymaincontent'>
        <h2 style={{fontSize:"60px"}} ><b>Hi, I am Guhan</b></h2>
      <h3>Mern Stack Developer</h3>
      </div>
      
      <div style={{fontWeight:"400", marginTop:"8px"}} className='bodyspancontent'>
      <span>Front End Developer | </span>
      <span>Back End Developer  | </span> <br/>
      <span>Full stact developer(Mern)</span></div>  
      <div style={{display:"flex"}} className='bodyButtonContactHead'>
        <button className='bodyButtonContact' style={{marginRight:"5%"}} onClick={()=>{handleClickdata("Contact")}}>Contact Me <EmailOutlinedIcon style={{marginLeft:"5px"}}/></button>
        <a href={resume} download="Guhan.pdf" style={{textDecoration:"none"}}>
        <button className='bodyButtonContact'>Download CV <CloudDownloadIcon style={{marginLeft:"5px"}}/></button>
        </a>
      </div>
      </div>  
  <img className='body12image' src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" alt="Image" />
 </div>
 </div>
  </>
}

export default Home