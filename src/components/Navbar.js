import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar =()=> {

    return ( <>

 <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid"> <Link className="navbar-brand" to="/general"> Fast News </Link>
   <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     {/* <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/general">Home</Link> </li> */}
     <li className="nav-item"> <Link className="nav-link" to="/entertainment"> Entertainment </Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/science"> Science </Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/sport"> Sport </Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/health"> Health  </Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/general">  General </Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/business"> Business</Link>{" "} </li>
     <li className="nav-item"> <Link className="nav-link" to="/tecnology"> Tecnology </Link>{" "} </li>
   </ul>
  </div>
  </div>
 </nav>
  </>
  );
}


 Navbar.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
  loading: true
};

 Navbar.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default Navbar;
