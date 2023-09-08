import React from "react";
import { Ece334props } from "./Ece334prop";


export const Ece334Content = () => {
    return (
        <>
        <Ece334props
        Topic='Interfacing: '
        subtopic='Interfacing between different types of logic gates (TT, CMOS, ECL, etc.), Interfacing between logic gates and optocouplers, phototransistors, photodiodes, Switching transistors and light emitting diode. '
        />
        <Ece334props 
        Topic='Signal Converters:'
        subtopic='  Digital – to Analog (D/A) Converters. The resistor network current D/A converters. The Analog – to Digital (A/D) Converters, Counter controlled successive approximation and simultaneous conversion methods. ' 
       />
         <Ece334props 
        Topic='Digital Readouts:'
        subtopic=' 7-segment display and display drivers, Multiplexed and unmultiplexed displays, Keyboard encoders. 

        ' 
       />
        <Ece334props 
        Topic='Introduction to Micro-computer and microprocessors:'
        subtopic='Using the computer, the works of a computer operator, executive programs, operating systems multiprogramming multi access, virtual storage Programming languages in storing instructions, machine code, low and high level languages software. Executing machine code program, the programme counter, decoders, the instruction register, the fetch/execute cycle control execution, micro programs. Application of the use of software in digital systems implication.' 
       />
        </>
    )
}