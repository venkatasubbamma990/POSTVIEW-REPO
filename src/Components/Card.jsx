import React from "react";
import './Crad.css'
let Card = ({post}) =>{
    return(
        <div className="card-container">
           <section className="card-header">
            <div >
            <div>{post.name}</div>
            <div>{post.location}</div>
            </div>
            <div>
                <div><i class="fa-solid fa-ellipsis"></i></div>
            </div>


           </section>
           <section className="card-image">
            <img src={post.PostImage} alt="" />
           </section>
           <section className="card-footer">
            <div id="heart"><i class="fa-regular fa-heart"></i></div>
            <div id="likes">{post.likes}</div>
            <div id="share"><i class="fa-solid fa-share-from-square"></i></div>
            <div id="date"><h4>15/10/2020</h4></div>
           </section>
           <section className="description">
            <h3>{post.description}</h3>
           </section>
        </div>
    )
}
export default Card;