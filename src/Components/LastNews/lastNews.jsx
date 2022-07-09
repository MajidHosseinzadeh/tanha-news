import React from 'react';
import ImageContainer from '../FirstNews/ImageContiner/imageContainer';
import LittleImageContainer from '../FirstNews/LittleImageContainer/littleImageContainer';
import Repeat from '../Repeat/repeat';
import "./lastNews.css"

function LastNews() {
    return ( 
        <div className="last__news__container">
            <div className='last__repeat__container'>
            <Repeat/>
            <Repeat/>
            <Repeat/>
            <Repeat/>
            <Repeat/>
            </div>
            <div className="last__little__image">
                <LittleImageContainer/>
                <LittleImageContainer/>
            </div>
            
            <ImageContainer className="last__image__container" />
        </div>
     );
}

export default LastNews;