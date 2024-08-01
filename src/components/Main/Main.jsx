import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';
import * as styles from '../../styles/Main/Main.modules.css'


function Main() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>

    );
}


export default Main;
