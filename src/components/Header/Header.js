import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" title="header-1" alt="Main heading" className="header">
        {title}
      </h1>
      <h3 data-testid="header-2" className="header">
        Hello
      </h3>
    </>
  );
}
