var React = require("react");
var SessionActions = require("../../actions/session_actions");
var NavSessionLinks = require("./nav_session_links");
var History = require("react-router").History;

var NavSession = React.createClass({
  mixins: [History],

  _signUp: function (e) {
    this.history.pushState(null, "/signup", {});
  },

  _login: function (e) {
    this.history.pushState(null, "/login", {});
  },

  _logout: function (e) {
    SessionActions.logout();
    this.history.pushState(null, "/", {});
  },

  loggedIn: function () {
    return (
      <div className="nav navbar-right">
        <NavSessionLinks history={ this.history } />

        <button className="btn btn-default navbar-btn"
          onClick={ this._logout }>Logout</button>
      </div>
    );
  },

  loggedOut: function () {
    return (
      <div className="nav navbar-right">
        <button className="btn btn-default navbar-btn"
          onClick={ this._signUp }>Sign Up</button>

        <span> </span>

        <button className="btn btn-default navbar-btn"
          onClick={ this._login }>Login</button>
      </div>
    );
  },

  render: function () {
    return (
      <div className="collapse navbar-collapse">
        { this.props.isLoggedIn ? this.loggedIn() : this.loggedOut() }
      </div>
    );
  }
});

module.exports = NavSession;