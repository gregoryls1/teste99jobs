import React, { Component } from 'react';
import NavBar from './Component/NavBar/NavBar'
import ProfileHeader from './Component/Profile/ProfileHeader'
import Submenu from './Component/Submenu/Submenu'
import SideBar from './Component/SideBar/SideBar'
import Education from "./Component/Education/Education"
import Experiencias from "./Component/Experiencias/Experiencias"
import ExtExperiencias from "./Component/ExtExperiencias/ExtExperiencias"
import Language from "./Component/Language/Language"
import Skills from "./Component/Skills/Skills"
import EditProfile from "./Component/EditProfile/EditProfile"
import Recognition from "./Component/Recognition/Recognition"

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <div className="profile-header">
            <ProfileHeader />
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar col-md-4 col-lg-3">
              <SideBar />
            </div>
            <div className="col-md-8 col-lg-9">
              <Submenu />
              <EditProfile />
              <Education />
              <Experiencias />
              <ExtExperiencias />
              <Language />
              <Skills />
              <Recognition />
            </div>
          </div>

        </div>


      </div>
    );
  }
}

export default App;
