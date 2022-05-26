import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Showcase() {
  const [message, setMessage] = useState("");
  const { number } = useParams();
  useEffect(() => {
    if (number) {
      setMessage(`
               there is a ${number} as params
           `);
    } else {
      setMessage("there is no number");
    }
  }, []);

  return (
    <div>
      <h2>STUFF</h2>
      <p>{message} </p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
    </div>
  );
}
