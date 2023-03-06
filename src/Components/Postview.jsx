import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import './Postview.css';
let Postview =()=>{
  let [state,setstate] = useState({ 
    posts :[
        {       name:"Siva",
                location:"Bengaluru",
                likes:64,
                description: "Kick start your career",
                PostImage: "./images/10x.jpg",
                date: new Date(),
        }  ,
        {name:"Neeraj",
                location:"Pune",
                    likes:30,
                    description: "Sample Description",
                    PostImage: "./images/nature.jpg",
                    date: new Date(),
},
        {name:"Rahul",
                    location:"Hyderabad",
                    likes:30,
                    description: "Sample Description for Post",
                    PostImage: "./images/flight.jpg",
                    date: new Date(),
}

    ]
  }) 
    return(
        <div>
            {
               state.posts.map((post,id)=>{
                return(
                   <Card post={post} key={id} />

                )

                })
            }
            
            

        </div>
    )
}
export default Postview