import React from "react";
import { Feg103props } from "./Feg103prop";


export const Feg103Content = () => {
    return (
        <>
        <Feg103props
        Topic='Introductory concepts:'
        subtopic=' Electrons and protons, conductors, insulators and semiconductors, units and definition of ampere, volt, resistance, power and energy, MKS units.  '
        />
        <Feg103props 
        Topic='Resistive networks:'
        subtopic='Resistive networks, resistances in series and parallel , current and voltage divisions, open and short circuits, cells, Kirchoff’s current and voltage laws and their application. 

        '
        />
         <Feg103props 
        Topic='Electrostatics:'
        subtopic=' electric field of a parallel plate capacitor, multiple capacitors, capacitors in series and parallel, energy stored in a capacitor. '
        />
         <Feg103props
        Topic='Electromagnetism::'
        subtopic='magnetic field, permeability and magneto motive force, self and mutual inductances, inductances in series and parallel: Lenz’s laws, energy stored in an inductor.  '
        />
        <Feg103props 
        Topic='Network theorems:'
        subtopic=' Thevenin’s and Norton’s Theorems: superposition theorem, maximum power transfer theorem, delta-star-delta transformation. ' 
        />
         <Feg103props 
        Topic='Introduction to AC theory: '
        subtopic=' waveform generation: angular measure, frequency and period, average and mean square values, phasors and phase angles.'
        />
        
        </>
    )
}