import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../Navbar/Navbar2.scss"

// import "../styles/Navbar.css";

function Navbar2() {
  const [openLinks, setOpenLinks] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  useEffect(() => {
    setOpenLinks(false);
  }, [location]);

  return (
    <div className="navbar" id={openLinks ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar2;
