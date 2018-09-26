import React, { Component } from 'react';

import './ExtExperiencias.css'

class ExtExperiencias extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="ext-extra">
                <form>
                    <div className="pt-5 pb-2">
                        <h2>Experiências Extracurriculares</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label for="">Titulo</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="form-group col-6 col-md-3">
                                <label for="">Sua data de Início</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="form-group col-6 col-md-3">
                                <label for="">Sua data final</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">Descrição</label>
                                <textarea class="form-control" id="responsabilidades" rows="4"></textarea>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">País</label>
                                <select className="form-control" id="">
                                    <option>Seleciona</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="buttons mt-5">
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </form >

            </div >
        )
    }
}

export default ExtExperiencias