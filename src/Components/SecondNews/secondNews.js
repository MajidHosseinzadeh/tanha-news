import React from "react";
import Economy from "./Economy/economy";
import "./secondNews.css";
import SocialMedia from "./SocialMedia/socialMedia";


function SecondNews(){
    return(
        <div className="second__news">
            <SocialMedia/>
            <Economy/>
        </div>
    )
}

export default SecondNews;