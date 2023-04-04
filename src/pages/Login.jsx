import {FormInput} from "../components/FormInput";
import logo from "../assets/img/logo.png"
import {FormButton} from "../components/FormButton";
import {RememberMe} from "../components/RememberMe";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {Context} from "../index";
import {login} from "../http/userAPI";

export const Login = observer(() => {
    const {user} = useContext(Context)
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.clear()
        user.setUser({})
        user.setIsAuth(false)
        console.log(user)
    }
    const signIn = async () => {
        let response
        try {
            response = await login(username, password)
            console.log(response)
            user.setUser(response)
            user.setIsAuth(true)
            navigate('/home')
        } catch (e) {

        }

    }
    return (
        <div>
            <main>
                <div className="container">
                    <section
                        className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div
                                    className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                    <div className="d-flex justify-content-center py-4">
                                        <a href="/" className="logo d-flex align-items-center w-auto">
                                            <img src={logo} alt="logo"/>
                                            <span className="d-none d-lg-block">TGNKMessage</span>
                                        </a>
                                    </div>


                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                <p className="text-center small">Enter your personal details to create
                                                    account</p>
                                            </div>
                                            <div className="row g-3 needs-validation">
                                                <FormInput name={"Username"} value={username}
                                                           setter={e => setUsername(e.target.value)}/>
                                                <FormInput name={"Password"} value={password}
                                                           setter={e => setPassword(e.target.value)}/>
                                                <RememberMe/>
                                                <FormButton action={"Login"} submit={signIn}/>
                                                <FormButton action={"Logout"} submit={logout}/>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <NavLink
                                                        to="/register">Create
                                                        an account</NavLink></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="credits">
                            Designed by <a href="https://github.com/HukoJlauII">HukoJlauII</a>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    );
})