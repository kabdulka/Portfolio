import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Footer/Footer.scss";
import { Link } from 'react-router-dom';

import "./Footer.scss";

const Footer = () => {

    return (

        <footer className='footer'>

            <div className="footer__icons">
                <Link to="https://github.com/kabdulka">
                    <GitHubIcon />
                </Link>
                <Link to="https://www.linkedin.com/in/kenan-abdulkarim">
                    <LinkedInIcon />
                </Link>
                <Link to="https://www.instagram.com/kenanseif/">
                    <InstagramIcon />
                </Link>
                <Link to="https://www.facebook.com/kenan.abdulkarim">
                    <FacebookIcon />
                </Link>
            </div>

            <div className="footer__copyright">
                <p className="footer__copyright-text">
                    &copy; Kenan Abdulkarim - 2023
                </p>
            </div>

        </footer>

    )
}

export default Footer;