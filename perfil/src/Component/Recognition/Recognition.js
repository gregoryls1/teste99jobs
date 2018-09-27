import React, { Component } from 'react';


class Recognition extends Component {


    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    titulo: '',
                    data: '',
                    descricao: ""
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

        if (this.state.titulo == null) {
            alert('Por favor preencha titulo.')
        }
        if (this.state.data == null) {
            alert('Preencha o data.')
        }
        if (this.state.descricao == null) {
            alert('Preencha o descrição.')
        }
    }

    render() {

        return (

            <div className="mt-2 pb-3 container-fluid form-educacao" id="reconhecimentos">
                <form onSubmit={this.handleSubmit}>
                    <div className="pt-5 pb-2">
                        <h2>Reconhecimentos</h2>
                    </div>
                    <div className="container-form-educacao col-12">
                        <div className="row">

                            <div className="form-group col-12 col-md-6">
                                <label for="titulo">Titulo</label>
                                <input type="text" className="form-control"
                                    value={this.state.titulo} onChange={this.handleChange} name="titulo" />
                            </div>

                            <div className="form-group col-12 col-md-6">
                                <label for="data">Data</label>
                                <input type="text" className="form-control"
                                    value={this.state.data} onChange={this.handleChange} name="data"                                      
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa" 
                                    title="Formato da data dd/mm/aaaa"/>
                            </div>

                            <div class="form-group col-12">
                                <label for="descricao">Descrição</label>
                                <textarea class="form-control" id="descricao" rows="4"
                                    value={this.state.descricao} onChange={this.handleChange} name="descricao"></textarea>
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

export default Recognition