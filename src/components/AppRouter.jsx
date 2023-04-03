import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {useContext} from "react";
import {Context} from "../index";

export const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} Component={Component} exact/>)
            }
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} Component={Component} exact/>)
            }

        </Routes>
    );
};