import React from "react";
import { Ece326props } from "./Ece326prop";


export const Ece326Content = () => {
    return (
        <>
        <Ece326props
        Topic='Energy Band in Solids:'
        subtopic='The electron volt unit of energy, electronic structure of elements, Energy band theory of crystals, insulators, semiconductors and metals. '
        />
          <Ece326props
        Topic='Transport Phenomenon in Semiconductors:'
        subtopic='Mobility and conductivity, intrinsic conduction, Electrical properties of germanium and silicon, Diffusion modulation and hall effect. '
        />
          <Ece326props
        Topic='Fermi Level:'
        subtopic=' The Fermi dirac function, Fermi level in semiconductors. Semiconductor equation.  '
        />
        </>
    )
}