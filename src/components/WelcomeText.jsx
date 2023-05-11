import React, { useState, useEffect } from "react";

const WelcomeText = function () {
  const [user, setUser] = useState("name");

  useEffect(() => {
    const name = prompt("What's your name?");
    if (name === null || name === ""){
        setUser("ghost");
    }else{
        setUser(name);
    }
  }, []);
  

  return (
    <div className="welcome__text">
      <h1>
        Whats'up, <span id="user__name">{user}</span>
      </h1>
    </div>
  );

};

export default WelcomeText;
