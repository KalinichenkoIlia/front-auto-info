import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Header/Header.modules.css'

function Header() {
    let tg = window.Telegram.WebApp
    return (
        <header className={styles.headerBlock}>
            <nav key={tg.initDataUnsafe?.user?.id}>
                  {tg.initDataUnsafe?.user?.first_name} ,{tg.initDataUnsafe?.user?.last_name}
            </nav>
        </header>
    );
}


export default Header;
