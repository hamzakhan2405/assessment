import React, { useState } from 'react';
import './forgottenpassword.css'
import { useNavigate } from "react-router-dom";

const Forgottenpassword = () => {
    const cancleNavigate = useNavigate();
    const cancleClick = () => {
        cancleNavigate('/')
    }
    const [changevalue, setchangevalue] = useState("")
    const [changeerrors, setchangeerrors] = useState('')
    function changeOnClick(e) {
        setchangevalue(...changevalue, e.target.name)
    }
    function changeSubmit(e) {
        e.preventDefault();
        let changeerrors = {}
        if (!changevalue.changeName) {
            changeerrors.changeName = "Email Requried"
        }
        setchangeerrors(changeerrors)
        return changeerrors
    }
    return (
        <>
            <div className="logo">
                <h1 >facebook</h1>
            </div>
            <div className="F-contant">
                <div className="F-inner">
                    <h2>Find your Account</h2>
                    <hr />
                    <p>Please enter your email address to search for your account.</p>
                    <center >
                        <input
                            name='changeName'
                            type="text"
                            placeholder="Email Address" />
                    </center>
                    {changeerrors.changeName && <p className='error' style={{ color: "red", }}>{changeerrors.changeName}</p>}
                    <hr />
                    <div className="btn-div">
                        <form onSubmit={changeSubmit}>
                            <button className="cancle" onClick={() => cancleClick()}>Cancle</button>
                            <button className="search" value={changevalue.changeName} onChange={changeOnClick} >Search</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Forgottenpassword;