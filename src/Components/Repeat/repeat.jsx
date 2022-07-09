import "./repeat.css";
import React from "react";

const Repeat = () => {
    const repeatProperties =
    {
        id: 1,
        url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
        caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
        date: "۱۴۰۱ فروردین"
    }

    return (
        <div className="controversial__objects__container">
            <div className="controversial__props__container">
                <div className="controversial__detail">
                    <h4>{repeatProperties.caption}</h4>
                    <h5>{repeatProperties.date}</h5>
                </div>
                <div className="controversial__img">
                    <img src={repeatProperties.url} alt="lorem" />
                </div>
            </div>
        </div>
    )
}

export default Repeat;