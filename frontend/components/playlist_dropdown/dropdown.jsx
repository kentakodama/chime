var React = require("react");
var ProfileStore = require("../../stores/profile_store");
var Playlist = require("./playlist");

var Dropdown = React.createClass({
  getInitialState: function () {
    return { playlists: ProfileStore.getPlaylists() }
  },

  renderPlaylists: function () {
    var trackId = this.props.trackId;

    return this.state.playlists.map(function (playlist, idx) {
      return (
        <Playlist key={ idx }
          playlist={ playlist } trackId={ trackId }/>
      );
    });
  },

  render: function () {
    return (
      <div className="playlist-dropdown">
        <p>Dropdown</p>

        <ul>
          { this.renderPlaylists() }
        </ul>
      </div>
    );
  }
});

module.exports = Dropdown;