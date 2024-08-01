import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import * as styles from '../styles/App/App.module.css'
import Web from "./Web/Web";


function App() {
    return (
        <div>
            <Routes basename='/'>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>} />

                </Route>
            </Routes>
        </div>
    );
}


export default App;
