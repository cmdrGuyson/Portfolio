import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../animations/text-highlight";

export default function Hero() {
  return (
    <div className="flex flex-row items-start justify-center pb-16 md:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color="#EF4444" type="highlight">
            <h1 className="p-5 my-2 text-3xl md:text-4xl font-bold text-center text-white dark:text-gray-200">
              Gayanga Kuruppu
            </h1>
          </RainbowHighlight>
          <p className="mt-8 text-center text-base md:text-lg">
            Welcome to my corner of the web where I{" "}
            <span className="block md:inline">
              <RoughNotation type="underline">speak my mind!</RoughNotation>
            </span>
            <br />
            <br />
            I&apos;ve always been very passionate about crafting software
            solutions to annoying problems and sharing my thoughts along the
            way.
          </p>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
