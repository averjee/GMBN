import React from 'react';
import SearchBar from '../assets/SearchBar.png'
import PlayButton from '../assets/PlayButton.png'

const Header = ({ featured = {} }) => {
  return (
    <div className="Header">
      <img
        src={PlayButton}
        className="PlayButton"
        alt="Button"
      />
      <img
        src={`https://img.youtube.com/vi/${featured?._id}/mqdefault.jpg`}
        className="Featured"
        alt="Featured video"
      />
      <img
        src={SearchBar}
        className="SearchBar"
        alt="Search Bar"
      />
    </div>
  );
};

export default Header;
