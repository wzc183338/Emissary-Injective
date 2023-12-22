import React from "react";
import { Header, NavOpener } from "./PageHeader.styles";

function PageHeader({ children }) {

  const handleClick = () => {
    document.body.classList.toggle("nav-active");
  };


  return (
    <Header>
      <strong className="title">{children}</strong>
      <NavOpener type="button" onClick={handleClick}><span></span></NavOpener>
    </Header>
  );
}

export default PageHeader;
