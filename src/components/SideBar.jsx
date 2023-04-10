import {NavLink} from "react-router-dom";

export const SideBar = (props) => {
    showActiveLink()
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-heading">Pages</li>
                <li className="nav-item">
                    <NavLink className={props.active === "Chat page" ? 'nav-link' : 'nav-link collapsed'} to="/">
                        <i className="bi bi-chat"></i>
                        <span>Chat page</span>
                    </NavLink>
                </li>


                <li className="nav-item">
                    <NavLink className={props.active === 'Profile' ? 'nav-link' : 'nav-link collapsed'} to="/profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>

            </ul>

        </aside>
    );
};

function showActiveLink() {

}