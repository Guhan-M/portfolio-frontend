import React, { useContext } from 'react'
import TopBar from './component/TopBar'
import Skills from './component/Skillls.jsx'
import Home from './component/Home'
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer';
import {UserContext} from './utils/UserContex.jsx'
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let content=useContext(UserContext)
  const Homeref= useRef()
  const Serviceref= useRef()
  const Contactref= useRef()
  const Projectref= useRef()

if(content.selectContent=="Project"){
  Projectref.current?.scrollIntoView({behavior:"smooth"})
 }else if(content.selectContent=="Home"){
  Homeref.current?.scrollIntoView({behavior:"smooth"})
 }else if(content.selectContent=="Contact"){
  Contactref.current?.scrollIntoView({behavior:"smooth"})
 } else if(content.selectContent=="Skills"){
  Serviceref.current?.scrollIntoView({behavior:"smooth"})
 }

 
return <>
  <div style={{height:"40px"}}><TopBar/></div>
  <div ref={Homeref}><Home/></div>
  <div ref={Serviceref}><Skills/></div>
  <div ref={Projectref}><Project/></div>
  <div ref={Contactref}><Contact/></div>
  <div><Footer/></div>
  </>
}
export default App