import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="links">
                    <a href="#">Services</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;