import React, { useState } from "react";
import './signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const crossNavigate = useNavigate();
    const returnNavigate = useNavigate()
    const crossbtnClick = () => {
        crossNavigate('/')
    }
    const [newValues, setnewValues] = useState({
        firstName: '',
        surName: '',
        email: '',
        newPassword: '',
    })
    const [newRecords, setnewRecords] = useState([]);
    const [newerrors, setnewErrors] = useState({})
    function newHandleChange(e) {
        setnewValues({ ...newValues, [e.target.name]: e.target.value })
    }
    function newhandleSubmit(e) {
        e.preventDefault();
        let newerrors = {}
        if (!newValues.firstName) {
            newerrors.firstName = "Name Required"
        }
        if (!newValues.surName) {
            newerrors.surName = "Surname Required"
        }
        if (!newValues.email) {
            newerrors.email = "Email Address Required"
        }
        if (!newValues.newPassword) {
            newerrors.newPassword = "Password Required"
        }
        else if (newValues.newPassword.length < 8) {
            newerrors.newPassword = "Password must be more than 8 Characters"
        }
        else {
            axios.post('http://localhost:8000/users', newValues)
                .then(result => {
                    alert("Account Created")
                    returnNavigate('/')
                })
                .catch(err => alert(err))
        }
        const newUsers = { ...newValues, id: new Date().getTime().toString }
        setnewRecords([...newRecords, newUsers]);
        setnewErrors(newerrors)
        return newerrors
    }
    return (
        <div className="signup-contant">
            <div className="contant">
                <div className="crossbutton">
                    <button className="cross-btn" onClick={() => { crossbtnClick() }}>&times;</button>
                </div>
                <h1>Sign Up</h1>
                <p>It's quick and easy.</p>
                <hr />
                <div className="inner-contant">
                    <form onSubmit={newhandleSubmit}>
                        <div className="input-contant">
                            <input
                                type="text"
                                placeholder="First name"
                                value={newValues.firstName}
                                name="firstName"
                                id="firstName"
                                onChange={newHandleChange}
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                value={newValues.surName}
                                name="surName"
                                id="Surname"
                                onChange={newHandleChange}
                            />
                            <div className="validation">
                                {newerrors.firstName && <p className="valid" style={{ color: "red", fontSize: "15px", margin: "2px 10px 2px" }}>{newerrors.firstName}</p>}
                                {newerrors.surName && <p style={{ color: "red", fontSize: "15px", marginLeft: "270px", }}>{newerrors.surName}</p>}
                            </div>
                        </div>
                        <div className="input-Contant">
                            <center>
                                <input type="email"
                                    placeholder="Email Address"
                                    value={newValues.email}
                                    name="email"
                                    id="email"
                                    onChange={newHandleChange}
                                />
                            </center>
                            {newerrors.email && <p style={{ color: "red", fontSize: "15px", margin: "2px 10px 2px" }}>{newerrors.email}</p>}
                            <center>
                                <input
                                    className="input-password"
                                    type="text"
                                    placeholder="Password"
                                    id="newpassword"
                                    value={newValues.newPassword}
                                    name="newPassword"
                                    onChange={newHandleChange}
                                />
                            </center>
                            {newerrors.newPassword && <p style={{ color: "red", fontSize: "15px", margin: "2px 10px 2px" }}>{newerrors.newPassword}</p>}
                        </div>
                        <center>
                            <button className="signup-btn" type="submit">Sign Up</button>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;