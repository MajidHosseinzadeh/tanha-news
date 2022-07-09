import React from "react";
import "./ads.css";

const Ads = () => {
    const adsProperties = {
        first: "https://i.ibb.co/C1pNwSf/image-7313feb3a252ba25aff5.png",
        second: "https://i.ibb.co/jWKpHq1/Ad1-3d6e48bb30ff5776cfa7.png"
    }
    return (
        <div className="ads__big__container">
            <div className="ads__container">
                <img src={adsProperties.first} alt="alt" />
                <img src={adsProperties.second} alt="alt" />
            </div>
        </div>
    );
}

export default Ads;