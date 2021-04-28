import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="header-main">
            <div className="header-image">
                <div className="header-side">
                <div className="registry">
                    <NavLink to="/logowanie"><button>Zaloguj</button></NavLink>
                    <NavLink to="/rejestracja"><button>Załóż konto</button></NavLink>
                </div>
                <div className="menu">
                    <ul className="nav-menu-list">
                        <li>
                            <NavLink to="/logowanie"><button>Start</button></NavLink>
                        </li>
                        <li>
                            <Link to="SimpleSteps"><button>O co chodzi?</button></Link>
                        </li>
                        <li>
                            <Link to="AboutUs"><button>O nas</button></Link>
                        </li>
                        <li>
                            <Link to="WhoWeHelp"><button>Fundacja i organizacje</button></Link>
                        </li>
                        <li>
                            <Link to="Contact"><button>Kontakt</button></Link>
                        </li>
                    </ul>
                </div>
                <div className="text">
                    {/* <h1 className="first-text">Zacznij pomagać</h1> */}
                    <h1> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="decoration"></div>
                </div>
                <div className="info">
                    <NavLink to="/logowanie"><button>ODDAJ RZECZY</button></NavLink>
                    <NavLink to="/logowanie"><button>ZORGANIZUJ ZBIÓRKĘ</button></NavLink>
                </div>
            </div>
        </div>
        </div>
    );
};

export { Header };