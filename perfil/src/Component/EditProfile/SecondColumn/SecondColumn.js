import React, { Component } from 'react';
import Address from './Address'

import './SecondColumn.css'

class SecondColumn extends Component {

    render() {

        return (

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
                <hr className="mb-4"/>
                <Address/>
            </div>

        )
    }
}

export default SecondColumn