import React, { useEffect, useState, useContext } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { UserContext } from "../utils/UserContex";
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from 'react-bootstrap/Carousel';

function Skills() {
 const dataskills= useContext(UserContext)
 let qualifications=dataskills.qualification
 let skillsdata = dataskills.skills
 let cerficate = dataskills.cerficate

  const [skills, setSkills] = useState([]); // Initialize skills as an empty array
  const [isloading,setIsloading]=useState(false)
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsloading(true)
    setSkills(skillsdata)
    setIsloading(false)
  }, []);


  // console.log("Data:", cerficate); // Check the data fetched

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          className="poppins-thin"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <h1>
            <span style={{ color: "rgb(70, 111, 238)" }}>S</span>kills
          </h1>
          <div className="bodyskills" style={{marginTop:"4%"}}>
            {isloading? <b><CircularProgress/></b>:null}
            {skills.map((skill) => (
              <div key={skill.id} >
                <button className="skillsbuttonview">{skill.name}</button>
              </div>
            ))}
            </div>
            <div  className="qualificationviesonwidth" >
              <h2  style={{ textAlign: "center" }}><span style={{ color: "rgb(70, 111, 238)" }}>Q</span>ualification</h2>
              {qualifications.map((e, i) => {
              return (
                <div
                  key={i}
                  className="qualification-container"
                  style={{
                    flexDirection: e.view ? "row" : "row-reverse"
                  }}
                >
                  <div className="qualificationfinalvalue" >
                      <div style={{ width: "40%", marginLeft: e.view? "45%":"10%" }}>
                      <b>{e.name}</b>
                      <p style={{ fontSize: "90%", fontWeight: "300" }}>
                        {e.content}
                      </p>
                      <div
                        style={{
                          fontSize: "90%",
                          fontWeight: "300",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ marginTop: "1px", marginRight: "5px" }}>
                          <CalendarMonthIcon fontSize="small" />
                        </div>
                        {e.year}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="qualificatondot"></div>
                    <div className="qualificatonline"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="certificatewidth">
   <h2 style={{ textAlign: "center" }}>
    <span style={{ color: "rgb(70, 111, 238)" }}>C</span>ertificates
  </h2>
  {selectedImage && (
    <div
      onClick={() => setSelectedImage(null)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        cursor: "zoom-out",
      }}
    >
      <img
        src={selectedImage}
        alt="Certificate"
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
        }}
      />
    </div>
  )}
   <Carousel data-bs-theme="dark">
   {cerficate.map((e, i) => (
      <Carousel.Item>
          <div key={i} style={{marginTop:"5%",padding:"20px"}}>
            <img
              src={e.image}
              alt={e.name}
              className="certificate-img"
             style={{height:"70vh",padding:"10px",cursor: "zoom-in"}}
             onClick={() => setSelectedImage(e.image)}
             />
          </div>
      </Carousel.Item>
          ))}
      </Carousel>

     
</div>
        </div>
      </div>
    </>
  );
}
export default Skills;
