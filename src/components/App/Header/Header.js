import React from 'react';


const Header = ({games, UserIsTyping, whatuserisTyping}) => (
  <div className="Header">
   <h1> oFig - nintendo </h1>
    <p> {whatuserisTyping? games.filter(a => a.toLowerCase().includes(whatuserisTyping.toLowerCase())).length : games.length}jeux </p>
    <input onChange={UserIsTyping} type="text" className="lookingFor" placeholder="Rechercher..." /> 
  </div>
);

export default Header;
