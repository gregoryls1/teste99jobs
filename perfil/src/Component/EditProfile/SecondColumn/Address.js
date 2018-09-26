import React, { Component } from 'react';


import './Address.css'

class Address extends Component {

    render() {

        return (

            <div className="">
                <h3>Endereço</h3>
                <div className="form-group mt-4">
                    <label for="">Cep</label>
                    <div className="container-lock">
                        <input type="number" className="form-control" id="" placeholder="00000-000" />
                        <div className="icon-lock">
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-8">
                        <label for="">Rua</label>
                        <div className="container-lock">
                            <input type="text" className="form-control" id="" placeholder="Rua" />
                        </div>
                    </div>
                    <div className="form-group col-4">
                        <label for="">Nº</label>
                        <div className="container-lock">
                            <input type="number" className="form-control" id="" placeholder="00" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Complemento</label>
                    <div className="container-lock">
                        <input type="text" className="form-control" id="" placeholder="Condomínio" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="">Bairro</label>
                    <div className="container-lock">
                        <input type="text" className="form-control" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-4">
                        <label for="">Estado</label>
                        <div className="container-lock">
                            <select className="form-control" id="">
                                <option>SP</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-8">
                        <label for="">Cidade</label>
                        <div className="container-lock">
                            <select className="form-control" id="">
                                <option>São Paulo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address