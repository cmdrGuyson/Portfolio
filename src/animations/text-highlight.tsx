import React from "react";
import { RoughNotation } from "react-rough-notation";

// Define the allowed types for RoughNotation
type NotationType =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

export const RainbowHighlight = ({
  color,
  children,
  type,
}: {
  color: string;
  children: React.ReactNode;
  type: NotationType; // Use the specific type instead of string
}) => {
  // Calculate animation duration based on content length
  const animationDuration = Math.floor(
    30 * (typeof children === "string" ? children.length : 10)
  );

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
