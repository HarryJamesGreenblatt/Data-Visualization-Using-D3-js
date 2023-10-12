import {Link, NavLink} from "react-router-dom";

export default function Navigation() {

    return(
        <nav className="navigation">

            <Link className="nav-logo" to="/">
                Notes On Data Viz <span>feat. D3.js</span>
            </Link>

            <div className="nav-links">
                <NavLink 
                    to="/svg"
                    className={"nav-link"}
                >
                    SVG
                </NavLink>

                <NavLink 
                    to="/examples"
                    className={"nav-link"}
                >
                    Examples
                </NavLink>
            </div>

        </nav>
    )

}