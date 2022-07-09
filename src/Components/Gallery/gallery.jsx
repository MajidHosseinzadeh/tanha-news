import React from 'react';
import "./gallery.css";

function Gallery() {
    return (
        <div className='gallery__big__container'>
            <h1 className='gallery__h1'>گالری عکس</h1>
            <div className='gallery__container'>
                <div className='four__item__gallery'>
                    <img src="https://i.ibb.co/vwKMq6g/img-095a0adcb076a85081c0.png" alt="basket" />
                    <img src="https://i.ibb.co/vwKMq6g/img-095a0adcb076a85081c0.png" alt="basket" />
                    <img src="https://i.ibb.co/vwKMq6g/img-095a0adcb076a85081c0.png" alt="basket" />
                    <img src="https://i.ibb.co/vwKMq6g/img-095a0adcb076a85081c0.png" alt="basket" />
                </div>
                <div className='one__item__gallery'>
                    <img src="https://i.ibb.co/98xpgZq/video.png" alt="st" />
                </div>
            </div>
            <a href="#" className='view__more'>مشاهده همه</a>
        </div>
    );
}

export default Gallery;