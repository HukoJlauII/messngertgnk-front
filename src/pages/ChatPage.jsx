import {Footer} from "../components/Footer";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

export const ChatPage= observer( () => {
    const {user} = useContext(Context)
    const logout = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.isAuth(false)
    }
    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <NavLink to="/home" className="logo d-flex align-items-center">
                        <img src="../assets/img/logo.png" alt=""/>
                        <span className="d-none d-lg-block">MyChat</span>
                    </NavLink>
                    {/*<i className="bi bi-list toggle-sidebar-btn"></i>*/}
                </div>


                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">


                        <li className="nav-item dropdown pe-3">

                            <NavLink className="nav-link nav-profile d-flex align-items-center pe-0" to="#"
                                     data-bs-toggle="dropdown">
                                <img src='https://bootdey.com/img/Content/avatar/avatar6.png' alt="Profile"
                                     className="rounded-circle"/>
                                <span className="d-none d-md-block dropdown-toggle ps-2"
                                >username</span>
                            </NavLink>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>name + surname</h6>
                                    <span>Web Designer</span>
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


            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <NavLink className="nav-link " to="/">
                            <i className="bi bi-chat"></i>
                            <span>Chat page</span>
                        </NavLink>
                    </li>


                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <NavLink className="nav-link collapsed" to="/profile">
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </NavLink>
                    </li>

                </ul>

            </aside>

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Main page</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item active">Main page</li>
                        </ol>
                    </nav>
                </div>


                <section className="section dashboard">
                    <div className="row">


                        <div className="col-lg-12">
                            <div className="row">
                                <section style={{backgroundColor: '#CDC4F9'}}>
                                    <div className="container py-5">

                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className="card" id="chat3" style={{borderRadius: '15px'}}>
                                                    <div className="card-body">

                                                        <div className="row">
                                                            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0"
                                                                 style={{overflowY: 'auto'}}>

                                                                <div className="p-3">

                                                                    <div id="searchBar"
                                                                         className="input-group rounded mb-3">
                                                                        <input type="search"
                                                                               className="form-control rounded"
                                                                               placeholder="Search" aria-label="Search"
                                                                               aria-describedby="search-addon"/>
                                                                        <span className="input-group-text border-0"
                                                                              id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                                                                    </div>

                                                                    <div data-mdb-perfect-scrollbar="true"
                                                                         style={{
                                                                             position: 'relative',
                                                                             height: 'auto',
                                                                             overflowY: 'auto'
                                                                         }}>
                                                                        <ul className="list-unstyled border-right mb-0">

                                                                        </ul>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                            <div className="col-md-6 col-lg-7 col-xl-8">
                                                                <div id="editChat" className="col-xxl-0 col-xl-12"
                                                                     style={{display: 'none'}}>

                                                                    <div className="border-bottom">

                                                                        <div
                                                                            className="card-header d-flex align-items-center justify-content-between">
                                                                            <div className="row flex-fill"><h5
                                                                                className="card-title"
                                                                            >Комната для
                                                                                гениев</h5>
                                                                            </div>

                                                                            <button
                                                                                className="btn btn-outline-secondary rounded-pill m-2">
                                                                                <i
                                                                                    className="bi bi-pencil"></i>
                                                                            </button>
                                                                            <button
                                                                                className="btn btn-outline-danger rounded-pill m-2">
                                                                                <i
                                                                                    className="bi bi-trash"></i>
                                                                            </button>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div id="topChat" className="col-xxl-0 col-xl-12"
                                                                     style={{display: 'none'}}>

                                                                    <div className="border-bottom">

                                                                        <div
                                                                            className="card-header d-flex align-items-center justify-content-between">
                                                                            <button
                                                                                className="btn btn-secondary rounded-pill">
                                                                                <i
                                                                                    className="bi bi-arrow-left-circle"></i>
                                                                            </button>
                                                                            <div className="row"><h5
                                                                                className="card-title text-center"
                                                                                data-bs-target="#largeModal"
                                                                                data-bs-toggle="modal">Комната для
                                                                                гениев</h5>

                                                                            </div>

                                                                            <button
                                                                                className="btn btn-white rounded-pill">
                                                                                <i
                                                                                    className="bi bi-three-dots"></i>
                                                                            </button>
                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div id="chatRoom" className="pt-3 pe-3"
                                                                     data-mdb-perfect-scrollbar="true"
                                                                     style={{
                                                                         display: 'none',
                                                                         position: 'relative',
                                                                         height: '400px',
                                                                         overflowY: 'scroll'
                                                                     }}>
                                                                </div>
                                                                <div id="chatInputArea"
                                                                     className="text-muted justify-content-start align-items-center pe-3 pt-3 mt-2"
                                                                     style={{display: 'none'}}>
                                                                    <img
                                                                        src='https://bootdey.com/img/Content/avatar/avatar6.png'
                                                                        alt="avatar 3"
                                                                        style={{width: '40px', height: '100%'}}/>
                                                                    <input type="text"
                                                                           className="form-control form-control-lg"
                                                                           id="exampleFormControlInput2"
                                                                           placeholder="Type message"/>
                                                                    <NavLink className="ms-1 text-muted" to="#!"><i
                                                                        className="fas fa-paperclip"></i></NavLink>
                                                                    <NavLink className="ms-3 text-muted" to="#!"><i
                                                                        className="fas fa-smile"></i></NavLink>
                                                                    <NavLink id="sendButton" className="ms-3"
                                                                             to="#!"><i
                                                                        className="fas fa-paper-plane"></i></NavLink>
                                                                </div>
                                                                <div id="editInputArea"
                                                                     className="text-muted justify-content-start align-items-center pe-3 pt-3 mt-2"
                                                                     style={{display: 'none'}}>
                                                                    <img
                                                                        src='https://bootdey.com/img/Content/avatar/avatar6.png'
                                                                        alt="avatar 3"
                                                                        style={{width: '40px', height: '100%'}}/>
                                                                    <input type="text"
                                                                           className="form-control form-control-lg"
                                                                           id="exampleFormControlInput"
                                                                           placeholder="Type message"/>
                                                                    <NavLink className="ms-1 text-muted" to="#!"><i
                                                                        className="bi bi-x-lg"></i></NavLink>
                                                                    <NavLink id="sendEditButton" className="ms-3"
                                                                             to="#!"><i
                                                                        className="fas fa-paper-plane"></i></NavLink>
                                                                </div>
                                                                <div id="noChat" className="col-xxl-0 col-xl-12 h-50">

                                                                    <div className="card info-card customers-card">


                                                                        <div className="card-body border-bottom">
                                                                            <h5 className="card-title text center">Создать
                                                                                новую
                                                                                комнату</h5>

                                                                            <div
                                                                                className="d-flex align-items-center justify-content-around">
                                                                                <div
                                                                                    className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                                                                                    data-bs-target="#verticalycentered"
                                                                                    data-bs-toggle="modal">
                                                                                    <i className="bi bi-plus"></i>
                                                                                </div>
                                                                                <div className="modal fade"
                                                                                     id="verticalycentered"
                                                                                     tabIndex="-1">
                                                                                    <div
                                                                                        className="modal-dialog modal-dialog-centered modal-lg">
                                                                                        <div className="modal-content">
                                                                                            <div
                                                                                                className="modal-header">
                                                                                                <h5 className="modal-title">Создание
                                                                                                    комнаты</h5>
                                                                                                <button type="button"
                                                                                                        className="btn-close"
                                                                                                        data-bs-dismiss="modal"
                                                                                                        aria-label="Close"></button>
                                                                                            </div>
                                                                                            <div className="modal-body">
                                                                                                <form>
                                                                                                    <div
                                                                                                        className="row mb-3">
                                                                                                        <label
                                                                                                            className="col-sm-2 col-form-label">Название
                                                                                                            комнаты</label>
                                                                                                        <div
                                                                                                            className="col-sm-10">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                                placeholder="Введите название комнаты..."/>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                </form>
                                                                                                <div
                                                                                                    className="modal-footer">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-secondary"
                                                                                                        data-bs-dismiss="modal">
                                                                                                        Отмена
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-primary"
                                                                                                    >
                                                                                                        Создать комнату
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div
                                                                                className=" row card-body align-items-center justify-content-around"
                                                                                style={{height: '600px'}}>
                                                                        <span
                                                                            className="text-center">Выберите диалог...</span>
                                                                            </div>

                                                                        </div>

                                                                    </div>


                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="modal fade" id="largeModal" tabIndex="-1" style={{display: 'none'}}
                                     aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Участники</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <li className="p-2 border-bottom"><NavLink to="#!"
                                                                                           className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div>
                                                            <img
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                                alt="avatar" className="d-flex align-self-center me-3"
                                                                width="60"/>
                                                            <span className="badge bg-success badge-dot"></span>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="fw-bold mb-0">Комната для гениев</p>
                                                            <p className="small text-muted">Move to this chat</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-1">
                                                        <p className="small text-muted mb-1">Just now</p>
                                                    </div>
                                                </NavLink></li>
                                            </div>
                                            <div className="modal-footer">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer/>

        </div>
    );
})