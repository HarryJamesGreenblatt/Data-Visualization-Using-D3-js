import {Link, NavLink} from "react-router-dom";

export default function NavBar() {

    return(
        <nav className="navigation">

            <Link className="nav-logo" to="/">
                Data Visualization <span>using D3.js</span>
            </Link>

            <div className="nav-links">
                <NavLink 
                    to="/svg"
                    className={"nav-link"}
                >
                    SVG
                </NavLink>

                <NavLink 
                    to="/viz-theory"
                    className={"nav-link"}
                >
                    Theory
                </NavLink>

                <NavLink 
                    to="/fetch-data"
                    className={"nav-link"}
                >
                    Data
                </NavLink>
                

                <NavLink 
                    to="/charts"
                    className={"nav-link"}
                >
                    Charts
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