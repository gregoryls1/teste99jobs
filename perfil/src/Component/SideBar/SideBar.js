import React, { Component } from "react"
import { showProfile } from "./../../Services/Api"

import avatar1 from "./../../assets/avatar1.jpg"
import avatar2 from "./../../assets/avatar2.png"

import './SideBar.css'

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

            results: [
                {
                    gender: '',
                    name: {
                        title: '',
                        first: '',
                        last: ''
                    },

                    email: '',
                    cell: '',

                    picture: {
                        large: '',
                    },

                    location: {
                        city: '',
                        state: ''
                    }
                }
            ]
        }
    }

    componentDidMount() {
        showProfile().then(dados => this.setState(dados))
    }


    render() {

        return (
            <div className="container-sidebar mt-1">
                <div className="sidebar-progress-bar pt-4 pb-5 col-12">
                    <div className="sidebar-progress">
                        <div className="progress-bar" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <p className="mt-1">Perfil 70% Completo</p>
                </div>
                <div className="sidebar-avatar">
                    <img src={this.state.results[0].picture.large} />
                </div>

                <div className="sidebar-name mt-3">
                    <h4>{`${this.state.results[0].name.first} ${this.state.results[0].name.last}`}</h4>
                </div>

                <div className="sidebar-career text-center mt-1">
                    <p>UI Designer na 99jobs.com</p>
                </div>

                <div className="sidebar-description col-11 mt-1">
                    <p>
                        Sometimes this is the irony of promoting your businesses products and services,
                        because for a fact that you want to make your business recognizable and earn
                        more sales of course you need to come lent material that.
                    </p>
                </div>

                <div className="sidebar-link">
                    <div className="col-11">
                        <h4>Link do Perfil Público</h4>
                    </div>
                    <form>
                        <div className="input-group mb-2 col-12">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i class="fas fa-link"></i>
                                </div>
                            </div>
                            <input type="text" className="form-control form-link" id="inlineFormInputGroup"
                                value="https://we.fl/o0XsMHBxhD" />
                        </div>
                    </form>
                </div>

                <div className="sidebar-match col-12 mt-3 mb-2">
                    <h4>99match</h4>
                    <div className="sidebar-match-picture">
                        <div>
                            <img src={avatar1} />
                        </div>
                        <p>Free Spirit</p>
                    </div>
                    <div className="sidebar-match-picture">
                        <div>
                            <img src={avatar2} />
                        </div>
                        <p>Ambitious</p>
                    </div>
                    <a href="#" className="sidebar-match-link">Ver 99match completo</a>
                </div>

                <div className="sidebar-contact col-12 mt-3">
                    <h4 className="mb-3">Contato</h4>
                    <div className="sidebar-icons">
                        <p><i class="far fa-envelope"></i>{this.state.results[0].email}</p>
                        <p><i class="fas fa-mobile-alt"></i>{this.state.results[0].cell}</p>
                        <p className="location"><i class="fas fa-map-marker-alt"></i>{`${this.state.results[0].location.city}, 
                            ${this.state.results[0].location.state}`}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 sidebar-social">
                        <h4>Em outros lugares</h4>
                    </div>
                    <div className="sidebar-social-list col-12">
                        <ul className="">
                            <li className="mb-2">
                                <a className="btn-floating btn-lg btn-fb">
                                    <i className="fa fa-facebook"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="btn-floating btn-lg btn-li">
                                    <i className="fa fa-linkedin"></i>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a class="btn-floating btn-lg btn-dribbble">
                                    <i class="fa fa-dribbble"></i>
                                    <span>Dribbble</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a class="btn-floating btn-lg btn-behance">
                                    <i class="fa fa-behance"></i>
                                    <span>Behance</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a class="btn-floating btn-lg btn-youtube">
                                    <i class="fa fa-youtube"></i>
                                    <span>Youtube</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a class="btn-floating btn-lg btn-safari">
                                    <i class="fa fa-safari"></i>
                                    <span>{`${this.state.results[0].name.first} ${this.state.results[0].name.last}`}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
        )
    }

}

export default SideBar