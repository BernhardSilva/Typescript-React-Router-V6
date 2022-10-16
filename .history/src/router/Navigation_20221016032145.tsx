
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="navigation">
    <nav>
        <img src={logo} alt="img-logo"/>
    </nav>
    </div>
    </BrowserRouter>
  )
}

