import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MusicApp } from './feature/MusicApp';
import { MovieList } from './feature/MovieList';
import { MovieSong } from './feature/MovieSong';
import { LikedSongs } from './feature/LikedSongs';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' Component={MusicApp}>
            <Route path='/' Component={MovieList} />
            <Route path='/movie/:movieId' Component={MovieSong} />
            <Route path='/likedsongs' Component={LikedSongs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/*
 likedSongs: {399403: true, 484993: true}

    [] => search time complexity: O(n)
    {} => Map => O(1), O(1)

    Actions we do on this slice: 
      add a song into the likedSongs 
      remove a song from the likedsongs.
 playerData: { movieId: 39903, songId: 94400, index: 3}

 actions: 
  moveRight, moveLeft, changeSong

*/