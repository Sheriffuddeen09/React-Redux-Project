import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { getMessage } from "../api/apiSlice";

function Layout (){

    const [chatme, setChatme] = useState([])
  const [chatMessages] = useState(JSON.parse(localStorage.getItem('chatlist')) || [])


  
  useEffect(() =>{

    getMessage().then(json =>{
      setChatme(json)
      return json
    })
  },[])
   

    return (
        <div>
            <Header chatme={chatme} length={chatMessages.length}/>
            <Outlet />
        </div>
    )
}

export default Layout