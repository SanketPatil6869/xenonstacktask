import axios from "axios";
import "../Stylesheets/Login.css"
import { useState } from "react";

export const Register = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        mobile: "",
        pass: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();


        console.log(values);

        await axios.post("http://localhost:8080/register", values);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <><div className="login-page">
            <div className="form">

                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" name="name" onChange={handleChange} />
                    <input type="text" placeholder="email address" name="email" onChange={handleChange} />
                    <input type="text" placeholder="Mobile No" name="mobile" onChange={handleChange} />
                    <input type="password" placeholder="password" name="pass" onChange={handleChange} />
                    <button onClick={handleSubmit}>Register</button>

                </form>
                <p className="message">
                    Already registered? <a href="/">Create an account</a>
                </p>
            </div>
        </div>


        </>
    );
};