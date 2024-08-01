import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Home/Home.modules.css'
import Profile from "../Profile/Profile";
import Balance from "../Balance/Balance";

function Home() {
    const tg = window.Telegram.WebApp
    tg.expand()
    tg.isVisible = true
    return (
        <>
            <Profile/>
            <Balance/>

        </>
    );
}


export default Home;
