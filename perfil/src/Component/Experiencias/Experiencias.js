import React, { Component } from 'react';

import './Experiencias.css'

class Experiencias extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    cargo: '',
                    cargoAtual: '',
                    nivel: '',
                    dataInicio: '',
                    dataFinal: '',
                    responsab: '',
                    nomeEmpresa: '',
                    siteEmpresa: ''
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

        if (this.state.cargo == null) {
            alert('Por favor preencha cargo.')
        }
        if (this.state.cargoAtual == null) {
            alert('Preencha o cargo atual.')
        }
        if (this.state.nivel == null) {
            alert('Por favor preencher nivel.')
        }
        if (this.state.dataInicio == null) {
            alert('Por favor preencher data inicio.')
        }
        if (this.state.dataFinal == null) {
            alert('Por favor preencher data inicio.')
        }
        if (this.state.responsab == null) {
            alert('Por favor preencha responsabilidades')
        }
        if (this.state.nomeEmpresa == null) {
            alert('Por favor preencha nome da empresa')
        }
        if (this.state.siteEmpresa == null) {
            alert('Por favor preencha site empresa')
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

            <div className="mt-2 pb-3 container-fluid form-educacao" id="ext-profissional">
                <h2 className="pt-5 pb-2">Experiências Profissionais</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class="col-12 container-form-educacao">
                        <div className="row">

                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Cargo</label>
                                <input type="text" class="form-control"
                                    value={this.state.cargo} onChange={this.handleChange} name="cargo" />
                            </div>

                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Nome da Empresa</label>
                                <input type="text" class="form-control"
                                    value={this.state.nomeEmpresa} onChange={this.handleChange} name="nomeEmpresa" />
                            </div>

                            <div class="form-check col-12 ml-3 mt-1">
                                <input class="form-check-input" type="checkbox"
                                    value='sim' onChange={this.handleChange} name="cargoAtual" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Esse é meu argo atual
                                </label>
                            </div>

                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Nível</label>
                                <select class="form-control" value={this.state.nivel}
                                    onChange={this.handleChange} name="nivel">
                                    <option>Selecione</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Site da Empresa</label>
                                <input type="text" class="form-control"
                                    value={this.state.siteEmpresa} onChange={this.handleChange} name="siteEmpresa" />
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

                            <div class="form-group col-12 col-md-6 mt-2 ml-1">
                                <label for="responsab">Suas Responsabilidades</label>
                                <textarea class="form-control" rows="5"
                                    value={this.state.responsab} onChange={this.handleChange} ></textarea>
                            </div>

                        </div>

                    </div>
                    <div className="buttons mt-5">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experiencias