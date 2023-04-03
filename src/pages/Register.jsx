import logo from "../assets/img/logo.png";
import {FormInput} from "../components/FormInput";
import {NavLink} from "react-router-dom";
import {registration} from "../http/userAPI";
import {useState} from "react";
import {FormButton} from "../components/FormButton";

export function Register() {

    const [name, setName] = useState()
    const [surname, setSurname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const signIn = async () => {
        const response = await registration()
        console.log(response)
    }

    return (
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
                                        <form className="row g-3 needs-validation">
                                            <FormInput name={"Name"} value={name}
                                                       setter={e => setName(e.target.value)}/>
                                            <FormInput name={"Surname"} value={surname}
                                                       setter={e => setSurname(e.target.value)}/>
                                            <FormInput name={"Email"} value={email}
                                                       setter={e => setEmail(e.target.value)}/>
                                            <FormInput name={"Username"} value={username}
                                                       setter={e => setUsername(e.target.value)}/>
                                            <FormInput name={"Password"} value={password}
                                                       setter={e => setPassword(e.target.value)}/>
                                            <FormInput name={"Password Confirm"} value={passwordConfirm}
                                                       setter={e => setPasswordConfirm(e.target.value)}/>
                                            <FormButton action={"Create Account"} submit={signIn} />
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <NavLink to="/login">Log
                                                    in</NavLink></p>
                                            </div>
                                        </form>
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
    );
}