import React from "react";
import { Ece321props } from "./Ece321prop";


export const Ece321Content = () => {
    return (
        <>
        <Ece321props
        Topic='Elements of Communications System:'
        subtopic='Block diagram model, fundamental limitations .'
        />
         <Ece321props
        Topic='Amplitude modulation :'
        subtopic='Reasons for modulation of radio waves, Frequency spectrum of AM signals. Small signal and large signal modulations, Power in AM signals and percentage modulation, DSB, SSB, ISB and VSB Circuits for AM generation. '
        />
         <Ece321props
        Topic='Angled Modulation: '
        subtopic='A simple FM generation, FM analysis, Noise Suppression, Direct and indirect FM Generation, Phase-locked-loop (PLL) FM Transmitter, Wide band and narrow band FM signal. '
        />
         <Ece321props
        Topic='Detection:'
        subtopic='AM detectors, Envelope detection, Practical diode detection, Practical diode detector, VSB demodulator, Synchronous Detector, FM discriminations. Foster seeley discriminator, Radio, detector, Demodulation of FM waves: Detection in the presence of noise. '
        />
         <Ece321props
        Topic='Radio-wave propagation : '
        subtopic='Earth’s atmosphere, Spectrum and Nomenclature of radio waves, Polarization, Propagation modes, Factors affecting the propagation of radio waves, Propagation of radio waves at different frequencies: Critical frequency and maximum usable frequency, Line-of-sight propagation: Tropospheric  scatter propagation. '
        />
         <Ece321props
        Topic='Antennas:'
        subtopic='Isotopic antenna, Radiation from a short dipole and power radiated by it. Radiation from a short grounded aerial, Effective height of an antenna, Antenna excitation. Half-wave and Quarter-wave antenna. Antenna arrays, linear array, end-fire and broadside arrays, Folded dipole, lop-periodic antennas, Baluns, Antenna types: Loop, slot, yagi-uda, parabolic, rhombic antennas, horn antennas: Patterns and patterns multiplication, Application of antennas at different frequency band, Some important antenna parameters, Bean width, power gain etc. '
        />
        </>
    )
}