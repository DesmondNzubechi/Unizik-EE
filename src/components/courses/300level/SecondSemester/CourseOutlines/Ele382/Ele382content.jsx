import React from "react";
import {Ele382props } from "./Ele382prop";


export const Ele382Content = () => {
    return (
        <>
        <Ele382props
        Topic='Introduction: '
        subtopic='Classification and examples of control systems, control systems terminology. Open loop and closed loop block diagram models.' 
        />
         <Ele382props
      Topic='Transfer Function: '
        subtopic=' Mathematical model of feedback systems. Types of response. Second order systems criterion. Continued fraction stability criterion. 

        ' 
        />
         <Ele382props
        Topic='Block Diagram Algebra:'
        subtopic='Procedure blocks in cascade, Canonical form of feedback system. Multi input system. Reduction techniques. '
        />
          <Ele382props
        Topic='Signal flow graphs:'
        subtopic=' Construction techniques, Input – output gain formula. Reaction by signal flow graphs. '

        />

<Ele382props
        Topic='Analysis and Design: '
        subtopic='Objective of analysis, Root locus analysis/design. Nyquist analysis and design. Bode analysis, Nichol chart. '
        />
          <Ele382props
        Topic='Compensation techniques:'
        subtopic=' Lead, Lag, Lead Lag and Lag lead compensation. '
        
        />
         <Ele382props
        Topic='Nonlinear systems:'
        subtopic=' Discrete time systems. System with random inputs, optimal and adaptive control systems. Linearized and piece wise linear systems. '
        />
        
        </>
    )
}