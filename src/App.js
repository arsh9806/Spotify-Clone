import React, { useState, useEffect } from 'react';
import Login from "../src/Components/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './utils/spotify';
import {useDataLayerValue} from "./State-Management/DataLayer";
import Player from "./Components/Player";
import './App.css';

const spotify = new SpotifyWebApi();
function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe()
      .then(user => {
        dispatch({
          type: 'SET_USER',
          user:  user
        });
      });
      spotify.getUserPlaylists()
      .then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotify.getPlaylist('2KtgJQ9ODGmVVvEYxnCda9')
      .then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }

  }, []);
  console.log(token);

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
