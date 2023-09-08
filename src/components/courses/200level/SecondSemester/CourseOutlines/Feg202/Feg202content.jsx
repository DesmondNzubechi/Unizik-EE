import React from "react";
import { Feg202props } from "./Feg202prop";


export const Feg202Content = () => {
    return (
        <>
        <Feg202props
        Topic='Poly-phase Systems:'
        subtopic='Two phase and three phase systems. Star and delta connected loads. Power in three phase systems. Two wattmeter methods applied to balanced loads. '
        />
        <Feg202props 
        Topic='Power Factor Correction:'
        subtopic=' Power in sinusoidal steady state. Average and apparent power. Active and reactive power. Power factor correction. '
        />
         <Feg202props 
        Topic='Measurement and Instrumentation:'
        subtopic=' Circuit symbols. Component identification: Reasons for measurement. Error analysis. Equipment reliability.  '
        />
         <Feg202props 
       
        subtopic='Use of meters: AVO, CRO, signal generators.'
        />
         <Feg202props 
        Topic='Transistors: '
        subtopic=' The transistor as an amplifier, common base, common emitter and common collector configurations. Transistor biasing and stabilization. Field Effect Transistors: JFET and MOSFET. Biasing the FET. Treatment of analogue and digital electronic instruments. 
'
        />
        </>
    )
}