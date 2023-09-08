import React from "react";
import { Ece331props } from "./Ece331prop";


export const Ece331Content = () => {
    return (
        <>
        <Ece331props
        Topic='Models of physical systems:'
        subtopic='Applications of linear differential equations for differential equations to the analysis of linear systems with electrical network as examples. '
        />
         <Ece331props
        Topic='Superposition and Convolution:'
        subtopic='Discrete and continuous time system impulse response, Numerical method in convolution. State variable description of discrete an continuous time system solution of state variable equations. The concepts of observability and control ability. '
        />
         <Ece331props
        Topic='Functions of Matrices:'
        subtopic='Importance and application of state matrix. '
        />
         <Ece331props
        Topic='Nature of Spectrum of a Signal: '
        subtopic='Fourier series representation of periodic and non-periodic signals. Parsevals theorem, Sampling of time signal and transmission of signal through linear filters – properties of Fourier transforms. '
        />
         <Ece331props
        Topic='Probability Density Functions: '
        subtopic=' Gaussian Releign and Bivariate distributions. Error-probability and decision making. Power spectral density. '
        />
          <Ece331props
        Topic='Analysis of Cascaded Systems:  '
        subtopic='Application of Laplace and inverse transforms, Stability in the S-domain, Laplace transform analysis of casual periodic inputs to linear systems Z. Transform: The Z transform and its inverse. Properties of the Z transform. Application of the Z transform including the Direct Z transform method of filter design. '
        />
        </>
    )
}