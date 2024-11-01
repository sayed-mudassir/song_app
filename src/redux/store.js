import { combineReducers, legacy_createStore as createStore } from "redux";
import { likedSongsReducer } from "./likedSongsReducer";
import { playerReducer } from "./playerReducer";
import { songsReducer } from "./songReducer";

const rootReducer = combineReducers({
    likedSongs : likedSongsReducer, 
    player : playerReducer,
    movies : songsReducer
})

export const store = createStore(rootReducer);

// export default store; 

/**
{
    likedSongs: {},
    player: {}
}
*/

// a reducer is function which takes the previous state and return newstate based on action.
