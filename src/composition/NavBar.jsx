import {Link, NavLink} from "react-router-dom"; 

export default function NavBar() {

    return(
        // create a navigation element with a custom CSS class
        <nav className="navigation"> 

            {/* create a Link component for the logo with a custom CSS class and a to prop */}
            <Link className="nav-logo" to="/">  
                Data Visualization <span>using D3.js</span>
            </Link>

            {/* create a div element with a custom CSS class */}
            <div className="nav-links"> 
                <NavLink 
                    to="/svg"  // set the to prop to the svg route 
                    className={"nav-link"}
                >
                    SVG
                </NavLink>

                <NavLink 
                    to="/viz-theory" // set the to prop to the viz-theory route
                    className={"nav-link"}
                >
                    Theory
                </NavLink>

                <NavLink 
                    to="/fetch-data" // set the to prop to the fetch-data route
                    className={"nav-link"}
                >
                    Data
                </NavLink>
                

                <NavLink 
                    to="/charts" // set the to prop to the charts route
                    className={"nav-link"}
                >
                    Charts
                </NavLink>

                <NavLink 
                    to="/examples" // set the to prop to the examples route
                    className={"nav-link"}
                >
                    Examples
                </NavLink>
            </div>

        </nav>
    )
}