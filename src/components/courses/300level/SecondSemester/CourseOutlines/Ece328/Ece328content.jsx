import React from "react";
import { Ece328props } from "./Ece328prop";


export const Ece328Content = () => {
    return (
        <>
        <Ece328props
        Topic='Feedback Amplifiers:'
        subtopic='Voltage series and current shunt feedback.  '
        />
        <Ece328props 
        Topic='Feedback Oscillators: '
        subtopic='Hartley, Colpitts and phase shift oscillators. Negative resistance oscillators, crystal and blocking oscillators, bridge networks.'
        />
         <Ece328props 
        Topic='Pulse and Switching Circuits:'
        subtopic=' Linear wave shaping circuits, switching characteristics of devices. The transistor as a switch. Clipping, clamping and comparator circuits, pulse transformer and delay lines.  '
        />
         <Ece328props 
       Topic='Waveform Generators'
        subtopic='Ramp generators, Miller integrator with voltage and current sweep. Bootstrap sweep circuits. '
        />
         <Ece328props 
        Topic='Multivibrators: '
        subtopic='  Monostable, bistable and astable multivibrators. The Schmitz trigger circuit.  
'
        />
        </>
    )
}