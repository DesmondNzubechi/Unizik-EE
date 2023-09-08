import React from "react";
import {Ece427props } from "./Ece427prop";


export const Ece427Content = () => {
    return (
        <>
        <Ece427props
        Topic='Fundamental of Operational Amplifiers:'
        subtopic=' Inverting and non-inverting mode. Offset errors and chopper stabilization, frequency related characteristics. ' 
        />
          <Ece427props
        Topic='Summing Circuits: '
        subtopic='Summers and subtractors, instruments amplifier. ' 
        />
          <Ece427props
        Topic='Integrators and Differentiators: '
        subtopic='Single, summing augmenting and differential integrators and differentiators. ' 
        />
         <Ece427props
        Topic='Linear Circuit Applications:  '
        subtopic=' Bridge Amplifiers, Voltages to current converters. Voltage regulators, current and voltage amplifier. ' 
        />
          <Ece427props
        Topic='Analog to Digital Converters:'
        subtopic='Comparison techniques, successive approximation and dual slope integrators, sample and hold circuits. ' 
        />
         <Ece427props
        Topic='Waveform Generators:'
        subtopic='Sine, square and triangular wave generators. Pulse circuits.  

        ' 
        />
        </>
    )
}