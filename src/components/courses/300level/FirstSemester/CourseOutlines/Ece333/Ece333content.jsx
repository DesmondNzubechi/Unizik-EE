import React from "react";
import { Ece333props } from "./Ece333prop";


export const Ece333Content = () => {
    return (
        <>
        <Ece333props
        Topic='Introduction:'
        subtopic=' Digital and Analog Quantities, Binary Digits. Logic levels and digital wave form. Introduction to basic logic operations. Digital integrated circuit. '
        />
         <Ece333props
        Topic='Number systems, Operations and codes:'
        subtopic='Decimal and Binary arithmetic,, 1’s and 2’s compliments of binary numbers, Hexadecimals and octal numbers, Binary coded decimal (BCD) and digital codes. '
        />
         <Ece333props
        Topic='Logic Gates:'
        subtopic='The inverters, AND gate, OR gate, NAND and NOR gates. Exclusive-OR and Exclusive-NOR gates, example of IC gates. 

        '
        />
         <Ece333props
        Topic='Boolean Algebra and Logic Simplification: '
        subtopic='Boolean operations and expressions, Laws and rules of Boolean Algebra, Demorgan’s theorems, Simplification using Boolean Algebra Standard Forms of Boolean Algebra, the Kamaugh map. '
        />
         <Ece333props
        Topic='Combinational Logic: '
        subtopic='Basic combination logic circuits implementing combinational logic functions of combinational logic. '
        />
         <Ece333props
        Topic='Clocks and Training Circuits: '
        subtopic='Crystal and LC oscillator circuits. Astable and monostable time using IC chips (NE 555, 74121 and 74123). Programmable timers and Programmable timer/counters. CMOS timer ICs. Power – Up one shot circuits.  '
        />
        </>
    )
}