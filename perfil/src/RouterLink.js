import React, { Component } from 'react'
import FormEducacao  from "./Component/FormEducacao/FormEducacao"
import Experiencias from "./Component/Experiencias/Experiencias"
import ExtExperiencias from "./Component/ExtExperiencias/ExtExperiencias"
import Language from "./Component/Language/Language"
import Skills from "./Component/Skills/Skills"
import EditProfile from "./Component/EditProfile/EditProfile"

import { Switch, Route } from 'react-router-dom'

class RouterLink extends Component{

    render(){

        return(

            <div>
                <Switch>
                    <Route path="/educacao" component={ FormEducacao }/>
                    <Route path="/experiencias" component={ Experiencias }/>
                    <Route path="/experienciasextracurriculares" component={ ExtExperiencias }/>
                    <Route path="/idiomas" component={ Language }/>
                    <Route path="/habilidades" component={ Skills }/>
                    <Route path="/" component={ EditProfile }/>
                </Switch>
            </div>
        )
    }
}

export default RouterLink