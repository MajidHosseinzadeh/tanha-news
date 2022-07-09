import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import './videoCarousel.css'
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoCarousel = () =>{
    const videoProperties = [
        {
            id: 1,
            src: "https://assets.mixkit.co/videos/preview/mixkit-stacked-thin-strips-of-old-weathered-wood-34504-large.mp4",
            title: "لورم ایپسوم",
            credit:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است "
        },
        {
            id: 2,
            src: "https://assets.mixkit.co/videos/preview/mixkit-stacked-thin-strips-of-old-weathered-wood-34504-large.mp4",
            title: "لورم",
            credit: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است "
        },
        {
            id: 3,
            src: "https://assets.mixkit.co/videos/preview/mixkit-stacked-thin-strips-of-old-weathered-wood-34504-large.mp4",
            title: "ایپسوم",
            credit: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "

        },
    ]
    return(
        <div className="videoContainer">
            <h1>محبوب ترین ویدیو ها</h1>
            <Carousel>
                {videoProperties.map((videoObject)=>{
                    return(
                        <Carousel.Item key={videoObject.id}>
                            <ReactPlayer
                            url={videoObject.src}
                            width="100%"
                            pip={true}
                            controls={true}
                            playing={true}
                            />
                            <h2>{videoObject.title}</h2>
                            <h3>{videoObject.credit}</h3>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default VideoCarousel;


