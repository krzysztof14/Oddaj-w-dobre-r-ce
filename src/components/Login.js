import React from "react";


const HomeLogin = () => {
  return (
    <>
      <div className="log">
        <h1>Zaloguj się</h1>
        <div className="decoration"></div>
        <form>
          <div className="log-form">
            <label>Email</label>
            <input
              type="email"
              name="email"
            />
            <label>Hasło</label>
            <input
              type="password"
              name="password"
            />
          </div>
          <div className="log-btn">
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      </div>
    </>
  );
};

export { HomeLogin };