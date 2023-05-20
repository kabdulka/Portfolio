
import "./Navbar.scss"
import "../../App.scss"
import { Link, useLocation } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState, useEffect } from "react";

const Navbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

    const handleToggleNavbar = (): void => {
        setToggleNavbar(!toggleNavbar);
    }

    const location = useLocation();

    // const handleToggleNavbar = (): void => {
    //     setToggleNavbar(prev => !prev)
    // }

    useEffect((): void => {
        setToggleNavbar(false)
    }, [location])

    return (

        <nav className={`navbar ${toggleNavbar ? "navbar--mobile": ""}`}>
            
            {/* <div className={`${toggleNavbar ? "toggleButton--mobile" : "toggleButton"}`}> */}
            <div className={`navbar__button ${toggleNavbar ? "navbar__button--mobile" : ""}`}>
                <button 
                    onClick={handleToggleNavbar} 
                    className="navbar__button"
                >

                    <ReorderIcon />          
                </button>
           </div>

            <ul className={`navbar__list ${toggleNavbar ? "navbar__list--mobile" : ""}`}>
                <li className="navbar__item">
                    <Link onClick={() => setToggleNavbar(false)} className="navbar__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/projects">
                        Projects
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/experience">
                        Experience
                    </Link>
                </li>


            </ul>

        </nav>

    )
}

export default Navbar;