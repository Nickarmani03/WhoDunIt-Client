import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const history = useHistory()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src= "https://images.squarespace-cdn.com/content/v1/54c4124ae4b02cf35cf359ad/1430665281603-Y2P9Y1TKFKS4B6GBHJ3B/That+Silly+Whodunit+Banner" />
                <div className="navbar__name"> Whodunit</div>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Welcome</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/movie">My Movies</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="/movie_night">Movie Night</Link>
            </li>
            
            <li className="navbar__item">
                    <Link className="nav-link" to="/profile">Profiles</Link>
                </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login"
                    onClick={ //allows the user to logout by removing the current user from the local storage
                        (event) => {
                            localStorage.removeItem("whodunit_token")
                        }
                    }
                >Logout</Link>
            </li>
        </ul>
    )
}
