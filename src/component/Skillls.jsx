import React, { useEffect, useState, useContext } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { UserContext } from "../utils/UserContex";
import CircularProgress from '@mui/material/CircularProgress';

function Skills() {
 const dataskills= useContext(UserContext)
 let qualifications=dataskills.qualification
  const [data, setData] = useState({ skills: [], projects: [] });
  const [skills, setSkills] = useState([]); // Initialize skills as an empty array
  const [isloading,setIsloading]=useState(false)

  useEffect(() => {
    setIsloading(true)
    fetch("https://portfolio-backend-z9ls.onrender.com/")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (res.skills && res.skills.length > 0) {
          setSkills(res.skills);
          setIsloading(false)
        }
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  // console.log("Data:", data); // Check the data fetched

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
        </div>
      </div>
    </>
  );
}
export default Skills;
