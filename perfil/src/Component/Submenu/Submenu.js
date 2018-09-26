import React, { Component } from 'react';

import './Submenu.css'

class Submenu extends Component {
    render() {

        return (
            <div className="mt-1 submenu">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="">
                            <a className="nav-link" href="#dados-pessoais">Dados Pessoais<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="#educacao">Educação</a>
                        </li>
                        <li className="">
                            <a className="nav-link" href="#ext-profissional">Experiência Profissional</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ext-extra">Experiência Extracurriculares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#idiomas">Idiomas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reconhecimentos">Reconhecimentos</a>
                        </li>
                    </ul>
                </nav>

            </div>

        )
    }

}

export default Submenu