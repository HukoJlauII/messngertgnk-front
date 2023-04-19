import {Footer} from "../components/Footer";
import {NavLink} from "react-router-dom";
import React, {useContext, useState} from "react";
import {Context} from "../index";
import {Header} from "../components/Header";
import {SideBar} from "../components/SideBar";
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import {findUsers} from "../http/userAPI";
import {avatarPicture} from "../App";
import dayjs from "dayjs";
import {allMessagesInChat} from "../http/messagesAPI";
// import InputEmoji from 'react-input-emoji'
var stompClient = null;

export const ChatPage = () => {
    const {user} = useContext(Context)

    const [searchLine, setSearchLine] = useState('');
    const [receiver, setReceiver] = useState()
    const [chatUsers, setChatUsers] = useState();
    const [searchUsersList, setSearchUsersList] = useState();
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState()

    // useEffect(() => {
    //
    // }, []);
    //
    const searchUsers = async () => {
        await findUsers(searchLine, 0).then(res => {
            setSearchUsersList(res.data._embedded.users)
        })

    }
    const goToDialog = () => {
        connect()

    }
    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/chat');
        stompClient = over(Sock);
        stompClient.connect({}, function () {
            setTimeout(onConnected, 200)
        }, onError);
    }
    const onConnected = async () => {
        console.log(receiver)
        if (user.user.id < receiver.id) {
            stompClient.subscribe('/topic/' + user.user.name + '/' + receiver.username, onMessageReceived)
        } else {
            stompClient.subscribe('/topic/' + receiver.username + '/' + user.user.name, onMessageReceived)
        }
        await allMessagesInChat(user, receiver).then(res => {
            setMessages(res.data._embedded.messages)
        })

    }
    const onError = (error) => {
        console.log(error)
    }
    const onMessageReceived = (payload) => {
        const message = JSON.parse(payload.body)
        console.log(message)
        // chatArea.appendChild(createMessage(message))
        // chatArea.scrollTop = chatArea.scrollHeight
    }
    const sendMessage = () => {

        if (messageText === '') {
            return
        }
        const chatMessage = {
            content: messageText,
            sender: user.user,
            receiver: receiver,
            sendTime: new Date()
        }
        if (messageText && stompClient)
            if (user.user.id < receiver.id) {
                stompClient.send('/chat.send/' + user.user.name + '/' + receiver.username, {}, JSON.stringify(chatMessage))
            } else {
                stompClient.send('/chat.send/' + receiver.username + '/' + user.user.name, {}, JSON.stringify(chatMessage))
            }

        setMessageText('')

    }


    const checkOnline = (user) => {
        if (user.lastOnline) {
            const lastOnline = dayjs(user.lastOnline)
            switch (lastOnline.diff(new Date(), 'day', false)) {
                case 0: {
                    return lastOnline.format('HH:mm')
                }
                case 6:
                case 5:
                case 4:
                case 3:
                case 2: {
                    return lastOnline.format('dd')
                }
                case 1: {
                    return lastOnline.format('Вчера')
                }
                default: {
                    return lastOnline.format('D MMM')
                }
            }

        } else {
            return 'Онлайн'
        }
    }
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
                                                            <div
                                                                className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 border-end"
                                                                style={{overflowY: 'auto'}}>

                                                                <div className="p-3">

                                                                    <div id="searchBar"
                                                                         className="input-group rounded mb-3">
                                                                        <input type="search"
                                                                               className="form-control rounded"
                                                                               placeholder="Введите ник"
                                                                               aria-label="Search"
                                                                               aria-describedby="search-addon"
                                                                               onChange={e => setSearchLine(e.target.value)}/>
                                                                        <span className="input-group-text border-0"
                                                                              onClick={searchUsers}
                                                                              id="search-addon"><i
                                                                            className="fas fa-search"></i></span>
                                                                    </div>
                                                                    <ul className="list-unstyled border-right mb-0">
                                                                        {!chatUsers && !searchUsersList && <div
                                                                            className=" row card-body align-items-center justify-content-around"
                                                                            style={{height: '600px'}}>
                                                                        <span
                                                                            className="text-center">Для начала общения найдите пользователя по нику</span>
                                                                        </div>
                                                                        }
                                                                        {searchUsersList &&
                                                                            searchUsersList.map(user => {
                                                                                    return (
                                                                                        <li className="p-2 border-bottom border-top"
                                                                                            key={user.id}>
                                                                                            <NavLink
                                                                                                onClick={() => {
                                                                                                    setReceiver(user)
                                                                                                    setTimeout(goToDialog, 200)
                                                                                                }}
                                                                                                to="#"
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <div
                                                                                                    className="d-flex flex-row">
                                                                                                    <div>
                                                                                                        <img
                                                                                                            src={avatarPicture(user)}
                                                                                                            style={{
                                                                                                                height: '60px',
                                                                                                                width: '60px'
                                                                                                            }} alt="Profile"
                                                                                                            className="rounded-circle d-flex align-self-center me-3"/>
                                                                                                        <span
                                                                                                            className="badge bg-success badge-dot"></span>
                                                                                                    </div>
                                                                                                    <div className="pt-1">
                                                                                                        <p className="fw-bold mb-0">{user.username}</p>
                                                                                                        <p className="small text-muted">Перейти
                                                                                                            в диалог</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="pt-1">
                                                                                                    <p className="small text-muted mb-1">{checkOnline(user)}</p>
                                                                                                </div>
                                                                                            </NavLink></li>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                        {chatUsers &&
                                                                            chatUsers.map(user => {
                                                                                    return (
                                                                                        <li className="p-2 border-bottom">
                                                                                            <NavLink
                                                                                                to="#"
                                                                                                className="d-flex justify-content-between">
                                                                                                <div
                                                                                                    className="d-flex flex-row">
                                                                                                    <div>
                                                                                                        <img
                                                                                                            src={avatarPicture(user)}
                                                                                                            alt="avatar"
                                                                                                            className="rounded-circle d-flex align-self-center me-3"
                                                                                                            width="60"/>
                                                                                                        <span
                                                                                                            className="badge bg-success badge-dot"></span>
                                                                                                    </div>
                                                                                                    <div className="pt-1">
                                                                                                        <p className="fw-bold mb-0">{user.username}</p>
                                                                                                        <p className="small text-muted">{user.lastMessage}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="pt-1">
                                                                                                    <p className="small text-muted mb-1">{user.lastOnline}</p>
                                                                                                </div>
                                                                                            </NavLink></li>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </ul>

                                                                    {/*<div data-mdb-perfect-scrollbar="true"*/}
                                                                    {/*     style={{*/}
                                                                    {/*         position: 'relative',*/}
                                                                    {/*         height: 'auto',*/}
                                                                    {/*         overflowY: 'auto'*/}
                                                                    {/*     }}>*/}
                                                                    {/*    <ul className="list-unstyled border-right mb-0">*/}

                                                                    {/*    </ul>*/}
                                                                    {/*</div>*/}

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
                                                                {messages &&
                                                                    <div id="topChat" className="col-xxl-0 col-xl-12">

                                                                        <div className="border-bottom mb-1">

                                                                            <div
                                                                                className="card-header d-flex align-items-center justify-content-between">
                                                                                <img
                                                                                    src={avatarPicture(receiver)}
                                                                                    style={{
                                                                                        height: '50px',
                                                                                        width: '50px'
                                                                                    }} alt="Profile"
                                                                                    className="rounded-circle"/>
                                                                                <div className="row"><h5
                                                                                    className="card-title text-center"
                                                                                    data-bs-target="#largeModal"
                                                                                    data-bs-toggle="modal">{receiver.username}</h5>
                                                                                </div>

                                                                                <button
                                                                                    className="btn btn-white rounded-pill">
                                                                                    <i
                                                                                        className="bi bi-three-dots"></i>
                                                                                </button>
                                                                            </div>


                                                                        </div>

                                                                    </div>}
                                                                {messages && <div id="chatRoom" className="pt-3 pe-3"
                                                                                  data-mdb-perfect-scrollbar="true"
                                                                                  style={{
                                                                                      position: 'relative',
                                                                                      height: '500px',
                                                                                      overflowY: 'auto'
                                                                                  }}>
                                                                </div>}


                                                                {messages && <div id="chatInputArea"
                                                                                  className="text-muted justify-content-start align-items-center pe-3 pt-3 mt-2 d-flex">
                                                                    <img
                                                                        src={avatarPicture(user.user)}
                                                                        style={{
                                                                            height: '50px',
                                                                            width: '50px'
                                                                        }} alt="Profile"
                                                                        className="rounded-circle"/>
                                                                    <input type="text"
                                                                           className="form-control form-control-lg"
                                                                           id="exampleFormControlInput2"
                                                                           onChange={e => setMessageText(e.target.value)}
                                                                        // cleanOnEnter
                                                                        // onEnter={sendMessage}
                                                                           placeholder="Введите сообщение"/>
                                                                    {/*<InputEmoji*/}
                                                                    {/*    value={messageText}*/}
                                                                    {/*    type={'text'}*/}
                                                                    {/*    className="form-control form-control-lg"*/}
                                                                    {/*    onChange={e => setMessageText(e.target.value)}*/}
                                                                    {/*    cleanOnEnter*/}
                                                                    {/*    onEnter={sendMessage}*/}
                                                                    {/*    placeholder="Введите сообщение"*/}
                                                                    {/*/>*/}
                                                                    <label htmlFor="file" style={{cursor: 'pointer'}}>
                                                                        <i className="fa fa-paperclip"></i>
                                                                    </label>
                                                                    <input id="file" name="file" type="file"
                                                                           multiple hidden/>
                                                                    <NavLink id="sendButton" className="ms-3"
                                                                             onClick={sendMessage}
                                                                    ><i
                                                                        className="fas fa-paper-plane"></i></NavLink>
                                                                </div>}
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
                                                                {!messages &&
                                                                    <div id="noChat"
                                                                         className="col-xxl-0 col-xl-12 h-50">

                                                                        <div>


                                                                            <div className="card-body ">

                                                                                <div
                                                                                    className=" row card-body align-items-center justify-content-around"
                                                                                    style={{height: '600px'}}>
                                                                        <span
                                                                            className="text-center">Выберите диалог...</span>
                                                                                </div>

                                                                            </div>

                                                                        </div>


                                                                    </div>}
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
}