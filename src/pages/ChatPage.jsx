import {Footer} from "../components/Footer";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Header} from "../components/Header";
import {SideBar} from "../components/SideBar";

export const ChatPage = observer(() => {
    const {user} = useContext(Context)

    return (
        <div>
            <Header/>

            <SideBar active={"Chat page"}/>

            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Мои сообщения</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Главная</NavLink></li>
                            <li className="breadcrumb-item active">Мои сообщения</li>
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
                                                            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 border-end"
                                                                 style={{overflowY: 'auto'}}>

                                                                <div className="p-3">

                                                                    <div id="searchBar"
                                                                         className="input-group rounded mb-3">
                                                                        <input type="search"
                                                                               className="form-control rounded"
                                                                               placeholder="Поиск" aria-label="Search"
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
                                                                        src={user.avatarPicture}
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
                                                                        src={user.avatarPicture}
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

                                                                    <div>


                                                                        <div className="card-body border-bottom">

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


                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <Footer/>

        </div>
    );
})