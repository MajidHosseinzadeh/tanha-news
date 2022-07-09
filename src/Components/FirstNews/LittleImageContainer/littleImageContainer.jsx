import React from "react";
import './littleImageContainer.css';

const LittleImageContainer = () => {
    const containerProperties =
    {
        url: "https://i.ibb.co/M52kg0D/lorem.png",
        caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
        date: "۱۴۰۱ فروردین"
    };

    return (
        <div className="little__big__div">
            <img src={containerProperties.url} />
            <h4>{containerProperties.caption}</h4>
            <div className="bottom__div">
                <div className="author__date">
                <h6>{containerProperties.date}</h6>
                </div>
                <a href="#">...ادامه مطلب</a>
            </div>
        </div>
    )
}

export default LittleImageContainer;