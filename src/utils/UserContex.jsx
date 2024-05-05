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
  let projects =[
    
    {
      id: "1",
      Name: "Resume Builder",
      content: "Implement the Resume Builder functionality using the MERN stack",
      gitlink: "https://github.com/Guhan-M/Resume-Builder-Frontend",
      hostlink: "https://resumebuildergm.netlify.app/",
      imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/Resume%20Builder"
    },
    {
      id: "2",
      Name: "Admin page",
      content: "CRUD operator using react axios",
      gitlink: "https://github.com/Guhan-M/AdminPage",
      hostlink: "https://vermillion-hamster-c88476.netlify.app/",
      imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/Admin%20page%20api"
    },
    {
      id: "3",
      Name: "Blog app",
      content: "CRUD operator using react axios",
      gitlink: "https://github.com/Guhan-M/BlogApp",
      hostlink: "https://gblogapp.netlify.app/",
      imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/Blogapp"
    },
    {
      id: "4",
      Name: "To-do app",
      content: "Todo App which have All CRUD Functionalities ",
      gitlink: "https://github.com/Guhan-M/To-do",
      hostlink: "https://extraordinary-manatee-78be91.netlify.app/",
      imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/To-do%20app"
    },
    {
      id: "5",
      Name: "Cart page",
      content: "Cart page use react redux",
      gitlink: "https://github.com/Guhan-M/useRedux-Cartpage",
      hostlink: "https://usereduxcartpage.netlify.app/",
      imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/cart%20page%20redux"
    },
    // {
    //   id: "6",
    //   Name: "Landing page",
    //   content: "Using react with Multiple reusable components",
    //   gitlink: "https://github.com/Guhan-M/Landing-page",
    //   hostlink: "https://teal-stroopwafel-25d2c9.netlify.app/",
    //   imageproject: "https://res.cloudinary.com/dzzetnwic/image/upload/f_auto,q_auto/LandingPage"
    // }
  ]
  let skills =[
    {
    id: "1",
    name: "HTML"
    },
    {
      id:"2",
      name:"CSS"
    },
    {
      id:"3",
      name:"JavaScript"
    },
    {
      id:"4",
      name:"Git"
    },
    {
      id:"5",
      name:"Mongo DB"
    },
    {
      id:"6",
      name:"MYSQL"
    },
    {
      id:"7",
      name:"Node Js"
    },
    {
      id:"8",
      name:"Express JS"
    },
    {
      id:"9",
      name:"Postman"
    }
  ]

  return <>
  <UserContext.Provider value={{selectContent,setSelectContent,qualification,projects,skills}}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserContex