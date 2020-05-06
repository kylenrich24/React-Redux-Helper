import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hello", duration: "4:05" },
    { title: "Baby", duration: "2:55" },
    { title: "Love", duration: "3:30" },
    { title: "BBYE", duration: "6:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
