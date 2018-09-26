import React, { Component } from 'react';


import FirstColumn from './FirstColumn'
import SecondColumn from './SecondColumn/SecondColumn'

import './EditProfile.css'

class EditProfile extends Component {

    render() {

        return (

            <form className="mt-2 pb-3 container-fluid form-edit-profile" id="dados-pessoais">
                <div className="pt-5">
                    <h2>Dados Pessoais</h2>
                </div>
                <div className="row">
                    <FirstColumn />
                    <SecondColumn />
                </div>
                <div className="buttons mt-5">
                    <button type="button" className="btn btn-light">Cancelar</button>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>

        )
    }
}

export default EditProfile