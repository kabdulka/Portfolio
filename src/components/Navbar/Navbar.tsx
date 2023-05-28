
import "./Navbar.scss"
import "../../App.scss"
import { Link, useLocation } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState, useEffect } from "react";

const getCurrentpage = (queryStr: string): number => {
    
    if (queryStr === "/") {
        return 0;
    } else if (queryStr === "/projects") {
        return 1
    } else if (queryStr === "/experience") {
        return 2
    } else {
        return 3
    }
}

const Navbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<number>(0);

    const location = useLocation();
  
    const handleToggleNavbar = (): void => {
        setToggleNavbar(!toggleNavbar);
    }

    const handleActivELinkChange = (pageId: number):void => {
        setActiveLink(pageId)
    }

    useEffect(() => {
        handleActivELinkChange( getCurrentpage(location.pathname))
    }, [])


    // const handleToggleNavbar = (): void => {
    //     setToggleNavbar(prev => !prev)
    // }

    useEffect((): void => {
        setToggleNavbar(false)
    }, [location])

    return (

        <nav className={`navbar ${toggleNavbar ? "navbar--mobile": ""}`}>
            
            <div className={`navbar__button ${toggleNavbar ? "navbar__button--mobile" : ""}`}>
                <button 
                    onClick={handleToggleNavbar} 
                    className="navbar__button"
                >

                    <ReorderIcon />          
                </button>
           </div>

            <ul className={`navbar__list ${toggleNavbar ? "navbar__list--mobile" : ""}`}>
                <li className={`navbar__item ${activeLink === 0 ? "navbar__item--active" : ""}`}
                    onClick={() => {
                        handleActivELinkChange(0)
                    }}
                    >
                    <Link  
                        className={`navbar__link ${activeLink === 0 ? "navbar__link--active" : ""}`}
                        to="/"
                        >
                        Home
                    </Link>
                </li>
                <li className={`navbar__item ${activeLink === 0 ? "navbar__item--active" : ""}`}
                    onClick={() => {
                        handleActivELinkChange(1)
                    }}
                >
                    <Link 
                        className={`navbar__link ${activeLink === 1 ? "navbar__link--active" : ""}`}  
                        to="/projects">
                        Projects
                    </Link>
                </li>
                <li className={`navbar__item ${activeLink === 0 ? "navbar__item--active" : ""}`}
                    onClick={() => {
                        handleActivELinkChange(2)
                    }}
                >
                    <Link 
                        className={`navbar__link ${activeLink === 2 ? "navbar__link--active" : ""}`} 
                        to="/experience">
                        Experience
                    </Link>
                </li>
                <li className={`navbar__item ${activeLink === 0 ? "navbar__item--active" : ""}`}
                    onClick={() => {
                        handleActivELinkChange(3)
                    }}
                >
                    <Link 
                        className={`navbar__link ${activeLink === 3 ? "navbar__link--active" : ""}`} 
                        to="/contact">
                        Contact
                    </Link>
                </li>


            </ul>

        </nav>

    )
}

export default Navbar;