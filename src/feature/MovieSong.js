import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style/song-list.scss";
import { actions } from "../redux/actions";

export const MovieSong = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { songId, isPlaying } = useSelector((state) => state.player);
  const songs = useSelector((state) => {
    return state.movies.filter((movie) => movie.id == movieId)[0].songs;
  });

  console.log();
  const setPlayer = (songId, index) => {
    dispatch({
      type: actions.set_song,
      payload: { songId, movieId, songIndex: index },
    });
  };
  return (
    <div className="song-list">
      {
        
        songs.map((song, index) => {
        const isLiked = true;
        return (
          <div key={song.id} className="song">
            <p>{song.title}</p>
            <div className="btn">
              <button
                className="material-icons"
                onClick={() => setPlayer(song.id, index)}
              >
                {isPlaying && song.id === songId ? "pause" : "play_arrow"}
              </button>
              <button
                className="material-icons"
                style={{ color: isLiked ? "red" : "blue" }}
              >
                favorite
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
