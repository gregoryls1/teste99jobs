import React, { Component } from 'react';

import './Education.css'

class Education extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    universidade: '',
                    campus: '',
                    tipoFormacao: '',
                    curso: '',
                    dataInicio: '',
                    dataFinal: '',
                    responsab: '',
                    cursoAtual: ''
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

        if (this.state.universidade == null) {
            alert('Por favor preencha o campo universidade.')
        }
        if (this.state.campus == null) {
            alert('Preencha o campo campus.')
        }
        if (this.state.tipoFormacao == null) {
            alert('Por favor preencher tipo de formação.')
        }
        if (this.state.curso == null) {
            alert('Por favor Preencher curso.')
        }
        if (this.state.dataInicio == null) {
            alert('Por favor preencha data de inicio de curso')
        }
        if (this.state.dataFinal == null) {
            alert('Por favor preencha data final do curso')
        }
        let data_1 = this.state.dataInicio
        let data_2 = this.state.dataFinal
        let dateFirst = parseInt(data_1.split("/")[2].toString() + data_1.split("/")[1]
            .toString() + data_1.split("/")[0].toString())
        let dateLast = parseInt(data_2.split("/")[2].toString() + data_2.split("/")[1]
            .toString() + data_2.split("/")[0].toString());
        if (dateFirst > dateLast) {
            alert('Data final deve ser maior que a inicial!')
        }
    }

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="educacao">
                <form onSubmit={this.handleSubmit}>
                    <div className="pt-5 pb-2">
                        <h2>Educação</h2>
                    </div>

                    <div className="container-form-educacao col-12">
                        <div className="row">

                            <div className="form-group col-12 col-md-6">
                                <label for="universidade">Universidade</label>
                                <input type="text" name="universidade" id="universidade"
                                    value={this.state.universidade} onChange={this.handleChange} className="form-control" />
                            </div>

                            <div className="form-group col-6 col-md-3">
                                <label for="dataInicio">Sua data de Início</label>
                                <input type="text" name="dataInicio" id="dataInicio"
                                    value={this.state.dataInicio} onChange={this.handleChange}
                                    className="form-control"
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa"
                                    title="Formato da data dd/mm/aaaa" />
                            </div>

                            <div className="form-group col-6 col-md-3">
                                <label for="dataFinal">Sua data final</label>
                                <input type="text" name="dataFinal" id="dataFinal"
                                    value={this.state.dataFinal} onChange={this.handleChange}
                                    className="form-control"
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa"
                                    title="Formato da data dd/mm/aaaa" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group ">
                                    <label for="campus">Campus</label>
                                    <input type="text" name="campus" id="campus"
                                        value={this.state.campus} onChange={this.handleChange} className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label for="tipoFormacao">Tipo de formação</label>
                                    <input type="text" name="tipoFormacao" id="tipoFormacao"
                                        value={this.state.tipoFormacao} onChange={this.handleChange} className="form-control" />
                                </div>

                                <div class="form-group">
                                    <label for="curso">Curso</label>
                                    <select className="form-control" name="curso" id="dataInicio"
                                        value={this.state.curso} onChange={this.handleChange}>
                                        <option name="curso">Seleciona</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="cursoAtual"
                                        id="cursoAtual" value='sim' onChange={this.handleChange} />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Esse é meu curso atual
                                    </label>
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">Suas Responsabilidades</label>
                                <textarea class="form-control" id="responsabilidades" rows="4"></textarea>
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

export default Education