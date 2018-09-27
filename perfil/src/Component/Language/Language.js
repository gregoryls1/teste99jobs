import React, { Component } from 'react';

import './Language.css'

class Language extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    idioma: '',
                    nivel: ''
                }
                ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {

        let target = event.target
        let value = target.type === 'checkbox' ? target.checked : target.value
        let name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.idioma == null) {
            alert('Por favor preencha idioma.')
        }
        if (this.state.nivel == null) {
            alert('Preencha o cargo nivel.')
        }
    }

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="idiomas">
                <form onSubmit={this.handleSubmit}>
                    <div className="pt-5 pb-2">
                        <h2>Idioma</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">

                            <div className="form-group col-12 col-md-6">
                                <label for="">Idioma</label>
                                <input type="text" className="form-control"
                                    value={this.state.idioma} onChange={this.handleChange} name="idioma"/>
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <label for="nivel">Nível</label>
                                <select className="form-control"
                                    value={this.state.nivel} onChange={this.handleChange} name="nivel">
                                    <option>Avançado</option>
                                    <option>Itermediário</option>
                                    <option>Básico</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="buttons mt-5">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form >

            </div >
        )
    }
}

export default Language