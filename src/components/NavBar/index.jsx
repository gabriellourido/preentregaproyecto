import React from "react"
import CartWidget from "../CartWidget"
import './styles.scss'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Computación</a></li>
                                <li><a className="dropdown-item" href="/#">Celular y Telefonía</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Otros Articulos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contacto</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    <div>
                    <CartWidget/>
                    </div>
                    <span>2</span>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar