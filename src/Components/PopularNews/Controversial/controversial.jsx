import "./controversial.css";
import React from "react";

const Controversial = () => {
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
        },
        {
            id: 3,
            url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 4,
            url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 5,
            url: "https://i.ibb.co/g9vvtCw/small-Image-c2a9d328b8f1f50ec56f.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        }
    ]
    return (
        <div className="big__big__container">
            <div className="controversial__container">
                <div className="controversial__category">
                    <a href="#">پر بحث ترین ها</a>
                </div>
                <div className="controversial__category">
                    <a href="#">آخرین نظرات</a>
                </div>
            </div>
            <div className="controversial__objects__container">
                {controversialProperties.map((controversialObjects) => {
                    return (
                        <div className="controversial__props__container">

                            <div className="controversial__detail">
                                <h4>{controversialObjects.caption}</h4>
                                <h5>{controversialObjects.date}</h5>
                            </div>
                            <div className="controversial__img">
                                <img src={controversialObjects.url} alt="lorem" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Controversial;