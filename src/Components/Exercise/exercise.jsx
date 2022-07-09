import React from 'react';
import "./exercise.css";

function Exercise() {
    const exerciseProperties =
    {
        id: 1,
        url: "https://tanha-news.netlify.app/static/media/wideNewsImage.56db9ff1594a486b2c4e.png",
        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
        caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        date: "۱۴۰۱ فروردین"
    }

    return (
        <div className="exercise__objects__container">
            <div className="exercise__props__container">
                <div className="exercise__detail">
                    <h2>{exerciseProperties.title}</h2>
                    <h4>{exerciseProperties.caption}</h4>
                    <h5>{exerciseProperties.date}</h5>
                </div>
                <div className="exercise__img">
                    <img src={exerciseProperties.url} alt="lorem" />
                </div>
            </div>
        </div>
    )
}

export default Exercise;