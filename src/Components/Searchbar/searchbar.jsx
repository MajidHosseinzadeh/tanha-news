import React from "react";
import './searchbar.css';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import {ImWhatsapp} from 'react-icons/im';
import {GrSend} from 'react-icons/gr';
import {GiHamburgerMenu} from 'react-icons/gi';

function Searchbar() {
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
    };


    return (
        <div className="searchbar__container">
            <div className="search__contact">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <button type="submit" className="search__button"><BsSearch id="searchIcon"/></button>
                    <input type="text" id="searchInput" value={searchInput}
                        onChange={event => setSearchInput(event.target.value)}
                        name="searchInput" placeholder="محل جست و جو شما" className="search__input"
                        autoComplete="off" />
                </form>
                <ul>
                    <li className="contact">
                        <a href="#whts"><ImWhatsapp id="whts"/></a>
                        <a href="#send"><GrSend id="send"/></a>
                    </li>
                </ul>
            </div>
            <div className="menu">
                <a href="#">
                <GiHamburgerMenu id="menuIcon"/>
                </a>
            </div>
        </div>

    );
}

export default Searchbar;