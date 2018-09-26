import React, { Component } from 'react';

import logo from './../../assets/logo.png'
import foto from './../../assets/download.png'

import './NavBar.css'


class NavBar extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg nav-bar navbar-light">
                <div className="container-logo">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={logo} />
                    </a>
                </div>

                <div className="container-search-box">
                    <form className="form-inline">
                        <div className="form-group col-12">
                            <input className="form-control search col-12" type="search" placeholder="Pesquise por oportunidades..." aria-label="Search" />
                        </div>
                        <button className="btn searchbox-submit hidden-xs" type="submit">
                            <p className="icon-search-desk"></p>
                        </button>
                    </form>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu" id="navbarNav">
                    <ul className="navbar-nav link">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Meu Feed <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Coleções</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-profile">
                    <i class="fas fa-bell bell ml-3 mr-3"></i>
                    <img src={foto} className="avatar mr-1" />
                    <p>Gregory</p>
                    <i className="fas fa-chevron-down mt-2 ml-1"></i>
                </div>

            </nav>

        )
    }

}

export default NavBar