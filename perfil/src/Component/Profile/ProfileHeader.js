import React, { Component } from "react"
import { showProfile } from "./../../Services/Api"

import avatar1 from "./../../assets/avatar1.jpg"
import avatar2  from "./../../assets/avatar2.png"

import './ProfileHeader.css'

class ProfileHeader extends Component {

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

                email : '',
                cell : '',

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

    componentDidMount(){
        showProfile().then(dados => this.setState(dados))
    }

    render(){

        return (
            <div className="mt-3 profile">
                <div className="profile-avatar">
                    <img src={ this.state.results[0].picture.large }/>
                </div>

                <div className="profile-name mt-3">
                    <h4 id="fullName">{`${ this.state.results[0].name.first} ${this.state.results[0].name.last }`}</h4>
                </div>

                <div className="profile-career text-center">
                    <p>UI Designer na 99jobs.com</p>
                </div>

                <div className="profile-description text-center">
                    <p>
                        Sometimes this is the irony of promoting your businesses products and services,
                        because for a fact that you want to make your business recognizable and earn
                        more sales of course you need to come lent material that.
                    </p>
                </div>

                <div className="profile-link text-center">
                    <h4>Link do Perfil Público</h4>
                    <form>
                    <div className="input-group mb-2">
                    <div className="input-group-prepend">
                     <div className="input-group-text">
                        <i class="fas fa-link"></i>
                    </div>
                   </div>
                   <input type="text" className="form-control" id="inlineFormInputGroup"
                         placeholder="https://we.fl/o0XsMHBxhD"/>

                   </div>

                    </form>
                </div>

                <div className="profile-match text-center mt-3 mb-2">
                    <h4>99match</h4>
                    <div className="profile-match-picture">
                        <img src={avatar1}/>
                        <p>Free Spirit</p>
                    </div>
                    <div className="profile-match-picture">
                        <img src={avatar2}/>
                        <p>Ambitious</p>
                    </div>
                    <a href="#" className="profile-match-link">Ver 99match completo</a>
                </div>

                <div className="profile-contact text-center">
                    <h4 className="">Contato</h4>
                    <div className="profile-icons">
                        <p><i class="far fa-envelope"></i>{ this.state.results[0].email }</p>
                        <p><i class="fas fa-mobile-alt"></i>{ this.state.results[0].cell }</p>
                        <p className="location"><i class="fas fa-map-marker-alt"></i>{`${this.state.results[0].location.city}, 
                            ${this.state.results[0].location.  state}`}</p>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-md-12 text-center social">
                        <h4>Em outros lugares</h4>
                    </div>
                    <div className="social-list">
                        <ul className="">
                            <li>
                                <a className="btn-floating btn-lg btn-fb">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="btn-floating btn-lg btn-li">
                                    <i className="fa fa-linkedin">
                                </i></a>

                            </li>
                            <li>
                                <a class="btn-floating btn-lg btn-dribbble">
                                    <i class="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a class="btn-floating btn-lg btn-behance">
                                    <i class="fa fa-behance"></i>
                                </a>
                            </li>
                            <li>
                                <a class="btn-floating btn-lg btn-youtube">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a class="btn-floating btn-lg btn-safari">
                                    <i class="fa fa-safari"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    }

}

export default ProfileHeader