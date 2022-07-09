import FirstNews from "./Components/FirstNews/firstNews";
import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Searchbar from "./Components/Searchbar/searchbar";
import './App.css'
import ImgCarousel from "./Components/ImageCarousel/imgCarousel";
import PopularNews from "./Components/PopularNews/popularNews";
import Ads from "./Components/Ads/ads";
import SecondNews from "./Components/SecondNews/secondNews";
import NewsPaper from "./Components/NewsPaper/newsPaper";
import Gallery from "./Components/Gallery/gallery";
import Exercise from "./Components/Exercise/exercise";
import LastNews from "./Components/LastNews/lastNews";
import EmailBox from "./Components/EmailBox/emailBox";
import Footer from "./Components/Footer/footer";


function App() {
    return(
            <div>
                <Searchbar/>
                <Navbar/>
                <FirstNews/>
                <br/><br/>
                <ImgCarousel/>
                <br/><br/>
                <PopularNews/>
                <br/><br/>
                <Ads/>
                <br/><br/>
                <SecondNews/>
                <NewsPaper/>
                <Gallery/>
                <br/><br/>
                <Exercise/>
                <br/><br/>
                <Exercise/>
                <br/><br/>
                <Exercise/>
                <br/><br/>
                <Exercise/>
                <br/><br/>
                <Exercise/>
                <br/><br/>
                <LastNews/>
                <br/><br/>
                <br/><br/>
                <center>
                <EmailBox/>
                </center>
                <Footer/>
            </div>
    );
}

export default App;