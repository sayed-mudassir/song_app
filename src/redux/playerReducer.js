import { actions } from "./actions";

const initialState = {
  // isPlaying : false,
};
export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.set_song: {
      return { ...action.payload, isPlaying: true };
    }
    case actions.toggel_play_status: {
        return {...state, isPlaying: !state.isPlaying}
    }
  }
  return state;
};
