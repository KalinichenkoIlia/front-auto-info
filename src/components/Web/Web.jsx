import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Web/Web.modules.css'


function Web() {
    const tg = window.Telegram.WebApp
    console.log(tg, 'tg')
    return (
        <>
            kyyujtgjgh
            <div className={styles.wrapper} key={tg.initDataUnsafe?.user} >{tg.initDataUnsafe?.user?.username}</div>
            <div className={styles.wrapper} key={tg.initData.id}>{tg.initDataUnsafe?.user?.id}</div>

        </>
    );
}


export default Web;
