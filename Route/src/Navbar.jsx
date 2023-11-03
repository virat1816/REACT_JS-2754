// import React from "react";
// import { Link } from "react-router-dom";

// const Navber = () =>{
//     return(
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav">
//             <li class="nav-item active">
//             <Link to{"/"} class="nav-link" href="#">Home</Link>
//             </li>
//             <li class="nav-item">
//             <Link to{"/About"} class="nav-link" href="#">About</Link>
//             </li>
//             <li class="nav-item">
//             <Link to{"/Contact"} class="nav-link disabled" href="#">Contact</Link>
//             </li>
//         </ul>
//         </div>
//     </nav>
//     );
// };

// export default Navber;







import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link disabled">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
