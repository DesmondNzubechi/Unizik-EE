import React from "react";
import {Ece323props } from "./Ece323prop";


export const Ece323Content = () => {
    return (
        <>
        <Ece323props
      
        subtopic='The objective of this course is to teach the concept of models of electronic devices and application of these models in the analysis of non-linear circuits and also the limitation of these models.  ' 
        />
         <Ece323props
        Topic='Bipolar transistor: '
        subtopic=' Review of transistor biasing, fixed and emitter biasing. Effects of coupling capacitors. Hybrid parameter model. . Limitation of models. ' 
        />
         <Ece323props
        Topic='Single Stage Amplifier:'
        subtopic='Common emitter common base and common collector amplifiers. Impedance transformation current and voltage gains, input and output impedances.  ' 
        />
         <Ece323props
        Topic='Multiple Amplifiers:'
        subtopic='Common emitter common cascade, CE CB and CE CE configuration. Darlington and Long tail pair configurations. Field effect transistor. Constructional features, biasing techniques. JFET and MOSFET. Voltage gains, common sources and common drain amplifiers. Multiple FET amplifiers. ' 
        />

<Ece323props
        Topic='High Frequency Amplifiers:'
        subtopic='Hybrid pi-node of bipolar and FET devices. Effect of base Emitter and collector capacitances.  ' 
        />
         <Ece323props
        Topic='Power Amplifiers:'
        subtopic='  Analysis of class A, B and C amplifiers. Distortion analysis, transformer coupling. Heat sink analysis.  ' 
        />
        <Ece323props
        Topic='Voltage Regulation and Stabilizer:'
        subtopic='Zener diode stabilizer, Transistor stabilizer circuits. Series and feedback stabilizer. ' 
        />
         <Ece323props
        Topic='Feedback Amplifiers:'
        subtopic='Negative feedback amplifiers, series and parallel feedback.  ' 
        />
        
        </>
    )
}