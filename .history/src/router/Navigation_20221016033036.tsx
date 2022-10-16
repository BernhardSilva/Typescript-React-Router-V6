
import { BrowserRouter, Routes, Route, Outlet, NavLink } from "react-router-dom";
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="navigation">
            <nav>
                <img src={logo} alt="React Logo"/>
            </nav>
        </div>
    </BrowserRouter>
  )
}

