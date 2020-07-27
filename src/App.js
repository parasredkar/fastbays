import React, { Component } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile/Profile'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="background">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Profile" component={Profile} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
