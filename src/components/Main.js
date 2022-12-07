import React from "react";
import "../App.css"
import "bootstrap/dist/css/bootstrap.css"
import About from "./About";
import About2 from "./About2";
import About3 from "./About3";
import {useRef} from 'react';

  
const Main = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);


    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    const handleClick2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth'});
      };
    const handleClick3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth'});
      };
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page"  onClick={handleClick}>
                  Vamo neš
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  onClick={handleClick2}>
                  Vamo neš drugo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick3}>
                  Vamo neš treće
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div className="body">
           <div ref={ref}><About/></div> 
           <div ref={ref2}><About2/></div> 
           <div ref={ref3}><About3/></div> 
        </div>
    </div>
    
  );
};

export default Main;