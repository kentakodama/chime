var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var IndexRedirect = require("react-router").IndexRedirect;
var createBrowserHistory = require("history/lib/createBrowserHistory");
var history = createBrowserHistory();

var App = require("./components/app");
var Home = require("./components/home");
var Discover = require("./components/discover/discover");
var Logout = require("./components/session/logout");
var UserPage = require("./components/user_page/user_page");
var TracksIndex = require("./components/user_page/tracks_index");
var PlaylistsIndex = require("./components/user_page/playlists_index");
var TrackPage = require("./components/track_page/track_page");
var PlaylistPage = require("./components/playlist_page/playlist_page");

var router = (
  <Router history={ history }>
    <Route name="app" path="/" component={ App }>
      <IndexRoute component={ Home } />

      <Route name="discover" path="discover" component={ Discover } />
      <Route name="logout" path="logout" component={ Logout } />

      <Route name="user" path=":username" component={ UserPage }>
        <IndexRedirect to="tracks" />
        <Route name="tracks" path="tracks" component={ TracksIndex } />
        <Route name="playlists" path="playlists" component={ PlaylistsIndex } />
      </Route>

      <Route name="track" path=":username/:track" component={ TrackPage } />
      <Route name="playlist" path=":username/playlists/:playlist"
        component={ PlaylistPage } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
