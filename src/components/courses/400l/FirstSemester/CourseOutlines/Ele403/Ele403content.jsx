import React from "react";
import { Ele403props } from "./Ele403prop";


export const Ele403Content = () => {
    return (
        <>
        <Ele403props
        Topic='Laplace Transforms in circuit analysis:'
        subtopic=' Laplace transform and its properties, transform circuit, pole zero analysis. '
        />

<Ele403props
        Topic='Fourier Methods in wave form and circuit analysis:'
        subtopic=' Real and complex forms of fourier series. Fourier analysis of complex waveforms, Parsevails thermo, line spectra response. The Duhamel Superposition integral. '
        />
          <Ele403props
        Topic='Transmission line Theory:'
        subtopic='Characteristics and parameters of transmission lines. The smith chart and its application to impedance matching.  '
        />
          <Ele403props
        Topic='Two port networks:'
        subtopic='General definitions of two port parameters. Insertation loss or gain, two port network, Image and iterative impedances. Equivalent T and pi networks. '
        />
         <Ele403props
        Topic='Network parameters: '
        subtopic='The impedance (Z) and admittance (Y), Hybrid (H), transmission (ABCD) and other parameters of a two port network, interconnection of network. '
        />
        </>
    )
}