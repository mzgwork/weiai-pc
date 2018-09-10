import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HeaderTop  from './components/headerTop/index'
import PageFooter  from './components/pageFooter/pageFooter'
import Case from './pages/case'
import Home from './pages/home'
import Govern from './pages/govern'
import GovernDetail from './pages/governDetail'
import Place from './pages/place'
import PlaceDetail from './pages/placeDetail'
import Problems from './pages/problems'
import About from './pages/about'
import News from './pages/news'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTop/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/case' component={Case}/>
          <Route exact path='/govern' component={Govern}/>
          <Route exact path='/governDetail/:id' component={GovernDetail}/>
          <Route exact path='/place' component={Place}/>
          <Route exact path='/placeDetail/:id' component={PlaceDetail}/>
          <Route exact path='/problems' component={Problems}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/news' component={News}/>
        </Switch>
        <PageFooter/>
      </div>
    );
  }
}

export default App;
