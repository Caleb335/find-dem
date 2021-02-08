import React from "react";
import style from "./style/header.module.css";

const Header = () => {
  return (
    <header className={style.root}>
      <h1 className={`text-center`}>Translator</h1>
    </header>
  );
};

export default Header;
