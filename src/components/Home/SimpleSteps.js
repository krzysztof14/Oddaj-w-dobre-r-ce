import React from "react";
import { NavLink } from "react-router-dom";

const SimpleSteps = () => {
  return (
    <div className="mainStep" id="SimpleSteps">
      <h3>Wystarczą 4 proste kroki</h3>
      <div className="decoration"></div>
      <div className="fourSteps">
        <div className="steps">
          <div className="icon1"></div>
          <h4>Wybierz rzeczy</h4>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps">
          <div className="icon2"></div>
          <h4>Spakuj je</h4>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="steps">
          <div className="icon3"></div>
          <h4>Zdecyduj komu chcesz pomóc</h4>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="steps">
          <div className="icon4"></div>
          <h4>Zamów kuriera</h4>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <div className="lastStep">
        <NavLink to="/logowanie">
          <button>ODDAJ RZECZY</button>
        </NavLink>
      </div>
    </div>
  );
};

export { SimpleSteps };