import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/style.css'
import {check} from "./http/userAPI";
import {Context} from "./index";
import {ChatPage} from "./pages/ChatPage";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {observer} from "mobx-react-lite";
import "./assets/js/main.js"
import "./assets/css/chat.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     setTimeout(() => {
    //         check().then(data => {
    //             user.setUser(data)
    //             console.log(data)
    //             user.setIsAuth(true)
    //             console.log(user.isAuth)
    //         })
    //     }, 1000)
    //     }, [])


    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(data);
                user.setIsAuth(true);
            }).finally(() => setLoading(false))
        },);
    }, []);
    // setTimeout(()=>console.log(user.isAuth),5000)
    console.log(user.isAuth)
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*<Route path={"*"} Component={Login}/>*/}
                    {user.isAuth && <Route path="/home" Component={ChatPage}/>}
                    {<Route path={"/" + user.isAuth} Component={ChatPage}/>}
                    <Route path={"/login"} Component={Login}/>
                    <Route path={"/register"} Component={Register}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
})

export default App;
