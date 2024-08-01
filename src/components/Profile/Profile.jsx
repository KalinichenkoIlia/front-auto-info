import React, {useEffect, useState} from "react";
import * as styles from '../../styles/Profile/Profile.modules.css'

function Profile() {
    return (
        <>
            <img className={styles.photo_user} key={window.Telegram.initDataUnsafe?.user?.photo_url}
                 src={window.Telegram.initDataUnsafe?.user?.photo_url} alt='photo_user'/>

            <p key={window.Telegram.initDataUnsafe?.user}> {window.Telegram.initDataUnsafe?.user?.first_name} {window.Telegram.initDataUnsafe?.user?.last_name}</p>

        </>
    );
}


export default Profile;
