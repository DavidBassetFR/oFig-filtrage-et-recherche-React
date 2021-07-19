import React from 'react';


const NavBar = ({games, clickOnNavBar, whatuserisTyping, reinButton}) => (
  <div  className ="navbar ">
    <ul>
    <button onClick={reinButton} className="rein_btton"> Réinitialiser </button>
      {games.map(e => {
        if(whatuserisTyping) {
        if(e.toLowerCase().includes(whatuserisTyping.toLowerCase()) || whatuserisTyping === '') {
            return (
            <li onClick={() => {clickOnNavBar(e)}}className="navbar_item" key={e}> <a href={e}>{e} </a> </li>
        ) } else {
          return false
        }}
        else {
          return (
            <li onClick={() => {clickOnNavBar(e)}}className="navbar_item" key={e}> <a href={e}>{e} </a> </li>
          )}

      })}
    </ul>
  </div>
);

export default NavBar;

