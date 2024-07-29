import React, {useEffect, useState} from "react";
import style from '../../styles/App/App.modules.css'

const tg = window.Telegram.WebApp

function App() {
    return (
        <div>
        <span>{tg.initDataUnsafe?.user?.username}</span>
            <span>{tg.initDataUnsafe?.user?.id}</span>
            <span>{tg.initDataUnsafe?.user?.id}</span>
            <span>{tg.initDataUnsafe?.user}</span>
        </div>
    );
}


export default App;
