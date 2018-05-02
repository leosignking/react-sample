import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    const { location } = this.props;
    const indexClass = location.pathname === '/' ? 'active' : '';
    const clientClass = location.pathname == '/client' ? 'active' : '';
    return (
      <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <a href="../" class="navbar-brand">React Sample</a>
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse" id="navbar-main">
            <ul class="nav navbar-nav">
              <li class={ indexClass }><Link to='/'>Home</Link></li>
              <li class={ clientClass }><Link to='/client'>Client</Link></li>
            </ul>
          </div>
        </div>
      </div>      
    )
  }
}
