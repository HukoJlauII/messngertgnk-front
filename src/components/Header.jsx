import {NavLink} from "react-router-dom";
import logo from "../assets/img/logo.png";
import dayjs from "dayjs";
import {useContext} from "react";
import {Context} from "../index";

export const Header = () => {
    const {user} = useContext(Context)
    const logout = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <NavLink to="/home" className="logo d-flex align-items-center">
                    <img src={logo} alt=""/>
                    <span className="d-none d-lg-block">MyChat</span>
                </NavLink>
                <i className="bi bi-list toggle-sidebar-btn" onClick={() =>
                    document.querySelector('body').classList.toggle('toggle-sidebar')}></i>
            </div>


            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">


                    <li className="nav-item dropdown pe-3">

                        <NavLink className="nav-link nav-profile d-flex align-items-center pe-0" to="#"
                                 data-bs-toggle="dropdown">
                            <img src='https://bootdey.com/img/Content/avatar/avatar6.png' alt="Profile"
                                 className="rounded-circle"/>
                            <span className="d-none d-md-block dropdown-toggle ps-2">{user._user.username}</span>
                        </NavLink>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{user.user.name + ' ' + user.user.surname}</h6>
                                <span>Registered since {dayjs(user.user.registrationDate).format('DD MMM YYYY')}</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <NavLink className="dropdown-item d-flex align-items-center" to="/profile">
                                    <i className="bi bi-person"></i>
                                    <span>My Profile</span>
                                </NavLink>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <NavLink className="dropdown-item d-flex align-items-center"
                                         to="/profile#edit-profile">
                                    <i className="bi bi-gear"></i>
                                    <span>Account Settings</span>
                                </NavLink>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <NavLink className="dropdown-item d-flex align-items-center" onClick={logout}
                                         to="/login">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Sign Out</span>
                                </NavLink>
                            </li>

                        </ul>

                    </li>


                </ul>
            </nav>


        </header>
    );
};