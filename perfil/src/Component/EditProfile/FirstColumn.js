import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { showProfile } from "./../../Services/Api"


import './FirstColumn.css'

class FirstColumn extends React.Component {

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

            <div className="col-12 col-md-6 first-column">
                <div className="form-group mt-5 full-name">
                    <label for="">Nome Completo</label>
                    <input type="text" id="nome" className="form-control" id="" 
                    placeholder pattern="[a-Z]{3,20} [Aa-zZ]"/>
                </div>
                <div className="form-check ">
                    <input type="checkbox" className="form-check-input" id="" />
                    <label className="form-check-label">Eu possuo um nome social</label>
                </div>
                <div className="form-group mt-3 full-name">
                    <label for="">Nome Social Completo</label>
                    <input type="text" className="form-control" id="" placeholder/>
                </div>
                <div class="form-group mt-3">
                    <label for="">Foto Perfil</label>
                    <div className="container-upload">
                        <div className="upload-foto">
                            <input type="file" className="col-2" id="" />
                            <i className="far fa-image"></i>
                        </div>
                        <p>Clique ao lado para fazer upload da<br /> sua foto de perfil</p>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Resumo</label>
                    <textarea className="form-control" id="" rows="4"></textarea>
                </div>
                <div className="form-group">
                    <label for="">Email</label>
                    <div className="container-lock">
                        <input type="email" className="form-control" id="" placeholder={`${this.state.results[0].email}`} />
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">CPF</label>
                    <div className="container-lock">
                        <input type="number" className="form-control" id="" placeholder="000.000.000-00" />
                        <div className="icon-lock-cpf">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Telefone</label>
                    <div className="container-lock">
                        <input type="tel" className="form-control" id="" placeholder="11 99999-9999" 
                                pattern="[0-9]{2} [0-9]{4,6}-[0-9]{3,4}$"/>
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Gênero</label>
                    <div className="container-lock">
                        <select className="form-control" id="">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Outros</option>
                        </select>
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Data de Nascimento</label>
                    <div className="container-lock">
                        <input type="text" className="form-control" id="" placeholder="dd/mm/aaaa" />
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Estado Civil</label>
                    <div className="container-lock">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Solteiro</option>
                            <option>Casado</option>
                            <option>Viúvo</option>
                        </select>
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Possui alguma deficiência?</label>
                    <div className="container-lock container-radio">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="" value="sim" />
                            <label class="form-check-label" for="">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="" value="nao" />
                            <label class="form-check-label" for="">Não</label>
                        </div>
                        <div className="icon-lock ml-5">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Disponível para mudança de residência?</label>
                    <div className="container-lock container-radio">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="" value="sim" />
                            <label class="form-check-label" for="">Sim</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="" value="nao" />
                            <label class="form-check-label" for="">Não</label>
                        </div>

                        <div className="icon-lock ml-5">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FirstColumn