import React from "react";
import { Feg215props } from "./Feg215prop";


export const Feg215Content = () => {
    return (
        <>
        <Feg215props
        Topic='Subject matter of strength of materials:'
        subtopic=' Fundamental hypothesis in strength of materials. Problems and methods in strength of materials. External and internal forces, stresses, displacement and deformation. Hook’s law and the principle of superposition. General principles of structural analysis. Tension and compression. Internal forces and stresses on the cross-section of a rod in tension and compression. Elongations of bar and Hook’s law, potential energy of strain, statically determinate and statically indeterminate systems. States of stress and strain in tension and compression.'
        />
         <Feg215props
        Topic='Torsion:'
        subtopic='Pure shear and its characteristics. Torsion of a rod of circular cross-section. Torsion of a rod of non-circular cross-section.  Geometrical characteristics of cross-section of a rod. Static moments of section. Moments of inertia of a section and principal axes and principal moments of inertia.'
        />
          <Feg215props
        Topic='Bending:'
        subtopic=' Internal forces acting on cross-section of a rod in bending. Stresses in a rod under pure bending. Stresses in transverse bending, oblique bending, eccentric tension and compression and stability of columns.'
        />
        </>
    )
}