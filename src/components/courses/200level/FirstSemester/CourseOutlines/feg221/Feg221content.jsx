import React from "react";
import { Feg221props } from "./Feg221prop";


export const Feg221Content = () => {
    return (
        <>
        <Feg221props
        Topic='Hydrostatics  :'
        subtopic='Fundamental element of fluid statistics; density, pressure, surface tension, viscosity, compressibility. Hydrostatic equation and its integrations for incompressible fluids. Pressure distributions over plane and curved surfaces. Resultant force; line of action; centre of pressure. Measurement of pressure. '
        />
        <Feg221props 
        Topic='Dynamics:'
        subtopic='Steady and unsteady flow of fluids; streamlines; stream tubes. One, two and three-dimensional flows, uniform and non-uniform flows. Laminar and turbulent flows. Nature of motion around blunt and streamlined bodies; establishment of velocity profiles, boundary layer separation; formation of wakes.

        Use of control volume for steady flow mass balance, momentum balance and energy balance pressure and velocity in ideal fluids and in shear flow situation.'
        />
        
        <Feg221props
        Topic='Dimensional Analysis:'
        subtopic='Buckingham’s pi-theorem, Dimensionless groups. Dynamical similarity. Flow modelling. Nature of effects of fluid friction in pipes and channels, relationship between friction factor and Reynolds’s number. Flow characteristics of pumps and turbines.'
        />
        </>
    )
}