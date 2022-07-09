import React from "react";
import ReactDom from "react-dom"
import './imgCarousel.css';
import Carousel from "react-elastic-carousel";
import item from "./item";

const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];



function ImgCarousel() {
    const carouselProperties = [
        {
            id: 1,
            url: "https://i.ibb.co/g9r1Fvh/modir.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 2,
            url: "https://i.ibb.co/g9r1Fvh/modir.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 3,
            url: "https://i.ibb.co/g9r1Fvh/modir.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        },
        {
            id: 4,
            url: "https://i.ibb.co/g9r1Fvh/modir.png",
            caption: "ای بابا چقدر باید تکست بنویسم خسته شدم",
            date: "۱۴۰۱ فروردین"
        }
    ]
    return (
        <>
            <div className="ImgCarousel">
                <Carousel breakPoints={breakPoints} className="carousel__i" >
                    {carouselProperties.map((carouselObjects) => {
                        return (
                            <item key={carouselObjects.id}>
                                <div className="carousel__container">
                                <div className="carousel__img">
                                    <img src={carouselObjects.url} alt="lorem" />
                                </div>
                                <div className="carousel__detail">
                                    <h4>{carouselObjects.caption}</h4>
                                    <h5>{carouselObjects.date}</h5>
                                </div>
                                </div>
                            </item>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default ImgCarousel;