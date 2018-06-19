import React, {Component} from 'react';
import './App.css';
import store from "./store"
import {Provider} from 'react-redux'
import ProjectsList from "./components/ProjectsList"
import Header from "./components/Header"
import ProjectDetails from "./components/ProjectDetails"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <div className="content-wrapper">
                        <ProjectsList/>
                        <ProjectDetails/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
