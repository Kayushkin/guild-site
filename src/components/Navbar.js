import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">#showtooltip</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/roster">Roster</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hall of Fame</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Stats</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar