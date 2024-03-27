import React, { useState, useEffect } from "react";
import "./CustomCursor.css"; // Import CSS for styling
import customCursorImage from "../../../public/bicycle.png"; // Import the PNG image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []); // Empty dependency array ensures the effect is only run once

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    >
      {/* Use the PNG image as the cursor */}
      <img src={customCursorImage} alt="Custom Cursor" />
    </div>
  );
};

export default CustomCursor;
