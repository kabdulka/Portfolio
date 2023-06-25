
import "./Navbar.scss"
import "../../App.scss"
import { Link, useLocation } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";


const getCurrentpage = (queryStr: string): number => {
    
    if (queryStr === "/") {
        // Projects
        // console.log("navbar", queryStr)
        return 0;
    } else if (queryStr === "/experience") {
        // experience
        return 2
    } else if (queryStr === "/contact") {
        // console.log("navbar", queryStr)
        return 3
    } else if (queryStr === "/about") {
        return 4
    } else if (queryStr === "/about/main") {
        return 4
    } else if (queryStr === "/about/skills") {
        return 4
    }
    else  {
        // console.log("navbar", queryStr)
        // projects
        return 1
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

    // useEffect(() => {
    //     handleActivELinkChange( getCurrentpage(location.pathname))
    // }, [])


    // const handleToggleNavbar = (): void => {
    //     setToggleNavbar(prev => !prev)
    // }

    useEffect (() => {
        if (toggleNavbar) {

                document.body.style.overflow = 'hidden';
        } else {
                document.body.style.overflow = 'unset';
            
        }
    }, [toggleNavbar])

    useEffect((): void => {
        setToggleNavbar(false)
        handleActivELinkChange( getCurrentpage(location.pathname))
    }, [location])

    return (
 
        <nav className={`navbar ${toggleNavbar ? "navbar--mobile": ""}`}>
            
            <div className={`navbar__button ${toggleNavbar ? "navbar__button--mobile" : ""}`}>
                <button 
                    onClick={handleToggleNavbar} 
                    className={`${toggleNavbar === true ? "navbar__button--clicked" : "navbar__button"} `}
                >

                    <ReorderIcon /> 

                </button>
                <button 
                    onClick={handleToggleNavbar} 
                    className={`${toggleNavbar === false ? "navbar__button--clicked" : "navbar__button"} `}
                >

                    <CloseIcon />          
                </button>
           </div>

            <ul className={`navbar__list ${toggleNavbar ? "navbar__list--mobile" : ""}`}>
                <li className={`navbar__item `}
                    onClick={() => {
                        handleActivELinkChange(0)
                    }}
                    >
                    <Link  
                        className={`navbar__link ${activeLink === 0 || activeLink === 1 ? "navbar__link--active" : ""}`}
                        to="/"
                        >
                        Projects
                    </Link>
                </li>
                <li className={`navbar__item`}
                    onClick={() => {
                        handleActivELinkChange(1)
                    }}
                >
                    <Link 
                        className={`navbar__link ${activeLink === 4 ? "navbar__link--active" : ""}`}  
                        to="/about">
                        About
                    </Link>
                </li>
                <li className={`navbar__item`}
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
                <li className={`navbar__item `}
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