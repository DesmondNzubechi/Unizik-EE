import React from "react";
import { Feg242props } from "./Feg242prop";


export const Feg242Content = () => {
    return (
        <>
        <Feg242props
        Topic='Basic concepts:'
        subtopic='What is thermodynamics? Basic definitions. Historical background of thermodynamics. Dimensions. Units. Macroscopic and microscopic domain. Thermodynamic systems, boundaries, control volume. Properties and states, processes, heat and work, pressure, temperature and zeroth law. Intensive and extensive properties Measurement of temperature, volumes and pressures.'
        />
        <Feg242props
        Topic='The first law of thermodynamics:'
        subtopic='Application to open and closed systems. Internal energy, work and heat transfer. Storing work as non-PV work. Sign convention in heat and work transfer. Steady state flow equation (Bernoulli equation). Conservation of energy,  flow processes and enthalpy. Flow and non-flow work.'
        />
          <Feg242props
        Topic='Thermodynamic properties of pure substances:'
        subtopic='Thermodynamic properties of pure substances, working fluids, liquids. Vapours and gases. Liquid-vapour phase equilibrium diagram. Saturated and superheated states in water and in working fluids of refrigerators. P-V-T relations and diagrams. The ideal gas. Steam quality measurements. Barrel calorimeters, separation throtting and combined calorimeters, use of property tables. Processes in the vapour phase at constant volume, constant pressure. Isothermal, hyperbolic and polytrophic processes. The perfect gas, the ideal gas and P-V-T relation. Specific heats, the gas constant, universal gas constant. The mole processes with  the ideal gas. Isothermal, isochronic, adiabatic, and polythrophic processes.'
        />
         <Feg242props
        Topic='The second law of thermodynamics and its corollaries:'
        subtopic='Reversibility and irreversibility. Efficiency and temperature scale. Carnot cycly in idealized heat engines and refrigerators. Heat pumps, absolute temperature scale.'
        />
         <Feg242props
        Topic='Entropy:'
        subtopic='Clausius inequality; T-S diagram for various processes. Maximum available energy. Entropy change in isolated systems. Consequences of the second law.'
        />
        
        </>
    )
}