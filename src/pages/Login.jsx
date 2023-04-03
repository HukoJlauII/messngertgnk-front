import {FormInput} from "../components/FormInput";
import logo from "../assets/img/logo.png"
import {FormButton} from "../components/FormButton";
import {RememberMe} from "../components/RememberMe";
import {NavLink} from "react-router-dom";

export function Login() {
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
                                            <form className="row g-3 needs-validation" method="post">
                                                <FormInput name={"Username"}/>
                                                <FormInput name={"Password"}/>
                                                <RememberMe/>
                                                <FormButton action={"Login"}/>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <NavLink
                                                        to="/register">Create
                                                        an account</NavLink></p>
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

        </div>
    );
}