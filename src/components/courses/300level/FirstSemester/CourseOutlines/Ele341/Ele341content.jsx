import React from "react";
import { Ele341props } from "./Ele341prop";


export const Ele341Content = () => {
    return (
        <>
        <Ele341props
        Topic='Energy and Potentials:'
        subtopic='Definition of potential difference, potential gradient. The potential field of a system of charges. The diploe. Energy density in the electrostatic field energy and its flow. '
        />
        <Ele341props 
        Topic='Time Varying Field and Maxwell’s Equations:'
        subtopic='Maxwell’s Equation in integral form. Practical application of Maxwell’s Equation. Simple solutions of field equation and their application in circuit theory. '
        />
        
        <Ele341props
        Topic='The steady Magnetic Field:'
        subtopic=' Ampere’s circuit law, the scalar and vector magnetic potential derivation of steady magnetic laws. Magnetization and magnetic boundary conditions.'
        />
          
          <Ele341props
        Topic='Varying Electromagnetic Field:'
        subtopic=' Varying magnetic field in thin plates. Electromagnetic field in conductors, Study of skin effect. '
        />
          
          <Ele341props
        Topic='Propagation and Reflection of Electromagnetic waves:'
        subtopic='Plane dielectrics. Polluting Vectors and power consideration. Reflection of uniform plane waves. Standing wave. '
        />
        </>
    )
}