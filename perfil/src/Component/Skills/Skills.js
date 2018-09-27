import React, { Component } from 'react';

import './Skills.css'

class Skills extends Component {


    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    skills: '',
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

        if (this.state.skills == null) {
            alert('Preencha com suas skills.')
        }

    }

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="habilidades">
                <form onSubmit={this.handleSubmit}>
                    <div className="pt-5 pb-2">
                        <h2>Habilidades</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">
                            <div class="form-group col-12">
                                <label for="">Skills</label>
                                <input type="text" className="form-control"/>                                
                            </div>

                            <div class="form-group col-12 col-md-12">
                                <label for="skilss"></label>
                                <textarea class="form-control" id="skilss" rows="4"
                                    value={this.state.skills} onChange={this.handleChange} name="skills"></textarea>
                            </div>

                            <div className="col-12 text-center skills">
                                <p><i class="fas fa-keyboard"></i>Utilize # para adicionar <span>habilidades</span></p>
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

export default Skills