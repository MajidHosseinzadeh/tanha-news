import React from "react";
import './economy.css';

const Economy = () => {
    const economyProperties =
    {
        url: "https://tanha-news.netlify.app/static/media/wideImage.7992bd2d8b5ddcd383fa.png",
        genre: "دسته بندی",
        title: "استیو جابز",
        caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
        author: "لورم ایپسوم",
        date: "۱۴۰۱ فروردین"
    };

    return (
        <div className="economy__container">
            <h1>اقتصاد</h1>
            <img src={economyProperties.url} />
            <a href="#" className="economy__genre">{economyProperties.genre}</a>
            <h2>{economyProperties.title}</h2>
            <h4>{economyProperties.caption}</h4>
            <div className="economy__bottom__container">
                <div className="economy__author__date">
                <h6>نویسنده :{economyProperties.author}</h6>
                <h6>{economyProperties.date}</h6>
                </div>
                <a href="#">...ادامه مطلب</a>
            </div>
        </div>
    )
}

export default Economy;