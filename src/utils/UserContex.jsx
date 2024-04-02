import React,{useState} from 'react'
export const UserContext = React.createContext(null) 

function UserContex({children}) {
  let [selectContent,setSelectContent]=useState("Home")
  let qualification=[
    {
      name:"MERN Full Stack Development",
      content:"Guvi Geek Network, IIT, Madras",
      year:"2023",
      view:true
    },
    {
      name:"Bachelor of Computer Science",
      content:"Vels University, Pallavarm",
      year:"2020 - 2023",
      view:false
    },
    {
      name:"HSE",
      content:"Government Hr, Sec, School",
      year:"2018 - 2020",
      view:true
    },
    {
      name:"SSLC",
      content:"Government Hr, Sec, School",
      year:"2017 - 2018",
      view:false
    }
  ]
  
  return <>
  <UserContext.Provider value={{selectContent,setSelectContent,qualification}}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserContex