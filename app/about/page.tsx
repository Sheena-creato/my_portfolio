// pages/about.tsx
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-bold text-center mb-8 md:text-2xl lg:text-3xl">
        About Me
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-400 mb-6 text-center md:text-lg">
          I'm a law student that recently developed a passion for web
          developement. I have a keen eye for design and a love for creating
          beautiful, functional websites. My journey in web development started
          last year, and since then, I've been constantly learning and improving
          my skills.
        </p>
        <p className="text-sm text-gray-400 text-center md:text-lg">
          When I'm not coding, you can find me reading novels or watching
          movies. I believe everything can be learnt and am always excited to
          take on new challenges and collaborate on interesting projects.
        </p>
      </div>
    </main>
  );
};

export default About;
