import { Link, Outlet } from "react-router-dom";
import { Player } from "./Player.js";
import "./style/music-app.scss";
import { Badge } from "antd";

export const MusicApp = () => {
  return (
    <div className="app-wrapper">
      <div className="navbar">
        <div><Badge count={5}>
          <span className="material-icons">favorite</span>
        </Badge></div>
        <div><Link to='/' style={{color: "white", textDecoration:"none", fontSize:"20px"}}>go back</Link></div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <Player />
    </div>
  );
};
