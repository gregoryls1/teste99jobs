import React, { Component } from 'react';

import './Language.css'

class Language extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="idiomas">
                <form>
                    <div className="pt-5 pb-2">
                        <h2>Idioma</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label for="">Idioma</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">Nível</label>
                                <select className="form-control" id="">
                                    <option>Avançado</option>
                                    <option>Itermediário</option>
                                    <option>Básico</option>
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

export default Language