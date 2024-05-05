"use client"
import { useState } from 'react';


export default function () {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdowns = () => {
        setIsOpens(!isOpens);
    };
   





    return (
        <>

            <div class="container-fluid   ">
                <nav className="navbar    navbar-expand-lg navbar-light navbar-with-bg   ">
                <a 
                 
                   
                    className="navbar-brand  advanced-button " href="/">Navbar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleDropdown}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                    <div className={` navbar-centered     collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
 
 
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active">
                                <a className="nav-link   advanced-button" href="/basic">Basic Form</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link   advanced-button" href="/radio">Form  with  checkbox</a>
                            </li>
                          
                        </ul>


                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle    advanced-button"
                                    href="#"
                                    onClick={toggleDropdowns}
                                >
                                    Dropdown
                                </a>
                                <div className={` navbar-with-drop    dropdown-menu ${isOpens ? 'show' : ''}`}>
                                    <a className="dropdown-item   advanced-button" href="/tab">Tab form</a>
                                    <a className="dropdown-item   advanced-button" href="/verticalform">Vertical Form</a>
                                    <a className="dropdown-item   advanced-button" href="/advanceform">Advance form</a>
                                </div>
                            </li>
                        </ul>
 
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                                <a className="nav-link   advanced-button" href="/tab">Tab form</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link   advanced-button" href="/verticalform">Vertical Form</a>
                        </li>
                        <li className="nav-item">
                            <a 
                               
                            
                                    className="nav-link   advanced-button" href="/advanceform">Advance form</a>
                        </li>
                    </ul>
                 
                </div>
            </nav>
</div>



        </>

    )



}