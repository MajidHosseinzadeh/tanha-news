import "./popularNews.css";
import React from "react";
import Controversial from "./Controversial/controversial";
import Comments from "./Comments/comments";

const PopularNews = () => {
    return (
        <div className="popular__news__container">
            <Controversial />
            <Comments/>
            <Comments/>
        </div>
    )
}

export default PopularNews;