import { useEffect, useRef, useState } from "react";
import "./style/player.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";

const breakTime = (time) => {
  let mins = parseInt(time / 60);
  return `${mins} : ${time - mins * 60}`;
};

const playerInfoSelector = (state) => {
  const playerInfo = state.player;
  const movies = state.movies;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == playerInfo.movieId) {
      const songInfo = movies[i].songs.filter(
        (song) => song.id === playerInfo.songId
      )[0];
      return {
        title: songInfo.title,
        fileAddress: songInfo.fileAddress,
        imageUrl: movies[i].displayPicture,
        isPlaying: playerInfo.isPlaying,
        ...playerInfo,
      };
    }
  }
  return null;
};

export const Player = () => {
  const isLiked = true;
  const playerInfo = useSelector(playerInfoSelector);
  const [totalDuration, setTotalDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [seekTime, setSeektime] = useState(0);
  const dispatch = useDispatch();

  const playWidth = (seekTime / totalDuration) * 100 + "%";
  const audioRef = useRef(null);

  const toggelPlay = () => {
    dispatch({
      type: actions.toggel_play_status,
    });
  };

  const onTimeUpdate = (e) => {
    setSeektime(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (playerInfo?.isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [playerInfo?.isPlaying, playerInfo?.songId]);

  if (!playerInfo) return null;
  return (
    <div className="player-content">
      <div className="left">
        <img src={playerInfo.imageUrl} />
        <h3>{playerInfo.title}</h3>
        <button
          style={{ color: isLiked ? "red" : "white" }}
          className="material-icons btn-icon"
        >
          favorite
        </button>
      </div>
      <audio
        onCanPlayThrough={() => setTotalDuration(audioRef.current.duration)}
        ref={audioRef}
        src={"/" + playerInfo.fileAddress}
        onTimeUpdate={onTimeUpdate}
        controls
        className="native-audio"
      ></audio>
      <div className="custom-player">
        <div>
          <button className="material-icons btn-icon">skip_previous</button>
          <button className="material-icons btn-icon" onClick={toggelPlay}>
            {playerInfo.isPlaying ? "pause" : "play_arrow"}
          </button>
          <button className="material-icons btn-icon">skip_next</button>
        </div>
        <div className="play-bar">
          <span>{breakTime(parseInt(seekTime))}</span>
          <div className="bar">
            <div className="seek-bar" style={{ width: playWidth }}></div>
          </div>
          <span>{breakTime(parseInt(totalDuration))}</span>
        </div>
      </div>
      <div className="controls">

      </div>
    </div>
  );
};
