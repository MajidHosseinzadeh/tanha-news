import React from "react";
import './imageContainer.css';

const ImageContainer = () => {
    const containerProperties =
    {
        url: "https://i.ibb.co/g9r1Fvh/modir.png",
        genre: "تکنولوژی",
        title: "استیو جابز",
        caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
        author: "لورم ایپسوم",
        date: "۱۴۰۱ فروردین"
    };

    return (
        <div className="big__div">
            <img src={containerProperties.url} />
            <a href="#" className="genre">{containerProperties.genre}</a>
            <h2>{containerProperties.title}</h2>
            <h4>{containerProperties.caption}</h4>
            <div className="bottom__div">
                <div className="author__date">
                <h6>نویسنده :{containerProperties.author}</h6>
                <h6>{containerProperties.date}</h6>
                </div>
                <a href="#">...ادامه مطلب</a>
            </div>
        </div>
    )
}

export default ImageContainer;