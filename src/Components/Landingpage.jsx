import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Landingpage.css'
let Landingpage = ()=>{
    let navigate = useNavigate()
    return(
        <div className="landing-page">
           <div className="landing">
           <img src="https://media-exp1.licdn.com/dms/image/C4D22AQEzuGuKgJ2ncw/feedshare-shrink_800/0/1655560740457?e=2147483647&v=beta&t=AKdF6w7GmG4rLl82DcpAThL0rywhvu1MRR2MxCFD1uc" alt= "10xacademyimage"  />
           </div>
           <div className="box">
            <h1>10x Team</h1>
            <button onClick={()=>{navigate('postview')}}>Enter</button> 
           {/*  <button><Link to="/postview">Enter</Link></button> */}

           </div>


        </div>
    )
}
export default Landingpage