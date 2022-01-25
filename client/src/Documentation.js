import React from 'react';
import { Link } from 'react-router-dom';
import arcPic from './arc.png';

export default () => {
  return (
    <div>
      <h3>Architektura</h3>
      <img src={arcPic} alt="arc"/>
      
      <h3>Opis</h3>
      <p></p>
      Zadanie wykonane na podstawie lab9.<br/>
      Modyfikacje:<br/>
        - podpiie plikow js do odpowiednich sciezek, tworzenie zalznosci<br/>
        - dodanie histori wprowadzanych indexow<br/>
        - utworzenie dokumentacji

      
      <p>
      <Link to="">Go back home</Link>
      </p>
    </div>
  );
};
