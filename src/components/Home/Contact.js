import React from "react";


const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="contact-main">
        <h1>Skontaktuj się z nami</h1>
        <div className="decoration"></div>
        <form>
          <div className="contact-form">
            <div>
              <label>Wpisz swoje imię</label>
              <input
                type="text"
                name="name"
              />
            </div>
            <div>
              <label>Wpisz swoje email</label>
              <input
                type="email"
                name="email"
              />
            </div>
          </div>
          <label>Wpisz swoją waidomość</label>
          <textarea
            type="text"
            name="message"
          />
          <button type="submit">Wyślij</button>
        </form>
        <div className="fb-inst">
          <div className="fb"></div>
          <div className="inst"></div>
        </div>
      </div>
    </div>
  );
};

export { Contact };