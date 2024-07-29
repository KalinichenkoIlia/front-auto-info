import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Web/Web.modules.css'


function Web() {
    const tg = window.Telegram.WebApp
    console.log(tg, 'tg')
    return (
        <>

            <div className={styles.wrapper} key={tg.initDataUnsafe?.user} >{tg.initDataUnsafe?.user?.username}</div>
            <div className={styles.wrapper} key={tg.initDataUnsafe?.user?.id}>{tg.initDataUnsafe?.user?.id}</div>
            <img src={tg.initDataUnsafe?.user?.photo}/>
        </>
    );
}


export default Web;
