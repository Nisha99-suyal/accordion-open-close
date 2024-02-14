import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

export default function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((items, i) => (
        <AccordianItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          title={items.title}
          num={i}
          key={items.title}
        >
          {items.text}
        </AccordianItem>
      ))}
      <AccordianItem
        curOpen={curOpen}
        setCurOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordianItem>
    </div>
  );
}
