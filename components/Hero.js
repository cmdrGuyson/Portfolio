import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../animations/TextHighlight";
import data from "@constants/data";

export default function Hero() {
  return (
    <div className="flex flex-row items-start justify-center pb-56 overflow-hidden">
      <div className="w-full mx-auto text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color="#EF4444" type="highlight">
            <h1 className="p-5 my-2 text-4xl font-bold text-center text-white md:text-4xl dark:text-gray-200">
              Gayanga Kuruppu
            </h1>
          </RainbowHighlight>
          <p className="mt-8 text-center">
            Hey! I'm a human from Earth.
            <br /> I'm a{" "}
            <RoughNotation type="underline">passionate</RoughNotation> software
            developer, who's always on the lookout for{" "}
            <RoughNotation type="underline">adventure</RoughNotation>.
            <br />
            <br />
            Apart from software engineering I am passionate about{" "}
            <RoughNotation type="underline">music</RoughNotation>. Being a
            singer/songwriter, I spend my free time working on music. I'm
            currently working on my new EP, on which you'll find more
            information below.
          </p>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
