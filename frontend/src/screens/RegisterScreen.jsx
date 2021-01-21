import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm password are not a match");
        } else {
            dispatch(register(name, email, password));
        }
    };

    useEffect(() => {
        //when you log in, if the query has a location, you will be redirected there
        if (userInfo) {
            console.log("transfering", redirect);
            props.history.push(redirect);
        }
    }, [userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <input
                    type="name"
                    id="name"
                    placeholder="Enter name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <label htmlFor="email">Email Address</label>
                </div>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <label htmlFor="password">Password</label>
                </div>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account?{" "}
                        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
