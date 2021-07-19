import React from 'react';


const MainSearch = ({characters, whatuserisTyping}) => (
  <div className="MainSearch">
    <div className="boxes">
    {characters.map(e => {
      if (e.game.toLowerCase().includes(whatuserisTyping.toLowerCase())){
        return (
        <div key={e.id}className="box">
        <img src={e.image}/>
        <p> {e.name}</p>
        </div> )}
      return false; 
    })} 
    </div>  
  </div>
);

export default MainSearch;
