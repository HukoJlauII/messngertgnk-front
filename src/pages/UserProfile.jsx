import React, {useContext, useState} from 'react';
import {Header} from "../components/Header";
import {SideBar} from "../components/SideBar";
import {Footer} from "../components/Footer";
import {Context} from "../index";
import dayjs from "dayjs";
import {editPassword, editProfile, getToken} from "../http/userAPI";
import {observer} from "mobx-react-lite";

const UserProfile = observer(() => {


        const [oldPassword, setOldPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
        const [oldPasswordError, setOldPasswordError] = useState('');
        const [newPasswordError, setNewPasswordError] = useState('');
        const [newPasswordConfirmError, setNewPasswordConfirmError] = useState('');
        const [avatar, setAvatar] = useState();
        const [pic,setPic]=useState()
        const [formLoading, setFormLoading] = useState(false);
        const [changePasswordComplete, setChangePasswordComplete] = useState(false);
        const {user} = useContext(Context)
        const changePassword = async () => {
            setFormLoading(true)
            setChangePasswordComplete(false)
            setOldPasswordError('')
            setNewPasswordError('')
            setNewPasswordConfirmError('')
            await editPassword(oldPassword, newPassword, newPasswordConfirm).then(() => {
                setOldPasswordError('')
                setNewPasswordError('')
                setNewPasswordConfirmError('')
                setFormLoading(false)
                setChangePasswordComplete(true)
            })
                .catch(err => {
                    console.log(err)
                    err.response.data.forEach(fieldError => {
                        switch (fieldError.field) {
                            case 'password': {
                                setOldPasswordError(fieldError.defaultMessage)
                                break;
                            }
                            case 'newPassword': {
                                setNewPasswordError(fieldError.defaultMessage)
                                break;
                            }
                            case 'newPasswordConfirm': {
                                setNewPasswordConfirmError(fieldError.defaultMessage)
                                break;
                            }
                        }
                    })
                })
                .finally(() => setFormLoading(false))

        }

        const changeProfile = async () => {
            let formData = new FormData();
            console.log(avatar)
            formData.append("file", avatar)
            // formData.append("user", JSON.stringify({json:"user"}))
            await editProfile(formData).then(res => user.setUser(res))
            // await editProfile(formData)


        }

        console.log(avatar)
        return (
            <div>
                <Header/>

                <SideBar active={"Chat page"}/>

                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Профиль</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/home">Главная</a></li>
                                <li className="breadcrumb-item">Пользователи</li>
                                <li className="breadcrumb-item active">Профиль</li>
                            </ol>
                        </nav>
                    </div>


                    <section className="section profile">
                        <div className="row">
                            <div className="col-xl-4">

                                <div className="card">
                                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                        <img src={user.avatarPicture} alt="Profile"
                                             className="rounded-circle"/>
                                        <h2>{user.user.surname + ' ' + user.user.name}</h2>
                                        <h3>{(user.isAdmin) ? "Администратор" : "Пользователь"}</h3>
                                        <div className="social-links mt-2">
                                            <a href="#" className="twitter"><i className="bi bi-github"></i></a>
                                            <a href="#" className="facebook"><i
                                                className="bi bi-stack-overflow"></i></a>
                                            <a href="#" className="instagram"><i className="bi bi-google"></i></a>
                                            <a href="#" className="linkedin"><i className="bi bi-telegram"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-8">

                                <div className="card">
                                    <div className="card-body pt-3">

                                        <ul className="nav nav-tabs nav-tabs-bordered">

                                            <li className="nav-item">
                                                <button className="nav-link active" data-bs-toggle="tab"
                                                        data-bs-target="#profile-overview">Обзор
                                                </button>
                                            </li>

                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#profile-edit">Редактировние профиля
                                                </button>
                                            </li>


                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#profile-change-password">Смена пароля
                                                </button>
                                            </li>

                                        </ul>
                                        <div className="tab-content pt-2">

                                            <div className="tab-pane fade show active profile-overview"
                                                 id="profile-overview">

                                                <h5 className="card-title">Личные данные</h5>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Никнейм</div>
                                                    <div className="col-lg-9 col-md-8">{user.user.username}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Полное имя</div>
                                                    <div
                                                        className="col-lg-9 col-md-8">{user.user.surname + ' ' + user.user.name}</div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Почта</div>
                                                    <div className="col-lg-9 col-md-8">{user.user.email}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Зарегистрирован с</div>
                                                    <div
                                                        className="col-lg-9 col-md-8">{dayjs(user.user.registrationDate).format('DD MMM YYYY')}</div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">


                                                <div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="profileImage"
                                                               className="col-md-4 col-lg-3 col-form-label">Фото
                                                            профиля</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <img src={user.avatarPicture}
                                                                 alt="Profile"
                                                                 id="profileImage"/>
                                                            <div className="row">
                                                                <div className="pt-2 col-6">
                                                                    <input className="form-control"
                                                                           type="file"
                                                                           name="formFile1"
                                                                           id="formFile1"
                                                                           accept="image/*"
                                                                           multiple
                                                                           onChange={e => setAvatar(e.target.files[0])}/>
                                                                </div>
                                                                {/*<div className="pt-2 col">*/}
                                                                {/*    <a href="#" className="btn btn-danger btn-sm"*/}
                                                                {/*       title="Remove my profile image"><i*/}
                                                                {/*        className="bi bi-trash"></i></a>*/}
                                                                {/*    <a href="#" className="btn btn-danger btn-sm"*/}
                                                                {/*       title="Remove my profile image"><i*/}
                                                                {/*        className="bi bi-trash"></i></a>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="name"
                                                               className="col-md-4 col-lg-3 col-form-label">Имя</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text" className="form-control"
                                                                   id="name" value={user.user.username}/>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="name"
                                                               className="col-md-4 col-lg-3 col-form-label">Имя</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text" className="form-control"
                                                                   id="name" value={user.user.name}/>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="surname"
                                                               className="col-md-4 col-lg-3 col-form-label">Фамилия</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text" className="form-control"
                                                                   id="surname" value={user.user.surname}/>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="Email"
                                                               className="col-md-4 col-lg-3 col-form-label">Почта</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="email" type="email" className="form-control"
                                                                   id="Email" value={user.user.email}/>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-primary"
                                                                onClick={changeProfile}>Сохранить
                                                            изменения
                                                        </button>
                                                    </div>
                                                </div>


                                            </div>


                                            <div className="tab-pane fade pt-3" id="profile-change-password">

                                                <div>
                                                    {changePasswordComplete && (<div className="row mb-3 p-1">
                                                        <div className="alert alert-success alert-dismissible fade show"
                                                             role="alert">
                                                            <i className="bi bi-check-circle me-1"></i>
                                                            Пароль успешно сменён
                                                            <button type="button" className="btn-close"
                                                                    data-bs-dismiss="alert" aria-label="Close"></button>
                                                        </div>
                                                    </div>)}

                                                    <div className="row mb-3">
                                                        <label htmlFor="currentPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Текущий
                                                            пароль</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="password" type="password"
                                                                   className={oldPasswordError ? "form-control is-invalid" : "form-control"}
                                                                   id="currentPassword"
                                                                   onChange={e => setOldPassword(e.target.value)}/>
                                                            <div className="invalid-feedback">{oldPasswordError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="newPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Новый
                                                            пароль</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="newpassword" type="password"
                                                                   className={newPasswordError ? "form-control is-invalid" : "form-control"}
                                                                   id="newPassword"
                                                                   onChange={e => setNewPassword(e.target.value)}/>
                                                            <div className="invalid-feedback">{newPasswordError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="renewPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Подтверждение
                                                            пароля</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="renewpassword" type="password"
                                                                   className={newPasswordConfirmError ? "form-control is-invalid" : "form-control"}
                                                                   id="renewPassword"
                                                                   onChange={e => setNewPasswordConfirm(e.target.value)}/>
                                                            <div
                                                                className="invalid-feedback">{newPasswordConfirmError}</div>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        {!formLoading &&
                                                            <button onClick={changePassword}
                                                                    className="btn btn-primary">Сменить пароль
                                                            </button>}
                                                        {(formLoading &&
                                                            <button className="btn btn-primary" type="button" disabled>
                                                            <span className="spinner-border spinner-border-sm"
                                                                  role="status" aria-hidden="true"></span>
                                                                Loading...
                                                            </button>)}
                                                    </div>
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
    }
)


export default UserProfile;