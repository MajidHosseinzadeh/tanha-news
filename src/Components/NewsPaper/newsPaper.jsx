import React from 'react';
import EmailBox from '../EmailBox/emailBox';
import Repeat from '../Repeat/repeat';
import "./newsPaper.css";

function NewsPaper() {
    return (
        <div className='news__paper__container'>
            <EmailBox />
            <div className='repeat__container'>
                <Repeat />
                <Repeat />
                <Repeat />
                <Repeat />
            </div>
        </div>
    );
}

export default NewsPaper;