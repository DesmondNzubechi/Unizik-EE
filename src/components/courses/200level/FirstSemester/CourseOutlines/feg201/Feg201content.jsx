import React from "react";
import { Feg201props } from "./Feg201prop";


export const Feg201Content = () => {
    return (
        <>
        <Feg201props
        
        
        subtopic='Revision on network theorems.'
        />
        <Feg201props 
        Topic='Analysis of AC Circuits:'
        subtopic='Series and parallel RL and RC circuits. Series and parallel RLC circuits. Resonance series and parallel. Impedance diagrams. Quality factor. '
        />
         <Feg201props 
        Topic='Mesh and Node Analysis: '
        subtopic=' Choice of mesh currents. Mesh equations by inspection. Node analysis. Matrix method.'
        />
         <Feg201props 
        Topic='Coupled Circuits: '
        subtopic='Analysis of coupled circuits, coupling coefficient. Dot notation. '
        />
         <Feg201props 
        Topic='Circuit Transients: '
        subtopic='DC transients. RC and RL transients. AC transients. RLC transients.'
        />
          <Feg201props 
        Topic='Introduction to Electronic:  '
        subtopic='Semiconductor properties. Electrons and holes. Intrinsic and extrinsic conduction. Donor and acceptor atoms. P N junction. Introduction to thermionic devices. Junction diode characteristics. Other diodes – Zener, photodiodes, tunnel and LEDS. Diode circuits. Bipolar transistors. Simple treatment of transistor operations. '
        />
        
        </>
    )
}