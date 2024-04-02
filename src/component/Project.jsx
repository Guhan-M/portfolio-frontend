import React, { useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Project() {  
 let[data,setdata]=useState({project:[]})
 const[project,setProject]=useState([])

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
        if (res.projects && res.projects.length > 0) {
          setProject(res.projects);
        }
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);
  
  console.log("Data:", project); // Check the data fetched

  return <>
    <h2  style={{ textAlign: "center",marginTop:"4%" }}><span style={{ color: "rgb(70, 111, 238)" }}>P</span>roject</h2>
   <div className="container poppins-thin projectdivsetup">
   <Card className="projectdisplaybox" style={{ width: '20rem',textAlign:"center"}}>
      <Card.Img variant="top"
       src="https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <button className="projectdisplayboxbutton2">Visit live webiste<KeyboardArrowRightIcon/></button>
        <button className="projectdisplayboxbutton2">Github<KeyboardArrowRightIcon/></button>
        </div>
      </Card.Body>
    </Card>

    <Card className="projectdisplaybox" style={{ width: '20rem',textAlign:"center",}}>
      <Card.Img variant="top"
       src="https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <button className="projectdisplayboxbutton2">Visit live webiste<KeyboardArrowRightIcon/></button>
        <button className="projectdisplayboxbutton2">Github<KeyboardArrowRightIcon/></button>
        </div>
      </Card.Body>
    </Card>

    <Card className="projectdisplaybox" style={{ width: '20rem',textAlign:"center"}}>
      <Card.Img variant="top"
       src="https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <button className="projectdisplayboxbutton2">Visit live webiste<KeyboardArrowRightIcon/></button>
        <button className="projectdisplayboxbutton2">Github<KeyboardArrowRightIcon/></button>
        </div>
      </Card.Body>
    </Card>
    <Card className="projectdisplaybox" style={{ width: '20rem',textAlign:"center"}}>
      <Card.Img variant="top"
       src="https://thumbs.dreamstime.com/b/transparent-pattern-background-simulation-alpha-channel-png-seamless-gray-white-squares-vector-design-grid-162521286.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <button className="projectdisplayboxbutton2">Visit live webiste<KeyboardArrowRightIcon/></button>
        <button className="projectdisplayboxbutton2">Github<KeyboardArrowRightIcon/></button>
        </div>
      </Card.Body>
    </Card>
    </div>
  </>
}

export default Project