
import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router-dom";
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="navigation">
            <nav>
                <img src={logo} alt="React Logo"/>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>


        </div>
    </BrowserRouter>
  )
}

