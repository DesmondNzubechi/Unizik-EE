import React from "react";
import { Ece322props } from "./Ece322prop";


export const Ece322Content = () => {
    return (
        <>
        <Ece322props
        Topic='Transmitters and Receivers:'
        subtopic='Low level and high level modulation transmitters, Amplitude and frequency modulated transmitters. '
        />
        <Ece322props 
        Topic='Radio receivers:'
        subtopic='TRF and Super net; Receivers; AM broadcast receivers; RF amplifier; Frequency changers, IF amplifiers, Detector; AGC; Communication receivers; Variable selectivity, Noise limiter, Squelch, AFC; SSB receivers; Diversity reception: Space and frequency dive reception; FM receivers. Important features of radio receivers; select; Sensitivity, ganging and tracking. 

        '
        />
          <Ece322props 
          Topic='Transmission Lines:'
        subtopic=' Primary Electrical Constants, Secondary constants; Reflection in the finite terminated line; Distortion transmission; Standing waves; General line equations; Classification of lines; Line loading; Open wire lines and coaxial cables. '
        />


<Ece322props 
        Topic='Telephony and Telegraphy:'
        subtopic='Telephony: telegraphy instruments, telephone sets, Electronic telephones, Transmission circuits. Repeaters and hybrid circuit, Local Battery and Central Battery exchanges; Automatic telephony: Uniselector and two way switches, Stronger exchanges, crossbar switches exchanges, electronic telephone exchanges, Telephone numbering schemes (CCITT) Telegraphy, telegraphy instruments; Single and double current circuits, Duplex, Quadruplex, circuits, teleprinter, Traffic and trunking; Telephone signaling methods; Basic analogue switching systems.  

        '
        />
          <Ece322props 
          Topic='Communication channels and Noise:'
        subtopic=' Characteristics of communication channels; Classification of Noise; Noise source; External noise, internal noise, thermal agitation noise, shot noise, etc. Noise measurement: Noise figure, Noise figure measurement, Noise figure in Amplifiers, Noise temperature, Noise in communication systems, Noise in AM, FM and PM systems, Communication services;  Fascimile, Radar, TV and Satellite. '
        />
        
        </>
    )
}