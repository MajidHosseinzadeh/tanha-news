import React from "react";
import "./emailBox.css";

const EmailBox = () => {
    return(
        <div className="email__container">
            <h1>خبرنامه</h1>
            <br />
            <h4>برای مطلع شدن از آخرین اخبار ایمیل خود را وارد نمایید</h4>
            <br />
            <input type="text" className="email__input" placeholder="پست الکترونیکی خود را وارد نمایید"/>
            <br />
            <button className="submit__button">عضویت</button>
        </div>
    )
}

export default EmailBox;