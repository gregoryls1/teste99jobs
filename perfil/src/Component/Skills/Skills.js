import React, { Component } from 'react';

import './Skills.css'

class Skills extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="habilidades">
                <form>
                    <div className="pt-5 pb-2">
                        <h2>Habilidades</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div class="form-group col-12">
                                <label for="">Nível</label>
                                <select className="form-control" id="">
                                    <option>Lawrence Sulivan</option>
                                    <option>Silas Ribeiro</option>
                                    <option>Leandro Cabral</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for=""></label>
                                <textarea class="form-control" id="responsabilidades" rows="4"></textarea>
                            </div>
                            <div className="col-12 text-center skills">
                               <p><i class="fas fa-keyboard"></i>Utilize # para adicionar <span>habilidades</span></p>
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

export default Skills