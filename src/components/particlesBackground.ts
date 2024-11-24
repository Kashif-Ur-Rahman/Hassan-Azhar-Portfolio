import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    console.log("Particles initialized:", main);
    await loadFull(main); // Load the full tsParticles bundle
  };

  const particlesLoaded = (container: any) => {
    console.log("Particles loaded:", container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig} // Updated to use `options` instead of `params`
    />
  );
};

export default ParticlesBackground;
