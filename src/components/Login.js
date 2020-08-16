import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login(){

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = function (event){
        event.preventDefault();//this stops the refresh
        //do login logic

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                //logged in successfully
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //this stops the refresh
        //do register logic...
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //created a user and loggin in, redirect
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to={"/"}>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                     alt=""
                />
            </Link>
            <div className="login__container">
                <h1>
                    Sign in
                </h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="text"/>
                    <button onClick={login} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                    <p>
                        By signing-in you agree to Amazon's terms and condition.
                    </p>
                    <button onClick={register} className="login__signUpButton">
                        Create your Amazon Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
