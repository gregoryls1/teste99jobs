import React, { Component } from 'react';
import './EditProfile.css'

class EditProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input:
                [{
                    nome: '',
                    resumo: '',
                    email: '',
                    cpf: '',
                    tel: '',
                    genero: '',
                    dataNascimento: '',
                    estCivil: '',
                    portDeficiencia: '',
                    dispMudanca: '',
                    cep: '',
                    rua: '',
                    numero: '',
                    bairro: '',
                    estado: '',
                    cidade: ''
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

        if(this.state.nome == null){
            alert('Por favor preencher nome completo')
        }        
        if (this.state.resumo == null) {
            alert('Faça um breve resumo sobre você.')
        }
        if (this.state.email == null) {
            alert('Por favor preencher email.')
        }
        if (this.state.genero == null) {
            alert('Por favor escolha uma opção de genero')
        }
        if (this.state.cpf == null) {
            alert('Por favor escolha uma opção de genero')
        }
        if (this.state.tel == null) {
            alert('Por favor preencher campo de telefone.')
        }
        if (this.state.dataNasc == null) {
            alert('Por favor preencher campo data de nascimento')
        }
        if (this.state.estCivil == null) {
            alert('Por favor selecionar estado civil')
        }
        if (this.state.portDeficiencia == null) {
            alert('Selecione uma opção em portador de deficiencia')
        }
        if (this.state.dispMudanca == null) {
            alert('Selecione uma opção em disponivel para mudança')
        }
        if (this.state.cep == null) {
            alert('Por favor preencha o cep')
        }
        if (this.state.rua == null) {
            alert('Por favor preencha o rua')
        }
        if (this.state.numero = null) {
            alert('Por favor preencha o numero residencia')
        }
        if (this.state.bairro = null) {
            alert('Por favor preencha o bairro')
        }
        if (this.state.estado = null) {
            alert('Por favor preencha o estado')
        }
        if (this.state.cidade = null) {
            alert('Por favor preencha o cidade')
        }
    }

    render() {

        return (

            <form className="mt-2 pb-3 container-fluid form-edit-profile"
                onSubmit={this.handleSubmit} name="formDadosPessoais">
                <div className="pt-5">
                    <h2>Dados Pessoais</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 first-column">

                        <div className="form-group mt-5 full-name">
                            <label for="nome">Nome Completo</label>
                            <span className="span" id="span"><br />Preencha o Campo</span>
                            <input type="text" name="nome" value={this.state.nome}
                                onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-check ">
                            <input type="checkbox" className="form-check-input" id="" />
                            <label className="form-check-label">Eu possuo um nome social</label>
                        </div>

                        <div className="form-group mt-3 full-name">
                            <label for="">Nome Social Completo</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div class="form-group mt-3">
                            <label for="">Foto Perfil</label>
                            <div className="container-upload">
                                <div className="upload-foto">
                                    <input type="file" className="col-2" id="" />
                                    <i className="far fa-image"></i>
                                </div>
                                <p>Clique ao lado para fazer upload da<br /> sua foto de perfil</p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="resumo">Resumo</label>
                            <textarea className="form-control" value={this.state.resumo}
                                onChange={this.handleChange}
                                id="resumo" name="resumo" rows="4"></textarea>
                        </div>

                        <div className="form-group">
                            <label for="email">Email</label>
                            <div className="container-lock">
                                <input type="email" className="form-control" value={this.state.email}
                                    onChange={this.handleChange} id="email" name="email"/>
                                <div className="icon-lock">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="cpf">CPF</label>
                            <div className="container-lock">
                                <input type="text" className="form-control" value={this.state.cpf}
                                    onChange={this.handleChange} id="cpf" name="cpf"
                                    placeholder="000.000.000-00" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    title="Digite o CPF no formato 000.000.000-00" />
                                <div className="icon-lock-cpf">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="tel">Telefone</label>
                            <div className="container-lock">
                                <input type="text" className="form-control" id="tel" name="tel" value={this.state.tel}
                                    onChange={this.handleChange} placeholder="11 99999-9999"
                                    pattern="[0-9]{2} [0-9]{4,6}-[0-9]{3,4}$"
                                    title="Formato de telefone 11 99999-9999" />
                                <div className="icon-lock">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="genero">Gênero</label>
                            <div className="container-lock">
                                <select className="form-control" id="genero" name="genero"
                                    value={this.state.genero} onChange={this.handleChange}>
                                    <option value="marculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outros">Outros</option>
                                </select>
                                <div className="icon-lock">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="dataNasc">Data de Nascimento</label>
                            <div className="container-lock">
                                <input type="text" className="form-control" id="dataNasc" name="dataNasc"
                                    value={this.state.dataNasc} onChange={this.handleChange} 
                                    pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$" placeholder="dd/mm/aaaa" 
                                    title="Formato da data dd/mm/aaaa"/>
                                <div className="icon-lock">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="estCivil">Estado Civil</label>
                            <div className="container-lock">
                                <select className="form-control" id="estCivil" name="estCivil"
                                    value={this.state.estCivil} onChange={this.handleChange}>
                                    <option value="solteiro">Solteiro</option>
                                    <option value="casado">Casado</option>
                                    <option value="viúvo">Viúvo</option>
                                </select>
                                <div className="icon-lock">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="portDeficiencia">Possui alguma deficiência?</label>
                            <div className="container-lock container-radio">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="portDeficiencia"
                                        name="portDeficiencia"
                                        value='sim' onChange={this.handleChange} />
                                    <label class="form-check-label" for="portDeficiencia">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="portDeficiencia"
                                        name="portDeficiencia"
                                        value='não' onChange={this.handleChange} />
                                    <label class="form-check-label" for="portDeficiencia">Não</label>
                                </div>
                                <div className="icon-lock ml-5">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="dispMudanca">Disponível para mudança de residência?</label>
                            <div className="container-lock container-radio">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="dispMudanca"
                                        name="dispMudanca"
                                        value='sim' onChange={this.handleChange} />
                                    <label class="form-check-label" for="dispMudanca">Sim</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" id="dispMudanca"
                                        name="dispMudanca"
                                        value='não' onChange={this.handleChange} />
                                    <label class="form-check-label" for="dispMudanca">Não</label>
                                </div>

                                <div className="icon-lock ml-5">
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 second-column">
                        <h3>Redes Sociais</h3>

                        <div className="form-group mt-5">
                            <label for="">Facebook</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-facebook ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="">Linkedin</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-linkedin ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="">Dribbble</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-dribbble ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="">Behance</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-behance ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Youtube</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-youtube ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="">Website</label>
                            <div className="container-input-social">
                                <div className="box-icon">
                                    <i className="fa fa-safari ml-1"></i>
                                </div>
                                <input type="text" className="form-control input-social" id="" placeholder="      http://" />
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <div className="">
                            <h3>Endereço</h3>

                            <div className="form-group mt-4">
                                <label for="cep">Cep</label>
                                <div className="container-lock">
                                    <input type="number" className="form-control" id="cep" name="cep"
                                        value={this.state.cep} onChange={this.handleChange} placeholder="00000-000" />
                                    <div className="icon-lock">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-8">
                                    <label for="rua">Rua</label>
                                    <div className="container-lock">
                                        <input type="text" className="form-control" id="rua" name="rua"
                                            value={this.state.rua} onChange={this.handleChange} placeholder="Rua" />
                                    </div>
                                </div>


                                <div className="form-group col-4">
                                    <label for="numero">Nº</label>
                                    <div className="container-lock">
                                        <input type="number" className="form-control" id="numero" name="numero"
                                            value={this.state.numero} onChange={this.handleChange} placeholder="00" />
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
                                <label for="bairro">Bairro</label>
                                <div className="container-lock">
                                    <input type="text" className="form-control" id="bairro"
                                        value={this.state.bairro} onChange={this.handleChange} name="bairro" />
                                </div>
                            </div>


                            <div className="row">
                                <div className="form-group col-4">
                                    <label for="estado">Estado</label>
                                    <div className="container-lock">
                                        <select className="form-control" id="estado" name="estado"
                                            value={this.state.estado} onChange={this.handleChange}>
                                            <option>SP</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group col-8">
                                    <label for="cidade">Cidade</label>
                                    <div className="container-lock">
                                        <select className="form-control" id="cidade" name="cidade"
                                            value={this.state.cidade} onChange={this.handleChange}>
                                            <option>São Paulo</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>                </div>
                <div className="buttons mt-5">
                    <button type="button" className="btn btn-light">Cancelar</button>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>

        )
    }
}

export default EditProfile