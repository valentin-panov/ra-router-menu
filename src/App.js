import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

export default function App() {
  return (
    <Router>
      <div>
        <Menu>
          <nav className='menu'>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to='/'
            >
              ГЛАВНАЯ
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to='/drift'
            >
              ДРИФТ-ТАКСИ
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to='/timeattack'
            >
              TIME ATTACK
            </NavLink>
            <NavLink
              className='menu__item'
              activeClassName='menu__item-active'
              exact
              to='/forza'
            >
              FORZA KARTING
            </NavLink>
          </nav>
        </Menu>
      </div>
      <div className='page'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/drift' component={DriftPage} />
          <Route path='/timeattack' component={TimeAttackPage} />
          <Route path='/forza' component={ForzaPage} />
        </Switch>
      </div>
    </Router>
  );
}
