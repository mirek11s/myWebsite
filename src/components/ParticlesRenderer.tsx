import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesRenderer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#ffffff',
          },
        },
        fullScreen: {
          enable: true, // enabled by default
          zIndex: -1, // the z-index property of the canvas, default is 0
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true, // enable click events
              mode: 'push', // add particles on click
            },
            onHover: {
              enable: true, // enable hover events
              mode: 'repulse', // repulse particles on hover
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, // number of particles to add on click
            },
            repulse: {
              distance: 120, // distance of repulsion
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#000000',
          },
          links: {
            color: '#000000',
            distance: 150,
            enable: true, // enable links on particles
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true, // enable movement
            outModes: {
              default: 'out', // bounce, out, destroy, none
            },
            random: false,
            speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // density of the particles, the higher the number the less dense
            },
            value: 80, // number of particles
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // using different opacity, to have some semi-transparent effect
          },
          shape: {
            type: 'circle', // circle, square, triangle, star, polygon, image, character
          },
          size: {
            value: { min: 1, max: 5 }, // random size
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesRenderer
