import React, { Component } from 'react';

import './ExtExperiencias.css'

class ExtExperiencias extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    titulo: '',
                    dataInicio: '',
                    dataFinal: '',
                    descricao: '',
                    pais: ''
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

        if (this.state.titulo == null) {
            alert('Por favor preencha titulo.')
        }
        if (this.state.dataInicio == null) {
            alert('Preencha o cargo data Inicio.')
        }
        if (this.state.dataFinal == null) {
            alert('Por favor preencher data final.')
        }
        if (this.state.descricao == null) {
            alert('Por favor preencher descrição.')
        }
        if (this.state.pais == null) {
            alert('Por favor preencha pais')
        }
        let data_1 = this.state.dataInicio
        let data_2 = this.state.dataFinal
        let dateFirst = parseInt(data_1.split("/")[2].toString() + data_1.split("/")[1]
            .toString() + data_1.split("/")[0].toString())
        let dateLast = parseInt(data_2.split("/")[2].toString() + data_2.split("/")[1]
            .toString() + data_2.split("/")[0].toString())
        if (dateFirst > dateLast) {
            alert('Data final deve ser maior que a inicial!')
        }

    }

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="ext-extra">
                <form onSubmit={this.handleSubmit}>
                    <div className="pt-5 pb-2">
                        <h2>Experiências Extracurriculares</h2>
                    </div>

                    <div className="container-form-educacao col-12">
                        <div className="row">

                            <div className="form-group col-12 col-md-6">
                                <label for="titulo">Titulo</label>
                                <input type="text" className="form-control"
                                    value={this.state.titulo} onChange={this.handleChange} name="titulo"/>
                            </div>

                            <div className="form-group col-6 col-md-3">
                                <label for="dataInicio">Sua data de Início</label>
                                <input type="text" className="form-control"
                                    value={this.state.dataInicio} onChange={this.handleChange} name="dataInicio"                                     
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa" 
                                    title="Formato da data dd/mm/aaaa" />
                            </div>
                            <div className="form-group col-6 col-md-3">
                                <label for="dataFinal">Sua data final</label>
                                <input type="text" className="form-control"
                                    value={this.state.dataFinal} onChange={this.handleChange} name="dataFinal"                                     
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa" 
                                    title="Formato da data dd/mm/aaaa" />
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">Descrição</label>
                                <textarea class="form-control" id="responsab" rows="4"
                                    value={this.state.descricao} onChange={this.handleChange} name="descricao"></textarea>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="pais">País</label>
                                <select className="form-control"
                                    value={this.state.pais} onChange={this.handleChange} name="pais">
                                    <option>Seleciona</option>
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

export default ExtExperiencias