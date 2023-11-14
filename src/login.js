import React, { useEffect, useState } from "react";
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios";


const Login = () => {
    const [match, setMatch] = useState(false)
    const [dbData, setDbData] = useState()
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/forgottenpassword')
    }
    const signupNavigate = useNavigate();
    const signupClick = () => {
        signupNavigate('/signup')
    }
    const [values, setValues] = useState({
        name: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        //Password match logic Start
        const checkLength = dbData.filter((d) => {
            if (d.email === values.name && d.newPassword === values.password) {
                //Password is correct Logic would be here
                navigate("/home")
            }
            else {
                return d
            }
        })
        if (dbData.length === checkLength.length) {
            alert("Credentials is not Valid")
            //Password is not correct Logic would be here
        }
         //Password match logic end

        let errors = {}
        if (!values.name) {
            errors.name = "Name Required"
        }
        else if (values.name.length < 5) {
            errors.name = "Name must be more than 5 character"
        }
        if (!values.password) {
            errors.password = "Password Required"
        }
        else if (values.password.length < 5) {
            errors.password = "Password must be more than 8 character"
        }
        setErrors(errors)
        return errors
    }
    const getDBData = async () => {
        const result = await axios.get("http://localhost:8000/users")
        setDbData(result.data)
    }
    useEffect(() => {
        getDBData();
        // console.log("Hamza 's Code")
    },[])
    useEffect(() => setMatch(false), [match])

    return (
        <div className="login">

            <div className="left-contant">

                <h1>facebook</h1>
                <h3>Facebook helps you connect and share with the people in your life.</h3>
            </div>
            <div className="right-contant">
                <form onSubmit={handleSubmit}>
                    <center>
                        <input
                            type="text"
                            className="email"
                            placeholder="Email Address"
                            value={values.name}
                            name="name"
                            id="name"
                            onChange={handleChange}
                        />
                    </center>
                    {errors.name && <p style={{ color: "red", fontSize: "13px", marginLeft: "26px" }}>{errors.name}</p>}

                    <center>
                        <input
                            type="password"
                            className="password"
                            placeholder="Password"
                            value={values.password}
                            name="password"
                            id="password"
                            onChange={handleChange}
                        />
                    </center>
                    {errors.password && <p style={{ color: "red", fontSize: "13px", marginLeft: "26px", marginBottom: "10px" }}>{errors.password}</p>}
                    <center>
                        <button type="Submit" className="btn-login"  >
                            Log in
                        </button>
                    </center>
                    <center>
                        <div className="forgottenpassword" onClick={() => handleClick()}>Forgotten Password?</div>
                    </center>
                    <div className="line"></div>
                    <center>
                        <button className="signup" onClick={() => signupClick()}>Create new account </button>
                    </center>
                </form>
            </div>

        </div>
    );

}
export default Login;
