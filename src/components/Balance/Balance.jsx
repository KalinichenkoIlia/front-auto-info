import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Balance/Balance.modules.css'

function Balance() {
    let  balance = 100.0
    return (
        <div className={styles.wrapper}>
            <p className={styles.subtitle}>Баланс</p>
            <p className={styles.balance}>{balance}</p>
        </div>
    );
}


export default Balance;
