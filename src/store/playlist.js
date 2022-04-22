import React from "react";
import playerImg from '../assets/iconsPlay.png';
import imgg from '../assets/imgg.png';

const fetchedPlaylist = [
  {
    id: 0,
    title: "1 Overview",
    url: "https://api.patmazurkiewicz.com/audio/track1.ogg",
    cover: playerImg,
    img:imgg
  },
  {
    id: 1,
    title: "2 Key Insight 1",
    url: "https://api.patmazurkiewicz.com/audio/track2.ogg",
    cover: playerImg,
    img:imgg
  },
  {
    id: 2,
    title: "3 Key Insight 2",
    url: "https://api.patmazurkiewicz.com/audio/track1.ogg",
    cover: playerImg,
    img:imgg
  },
  {
    id: 3,
    title: "4 Key Insight 3",
    url: "https://api.patmazurkiewicz.com/audio/track2.ogg",
    cover: playerImg,
    img:imgg
  },
  {
    id: 4,
    title: "5 What to see, When to see",
    url: "https://api.patmazurkiewicz.com/audio/track2.ogg",
    cover: playerImg,
    img:imgg
  },
  {
    id: 5,
    title: "6 How's the Gun do Talking?",
    url: "https://api.patmazurkiewicz.com/audio/track2.ogg",
    cover: playerImg,
    img:imgg
  }
];

// mock api request

export const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(fetchedPlaylist), 1000);
  });
};

export const PlaylistContext = React.createContext();
