import React from "react";
import { Ece505props } from "./Ece505prop";


export const Ece505Content = () => {
    return (
        <>
        <Ece505props
        Topic='Network Design by Computer:'
        subtopic='The application of computer in engineering. Network classification and response.  '
        />
         <Ece505props
        Topic='Analysis of Linear Networks: '
        subtopic=' Solution by L.U. factorization, superposition and sparsity. Network scaling ladder Networks.  '
        />
         <Ece505props
        Topic='Non Linear DC Circuit Analysis:'
        subtopic=' Types of resistive nonlinearities, Solution of nonlinear resistive Networks, composite companion models. '
        />
         <Ece505props
        Topic='Transient Analysis of Dynamic Networks:  '
        subtopic='Transient analysis of linear sensitivity calculation, Sensitive and computer aided design. Telegen Thermo, Calculating of sensitivities. Tolerance analysis. '
        />
         <Ece505props
        Topic='Techniques of Equation Formation: '
        subtopic=' Elementary graph theory, formulation of analytic solution. State variable analysis, state equations for RCL network. '
        />
          <Ece505props
        Topic='Numerical Techniques in Transient Analysis:'
        subtopic=' Analytic solution of linear differential equations, single step integration, the Runge-Kutta integration. Multi step integration. Explicit integration.'
        />
        </>
    )
}