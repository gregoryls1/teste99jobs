import React, { Component } from 'react';


class Recognition extends Component {

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="reconhecimentos">
                <form>
                    <div className="pt-5 pb-2">
                        <h2>Reconhecimentos</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label for="">Titulo</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label for="">Data</label>
                                <input type="text" className="form-control" id="" />
                            </div>
                            <div class="form-group col-12">
                                <label for="">Descrição</label>
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

export default Recognition