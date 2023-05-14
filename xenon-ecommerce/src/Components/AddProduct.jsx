import axios from "axios";
import { useState } from "react";


export const AddProduct = () => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        productImage: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        let res = await axios.post("http://localhost:8080/addProduct", values);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <><div className="login-page">
            <div className="form">

                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Product Name" name="name" onChange={handleChange} />
                    <input type="textarea" placeholder="Description" name="description" onChange={handleChange} />
                    <input type="text" placeholder="Price" name="price" onChange={handleChange} />
                    <input type="password" placeholder="" name="productImage" onChange={handleChange} />
                    <button onClick={handleSubmit}>Register</button>

                </form>

            </div>
        </div>


        </>
    );
};