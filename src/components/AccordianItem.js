import React from "react";

export default function AccordianItem({
  children,
  curOpen,
  setCurOpen,
  num,
  title,
}) {
  const isOpen = num === curOpen;
  function handlerClick() {
    setCurOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : "item"}`} onClick={handlerClick}>
      <p className="number">{num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
