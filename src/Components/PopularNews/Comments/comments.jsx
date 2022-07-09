import React from "react";
import "./comments.css";

const Comments = () => {
    const commentProperties = {
        url: "https://i.ibb.co/98xpgZq/video.png",
        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
        genre: "دسته بندی",
        date: "فروردین ۱۴۰۱",
        caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
    };
    const controversialProperties = [
        {
            id: 1,
            url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 2,
            url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        }
    ]
    return (
        <div className="comments__big__container">
            <div className="comments__container">
                <img src={commentProperties.url} className="comments__imgg" />
                <h2>{commentProperties.title}</h2>
                <div className="genre__date">
                    <h4 className="comments__genre">{commentProperties.genre}</h4>
                    <h4>{commentProperties.date}</h4>
                </div>
                <h4>{commentProperties.caption}</h4>
            </div>
            <div className="comments__objects__container">
                {controversialProperties.map((controversialObjects) => {
                    return (
                        <div className="comments__props__container">
                            <div className="comments__detail">
                                <h4>{controversialObjects.caption}</h4>
                                <h5>{controversialObjects.date}</h5>
                            </div>
                            <div className="comments__img">
                                <img src={controversialObjects.url} alt="lorem" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Comments;