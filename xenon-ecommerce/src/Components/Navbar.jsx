import "../Stylesheets/Navbar.css"


export const Navbar = () => {

    return (
        <>

            <nav>
                <h2>Title</h2>
                <ul>
                    <li><a href="/addProduct">Add Product</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>

        </>
    );
};