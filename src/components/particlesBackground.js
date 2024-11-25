"use client";
import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log("Particles initialized:", main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig} 
    />
  );
};

export default ParticlesBackground;
