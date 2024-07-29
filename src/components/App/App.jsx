import React, {useEffect, useState} from "react";
import style from '../../styles/App/App.modules.css'

const tg = window.Telegram.WebApp

function App() {
    return (
        <div>
            ky
            <span className={style.wrapper}>{tg.initDataUnsafe?.user?.username}</span>
            <span className={style.wrapper}>{tg.initDataUnsafe?.user?.id}</span>
            <span className={style.wrapper}>{tg.initDataUnsafe?.user?.id}</span>
            <span className={style.wrapper}>{tg.initDataUnsafe?.user}</span>
        </div>
    );
}


export default App;
