import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // lighter + no error
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 120,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
}

export default ParticlesBackground;