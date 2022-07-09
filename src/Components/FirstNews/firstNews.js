import VideoCarousel from "../VideoCarousel/videoCarousel";
import React from "react";
import ImageContainer from "./ImageContiner/imageContainer";
import './firstNews.css'
import LittleImageContainer from "./LittleImageContainer/littleImageContainer";


function FirstNews() {
    return (
        <div className="news__container">

            <VideoCarousel/>
            <div className="little__image">
                <LittleImageContainer />
                <LittleImageContainer />
            </div>
            
            <ImageContainer className="image__container" />
        </div>
    );
}

export default FirstNews;