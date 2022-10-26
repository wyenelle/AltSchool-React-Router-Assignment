import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="container">
      
      <p>Looks like the page you are looking for could not be found.</p>
      <br />
      <div >
      <Link className="go-home" to='/'>Go back Home</Link>

      </div>
    </div>
  );
};

export default NotFound;
