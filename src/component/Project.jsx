import React, { useEffect, useState,useContext} from "react";
import Card from 'react-bootstrap/Card';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from "../utils/UserContex";

function Project() {  
  const dataskills= useContext(UserContext)
  const projectdata= dataskills.projects
 const[project,setProject]=useState([])
 const [isloading,setIsloading]=useState(false)

 useEffect(() => {
  setIsloading(true)
  setProject(projectdata)
  setIsloading(false)
}, []);

  
  // console.log("Data:", project); // Check the data fetched

  return <>
    <h2  style={{ textAlign: "center",marginTop:"4%" }}><span style={{ color: "rgb(70, 111, 238)" }}>P</span>roject</h2>
   <div className="container poppins-thin projectdivsetup">
   {isloading? <b style={{height:"30vh",marginTop:"3%"}}><CircularProgress/></b>:null}
    {project.map((e,i)=>{
      return <Card  key={i} className="projectdisplaybox" style={{ width: '20rem',textAlign:"center"}}>
      <Card.Img variant="top"
       src={e.imageproject}/>
      <Card.Body>
        <Card.Title className="projecthead" style={{fontWeight:"700"}}>{e.Name}</Card.Title>
        <Card.Text className="projectcontent" style={{color:"rgb(123, 158, 253)",fontWeight:"500"}}>{e.content}</Card.Text>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
          <a href={e.hostlink} target="blank" style={{textDecoration:"none"}}>
           <button className="projectdisplayboxbutton2">Visit live webiste<KeyboardArrowRightIcon/></button> </a>
           <a href={e.gitlink} target="blank" style={{textDecoration:"none"}}>
          <button className="projectdisplayboxbutton2">Github<KeyboardArrowRightIcon/></button></a>
        </div>
      </Card.Body>
    </Card>
    })}
   
    </div>
  </>
}
export default Project