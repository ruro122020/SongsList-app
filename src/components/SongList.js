import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//State is accessible from the connect component
//This function gets called with all the data in the redux store
//Everytime we changed the redux state or rerun our reducers and produce a new state object the mapStateToProps function will
//rerun with the newly created state object
const mapStateToProps = (state) => {
  return { songs: state.songs };
};
//The object {selectSong} is the same as {selectSong:selectSong}
//selectSong is an action creator. The connect function is going to pass selectSong to the SongList component as a prop.
export default connect(mapStateToProps, { selectSong })(SongList);
