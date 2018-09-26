import React, { Component } from 'react';

import './Education.css'

class Education extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="educacao">
                <form>
                    <div className="pt-5 pb-2">
                        <h2>Educação</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label for="">Universidade</label>
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
                            <div className="col-12 col-md-6">
                                <div className="form-group ">
                                    <label for="">Campus</label>
                                    <input type="text" className="form-control" id="" />
                                </div>

                                <div className="form-group">
                                    <label for="">Tipo de formação</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div class="form-group">
                                    <label for="">Curso</label>
                                    <select className="form-control" id="">
                                        <option>Seleciona</option>
                                    </select>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="" />
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
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </form >

            </div >
        )
    }
}

export default Education