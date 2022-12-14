// @flow
import {SignIn} from "./SignIn";
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {SignUp} from "./SignUp";
import {RestorePassword} from "./RestorePassword";
import style from "./Loginization.module.css"

export const LoginPage = () => {
    return <div className={style.wrapperLogin}>

        <Routes>
            <Route path={'signin'} element={<SignIn/>}/>
            <Route path={'signup'} element={<SignUp/>}/>
            <Route path={'restorepassword'} element={<RestorePassword/>}/>
        </Routes>
    </div>
}