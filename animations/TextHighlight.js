import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children, type }) => {
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type={type}
      multiline={true}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
