import React from "react";
import { Phy101props } from "./Phy101prop";


export const Phy101Content = () => {
    return (
        <>
        <Phy101props
        Topic='Space and time frames of reference :'
        subtopic='Space and time frames of reference. Units and dimensions. Kinematics – vectors, scalars, speed/velocity, acceleration, circular motion and applications. Fundamental laws of mechanics. Statics: Equilibrium. Centre of mass.'
        />
        <Phy101props 
        Topic='Dynamics :'
        subtopic='Newton’s law of motion. Force, inertia, mass and weight. Contact forces. Atwood machine. Pulleys. Projectile motion. '
        />
         <Phy101props 
        Topic='Linear momentum:'
        subtopic='Galilean invariance. Universal gravitation – Newton’s gravitation law. Kepler’s laws. Gravitational potential. Earth’s satellite. Velocity of escape and weightlessness. Work and energy. Rotational dynamics and angular momentum. Moment of inertia. Kinetic energy of rotation. Conservation laws. Oscillatory motion – simple harmonic motion, damped and forced oscillation.'
        />
        
        </>
    )
}