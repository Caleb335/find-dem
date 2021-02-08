import React from "react";
import style from "./style/footer.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.root}>
      <p className={`center text-center`}>created by aoa © {date} </p>
    </footer>
  );
};

export default Footer;
