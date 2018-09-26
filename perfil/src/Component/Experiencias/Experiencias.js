import React, { Component } from 'react';

import './Experiencias.css'

class Experiencias extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="ext-profissional">
                <h2 className="pt-5 pb-2">Experiências Profissionais</h2>
                <form>
                    <div class="col-12 container-form-educacao">
                        <div className="row">
                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Cargo</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Nome da Empresa</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="form-check col-12 ml-3 mt-1">
                                <input class="form-check-input" type="checkbox" value="" id="" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Esse é meu argo atual
                                </label>
                            </div>
                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Nível</label>
                                <select class="form-control">
                                    <option>Selecione</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-6 mt-1">
                                <label>Site da Empresa</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div className="form-group col-6 col-md-3">
                                <label for="">Sua data de Início</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="form-group col-6 col-md-3">
                                <label for="">Sua data final</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div class="form-group col-12 col-md-6 mt-2 ml-1">
                                <label for="exampleFormControlTextarea1">Suas Responsabilidades</label>
                                <textarea class="form-control" id="responsabilidades" rows="5"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="buttons mt-5">
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Experiencias