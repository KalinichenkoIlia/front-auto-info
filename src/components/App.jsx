import * as React from "react";
import * as styles from '../styles/App/App.module.css'

const tg = window.Telegram.WebApp

function App() {
    return (
        <div>
            ky
            <span className={styles.wrapper}>{tg.initDataUnsafe?.user?.username}</span>
            <span className={styles.wrapper}>{tg.initDataUnsafe?.user?.id}</span>
            <span className={styles.wrapper}>{tg.initDataUnsafe?.user?.id}</span>
            <span className={styles.wrapper}>{tg.initDataUnsafe?.user}</span>
        </div>
    );
}


export default App;
