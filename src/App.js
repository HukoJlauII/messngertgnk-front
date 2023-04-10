import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/style.css'
import "./assets/js/main.js"
import "./assets/css/chat.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import {info} from "./http/userAPI";
import {Context} from "./index";
import {ChatPage} from "./pages/ChatPage";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {observer} from "mobx-react-lite";
import UserProfile from "./pages/UserProfile";
import ReactLoading from "react-loading"
import {ErrorPage} from "./pages/ErrorPage";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            info().then(data => {
                console.log(data)
                user.setUser(data.data);
                console.log(JSON.stringify(user.user))
                user.setIsAuth(true);
            }).finally(() => setLoading(false))
        },);
    }, [])

    if (loading) {
        return (<div className={"d-flex min-vh-100 align-items-center justify-content-center"}><ReactLoading
            className={"col-md-8 mx-auto h-100"} type={"spinningBubbles"} color={"skyblue"} height={'20vh'}
            width={'20vh'}></ReactLoading></div>)
    } else {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        {!user.isAuth && <Route path={"*"} Component={Login}/>}
                        {user.isAuth && <Route path={"*"} Component={ErrorPage}/>}
                        {user.isAuth && <Route path="/home" Component={ChatPage}/>}
                        {user.isAuth && <Route path="/profile" Component={UserProfile}/>}
                        <Route path={"/login"} Component={Login}/>
                        <Route path={"/register"} Component={Register}/>
                    </Routes>
                </BrowserRouter>
            </div>

        );
    }
})

export default App;
