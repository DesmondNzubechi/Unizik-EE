import React from "react";
import { Ece517props } from "./Ece517prop";


export const Ece517Content = () => {
    return (
        <>
        <Ece517props
        Topic='Real Time Control Concepts:'
        subtopic=' Open loop and closed control, Feedback sensors and feedback real time. 

        '
        />
         <Ece517props
        Topic='Remote Control Techniques:'
        subtopic=' Optical isolation and touching techniques. Multiplex open loop control of several devices in real time. Interrupt driven real time events and physical systems; Emphasis is in control of physical device requiring varying degrees of real time interaction. Typical projects include microcomputer banned stepper motors. D.C. and A.C. motor traffic light control. Software based real time clocks, function generation and system monitoring and control. '
        />
         <Ece517props
        Topic='Operation System environment:'
        subtopic='The limitation or high level languages in real time application. The linking of machine code and assembly language with high level language program for overcoming time constraints. Use of dynamic data structure in interactive environments. 

        '
        />
         <Ece517props
        Topic='Multiprocessor Systems:'
        subtopic=' Interprocessor communication strategies. IEE 488 general purpose interface Bus (GPIB). The S100 Bus standard. Use of memory communication. Control Computer Systems. Characteristics of Control Computers. Performance evaluation.  '
        />
        </>
    )
}