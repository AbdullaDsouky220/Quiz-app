import{r as s,u as k,j as e,a as z,C as x,b as u,c as h,F as d,L as _,d as E,R as m,e as y,f as M,g as H}from"./vendor.c0539a4e.js";const I=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}};I();var A="/Quiz-app/assets/one.dd56a80b.svg",Q="data:image/png;base64,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";const p={first:{name:"Questions from 1 to 33",icon:A,color:"green"},second:{name:"Questions from 34 to 66",icon:Q,color:"yellow"},third:{name:"Questions from 67 to 100",icon:A,color:"red"}};function T({category:o,size:i,onSelect:c}){const[n,t]=s.exports.useState(!1),r=k({transform:n?"rotate(3deg)":"rotate(0deg)"});return e(z.div,{style:r,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:e(x,{className:`card--bg-${o.color}`,onClick:()=>c(o),children:u(x.Body,{className:h("text-center",{"d-flex align-items-center justify-content-center p-2":i==="sm"}),children:[e("img",{class:"h-4 w-4",src:o.icon,alt:"3x"}),e("h3",{className:h("mt-2 mb-0",{"ms-3":i==="sm"}),children:o.name})]})})})}function D({setCategory:o,countCorrectAnswers:i}){return u(d,{children:[u("p",{children:["You got ",e("strong",{children:i})," correct!"]}),e("p",{children:"Thank you for playing!"}),e("a",{href:"/Quiz-app",class:"btn btn-success stretched-link",children:"Return To Home Page"})]})}const L=o=>{const i=[o.correct,...o.incorrect];for(let c=0;c<i.length;c++){const n=Math.floor(Math.random()*c),t=i[c];i[c]=i[n],i[n]=t}return i};function U({questions:o}){const[i,c]=s.exports.useState(0),[n,t]=s.exports.useState(o[0]),[r,l]=s.exports.useState([]),[S,g]=s.exports.useState(null),[v,N]=s.exports.useState(0),[b,q]=s.exports.useState(!1),[C,F]=s.exports.useState(!1);s.exports.useEffect(()=>{const a=o[i];t(a),l(L(a))},[i]);const W=a=>{q(!0),g(a),a===n.correct&&N(v+1),setTimeout(()=>{const f=i+1;f===o.length?F(!0):(c(f),q(!1),g(null))},750)};return C?e(D,{countCorrectAnswers:v}):u(d,{children:[e("div",{children:u("h3",{children:[i+1,"/",o.length]})}),e("div",{className:"mb-4",children:e("strong",{dangerouslySetInnerHTML:{__html:n.question}})}),e("div",{children:e(_,{className:h({disabled:b}),children:r.map((a,f)=>{const w=b&&a===S;return e(_.Item,{className:h({correct:w&&a===n.correct,incorrect:w&&a!==n.correct}),onClick:()=>W(a),children:e("span",{dangerouslySetInnerHTML:{__html:a}})},f)})})})]})}var R=[{difficulty:"easy",question:"1)..........are basic constituents of matter.",correct:" atoms",incorrect:["molecules","elements Monet","compounds"]},{difficulty:"easy",question:"2) experiments that can't be explained by classical physics.............",correct:"all of them",incorrect:["Black body radiation"," photoelectric effect"," discrete atomic spectra"]},{difficulty:"easy",question:"3).................discover the electron and measures (me/e)  ",correct:"Thomson",incorrect:["Faraday"," Max blank","Newton"]},{difficulty:"easy",question:"4)........... is a distinct, present in all materials",correct:"electron",incorrect:["atom","ion","molecules"]},{difficulty:"medium",question:"5) light is.......... waves ",correct:"electromagnetic",incorrect:["electric","magnetic"," non of them"]},{difficulty:"medium",question:"6) Newtonation mechanics explained............ Behaviour of matter",correct:"Microscopic",incorrect:[" Blackbody radiation","Microscopic and Blackbody radiation  ","Macroscopic"]},{difficulty:"medium",question:"7).......experimentally observes electrons as particles with charge & mass",correct:"Thomson",incorrect:["Faraday","Thomson and Faraday ","Newton"]},{difficulty:"medium",question:"8)....... found that results are independent of (1) cathode material (2) residual gas composition.",correct:"Thomson",incorrect:["Faraday","Thomson and Faraday ","Newton"]},{difficulty:"hard",question:"9)...... Had shown using electricity that amount of electric current proportional to amounts of some substances could could be liberated in an electrolytic cell.",correct:"Faraday",incorrect:["Newton","Einstein"," Max blank"]},{difficulty:"hard",question:"10)The wave function of a partical in a box is given by..............",correct:"\u221A(2/L)sin(n\u03C0x/L)",incorrect:["\u221A(2/L)sin(nx/L)","\u221A(2/L)sin(x/L)","\u221A(2/L)sin(\u03C0x/L)"]},{difficulty:"hard",question:"11)Rutherford in his atomic model could not explain the behavior of which of the following? ",correct:"electrons",incorrect:["protons","neutrons"," neutrino"]},{difficulty:"hard",question:"12)The most intense of wavelengths that result from light emitted by a sample of excited hydrogen is at ......",correct:"656nm",incorrect:["660nm","670nm"]},{difficulty:"hard",question:"13)Orbits closer to the nucleus are \u2026\u2026\u2026\u2026. in energy.",correct:"lower",incorrect:["higher","constant"]},{difficulty:"hard",question:"14)Which of the following is not a characteristic of wave function?",correct:"physically significant",incorrect:["continuous","single valued","differentiable"]},{difficulty:"hard",question:"15)The wavelength of the matter waves is independent of:",correct:"charge",incorrect:["velocity","mass","momentum"]},{difficulty:"hard",question:"16) The potential of free particle is ............",correct:"zero",incorrect:["minimum","maximum","infinite"]},{difficulty:"hard",question:"17) The wave function of box of particle is given by...........",correct:"A sin(kx) + B cos(kx)",incorrect:["B coskx "," A sinkx","A sinkx _ B coskx"]},{difficulty:"hard",question:"18)In One dimension particle moves.........",correct:"x along x axis ",incorrect:[" x-y-z  "," x-y plane"]},{difficulty:"hard",question:"19) the schrodinger\u2019s equation is.......",correct:" -h2/2m d2/dx2 \u03C8(x)+ v(x) \u03C8 (x)= E \u03C8 (x) ",incorrect:["\u03C8 (x)= a \u03C8 (x)  "," (H'P)=0","none"]},{difficulty:"hard",question:"20) When electrons move from a lower energy level to a higher energy level, energy is........",correct:"absorbed",incorrect:["emitted","  both emitted and absorbed"," none of the above"]},{difficulty:"hard",question:"21)The Quantum Mechanical Model of the atom was proposed by:",correct:"Erwin Schrodinger",incorrect:[" Louis de Broglie","  Neil Bohr","  Werner Heisenberg"]},{difficulty:"hard",question:"22)The intensity of radiation is a measure of the energy emitted per  unit.........",correct:"volume",incorrect:["all of above","kinetic energy","area"]},{difficulty:"hard",question:"23) Rydberg constant equal \u2026\u2026\u2026..",correct:" 1.097 \xD7 10\u2077m-1",incorrect:["1.097 \xD7 10\xB9\u2079 c/kg "," 1.3807 \xD7 10\u2013\xB2\u2079J/K"," 6.626 \xD7 10\u2013\xB3\u2074 J"]},{difficulty:"hard",question:"24)......... Prove that ( p=h/\u03BB) so (k=2\u03C0/\u03BB)",correct:"  de Broglie",incorrect:[" Einstein"," Newton"]},{difficulty:"hard",question:"25)The energy of particle in a infinite potential box is .........",correct:"  Inversely proportional to square of length of box",incorrect:[" proportional to length of box "," Inversely proportional to length of box","Non of these"]},{difficulty:"hard",question:"26-.....said that it would also be hard to specify the exact position of a particle that exhibits wavelike behavior ",correct:"  Heisenberg",incorrect:[" Blank "," Newton","Bohr"]},{difficulty:"hard",question:"27)If the is the wave function , the probability density function is given by \u2026\u2026\u2026\u2026\u2026..",correct:"  \u05C0\u03A8\xB2\u05C0 ",incorrect:[" \u05C0\u03A8\u05C0 "," \u05C0\u03A8\xB3\u05C0","\u05C0\u03A8\u2074\u05C0"]},{difficulty:"hard",question:"28)Wave function \u03A8 of a particle is",correct:" a complex quantity",incorrect:["a real quantity"," an imaginary quantity","none of these"]},{difficulty:"hard",question:"29)In the blackbody radiation, which is electromagnetic radiation whose wavelength and colour that depends on....... of the object",correct:"Temperature",incorrect:["viscosity"," velocity","Time"]},{difficulty:"hard",question:"30) The energy of a photon is........to the light frequency",correct:"Directly proportional",incorrect:[" inversly proportional ","not of them."]},{difficulty:"hard",question:"31)The energy in excess of the classical minimum, is known  as...................",correct:" Zero point energy",incorrect:[" Kinetic energy"," Potential energy"]},{difficulty:"hard",question:"32) Planck's constant has unit of",correct:"J.S",incorrect:[" S"," J/S"," J"]},{difficulty:"hard",question:"33) Objects at high temperature emit a continuous spectrum of .. ",correct:"Electromagnetic radiation ",incorrect:[" Magnetic radiation Objects"," Electrical radiation "," Thermal radiation"]}],B=[{difficulty:"easy",question:"34) Linear motion is......",correct:"  Angular Momentum",incorrect:[" Angular Velocity ","Volume","Velocity"]},{difficulty:"easy",question:"35) The energy spacing ............ as the box size decreases",correct:"Decrease",incorrect:["Increase","still the same"]},{difficulty:"easy",question:"36-schrodinger equation is a",correct:"2nd order differential equation.",incorrect:["1st order differential equation. "," none of these","both 1nd & 2nd order differential"]},{difficulty:"easy",question:"37)Photoelectric effect was explained by",correct:"Einstein",incorrect:["Faraday","Plank","Hertz"]},{difficulty:"medium",question:"38- According to quantum mechanics what is the true for free particle? ",correct:"Vparticle = Vwave",incorrect:["Vparticle < Vwave","Vwave > Vparticle"]},{difficulty:"medium",question:"39)The mass of a moving photon is",correct:"hv/c2",incorrect:[" hv/c ","hv","zero"]},{difficulty:"medium",question:"40)The dual nature of light exhibited by",correct:"diffraction and photoelectric effect",incorrect:["diffraction and reflection.","refraction and interference photoelectric effect"]},{difficulty:"medium",question:"41)Wave picture of light failed to explain.",correct:"the photoelectric effect",incorrect:["polarization of light","diffraction of light","None of these"]},{difficulty:"hard",question:"42)The relationship between energy of a photon and its wavelength",correct:"Energy is inversely proportional to wavelength",incorrect:["Energy is directly proportional to wavelength","Energy is independent of wavelength","None of the above"]},{difficulty:"hard",question:"43)Light of wavelength 4000 \xC5 is incident on a sodium surface for which the threshold wavelength of photo-electrons is 5420 \xC5. The work function of sodium is",correct:"2.29 eV",incorrect:["5 eV","3 eV","0.57 eV"]},{difficulty:"hard",question:"44)If the wavelength of the light is increased, then the energy of the photon will:",correct:"Decrease",incorrect:["Increase","Remain unchanged"," None of these"]},{difficulty:"hard",question:"45)Which phenomena show the particle nature of light?",correct:"Photoelectric effect",incorrect:["Diffraction","Interference","Polarization"]},{difficulty:"hard",question:"46)Which experiment proved the particle nature of light?",correct:"Compton effect",incorrect:["Interference","Diffraction","Polarisation"]},{difficulty:"hard",question:"47)Which of the following can be concluded from the photo-electric effect?",correct:"particle nature of light",incorrect:["wave nature of light","interference of light","diffraction of light"]},{difficulty:"hard",question:"48-What is the main point of the de Broglie equation?",correct:"matter has wave-like properties",incorrect:["the position of light cannot be precisely determined","matter only behaves like a particle","Einstein's theory of relativity was incorrect"]},{difficulty:"hard",question:"49-Which of the following is not a characteristic of wave function?",correct:"Physically Significant",incorrect:[" Single valued","Differentiable","Continuous"]},{difficulty:"hard",question:"50-The energy of a particle in a infinite potential box is",correct:" Inversely proportional to Square of length of box",incorrect:["Proportional to length of box ","  Inversely proportional to length of box"," None of these"]},{difficulty:"hard",question:"51-The walls of a particle in a box are supposed to be",correct:" Infinitely hard and infinitely large ",incorrect:["Infinitely large but soft ","  Soft and Small"," Small but infinitely hard"]},{difficulty:"hard",question:"52-Choose the wrong statement about the spin of an electron, according to quantum mechanics: ",correct:" Spin is the rotation of an electron about its own axis.",incorrect:["Value of the spin quantum number of electrons must not be 1. ","+1/2 value of spin quantum number represents up spin","It is related to intrinsic angular momentum"]},{difficulty:"hard",question:"53-Assuming the velocity to be the same, which particle is having longest wavelength",correct:" an electron",incorrect:[" a proton"," a neutron"," an \u03B1-particle "]},{difficulty:"hard",question:"54-The uncertainty principle states that the error in measurement is due to",correct:"due to the small size of particles",incorrect:["  dual nature of particles","  due to large size of particles"," due to error in measuring instrument"]},{difficulty:"hard",question:"55- If the uncertainty in the velocity of a moving object is 1.0\xD710\u20136 ms\u20131 and the uncertainty in its  positions is 58 m, the mass of this object is approximately equal to that of:",correct:"electron",incorrect:["lithium","deuterium","helium"]},{difficulty:"hard",question:"56-The Schrodinger wave equation is........ ",correct:"Linear",incorrect:["Quadratic"," Differential equation"," Derivable"]},{difficulty:"hard",question:"57-Classical physics predicted that the number of electrons emitted and their kinetic energy should depend on...........",correct:"  Both Frequency and wavelength",incorrect:[" Frequency"," wavelength","Only the intensity of the lightv"]},{difficulty:"hard",question:"58-Which of the following can be a wave function?",correct:"  Sin x",incorrect:["  Tan x ","  Cot x"," Sec x"]},{difficulty:"hard",question:"59- Wave function P of a particle is",correct:"   a complex quantity",incorrect:[" a real quantity "," an imaginary quantity","none of these"]},{difficulty:"hard",question:"60- Which of the following quantities is proportional to the probability density at a point?",correct:" the square of the wave function",incorrect:["The wavefunction"," the de Broglie wavelength","the reciprocal of the de Broglie wavelength"]},{difficulty:"hard",question:"61-the propagated waves would be out of phase, resulting in a net ........decrease in amplitude and  causing",correct:" destructive",incorrect:["wavelength"," constructive interference","frequency"]},{difficulty:"hard",question:"62- The probability density of a particle is",correct:"Always postive",incorrect:[" can be negative or positive."," Negative","Complex quantity"]},{difficulty:"hard",question:"63-The electron is accelerated from rest between two points which has potential of 20V and 40 V  respectively. Associated De-Broglie wavelength is",correct:"2.75 A",incorrect:[" 7.5 A ","0.75 A","2.75 m"]},{difficulty:"hard",question:"64-Which two characteristics are variables in Heisenberg's uncertainty principle",correct:" position and momentum",incorrect:[" wavelength and distance"," charge and displacement","atomic radius and frequency"]},{difficulty:"hard",question:"65-If the particle moving in a....... Potential then the solution of the wave equation are described as a stationary states",correct:" time independent",incorrect:[" time dependent"," velocity dependent ","  velocity independent"]},{difficulty:"hard",question:" 66-The value of energy for which schrodinger's steady state equation can be solved is called",correct:"eigen values",incorrect:[" eigen vector"," eigen functions "," operators"]}],P=[{difficulty:"easy",question:"67) ...........began wonder could particles exhibit the properties of waves",correct:"   louis de Broglie",incorrect:[" Ruther ford. ","Rydberg"]},{difficulty:"easy",question:"68-For a box with infinitely hard walls , the potential is maximum at",correct:"L",incorrect:["2L","L/2","3L"]},{difficulty:"easy",question:"69-The walls of a particle in a box are supposed to be",correct:"infinitely hard and infinitely large",incorrect:["small but infinitely hard","infinitely large but soft","soft and small "]},{difficulty:"easy",question:"70-Because plank's constant is a very small number , the Heisenberg uncertainty principle is important only for particles with ......",correct:"High masses ",incorrect:[" moderate masses"," High and moderate masses ","very low masses"]},{difficulty:"medium",question:"71-Rutherford's model of the atom",correct:"All of Them ",incorrect:[" Does not yield discrete emission lines "," Does not explain the Rydberg formula"," Is not stable relative to collapse of electron into nucleus"]},{difficulty:"medium",question:"72-Classical mechanical model of atomic structure Coulomb attraction plays the role of .......",correct:"gravity",incorrect:[" mass ","Conductivity","Capacity"]},{difficulty:"medium",question:"73-According to the Heisenberg Uncertainty Principle,Because a wave is a disturbance that travels in space, it has..........position",correct:"no fixed",incorrect:["the same","a and b","fixed"]},{difficulty:"medium",question:"74-The electrons can oscillate (& radiate) equally well at.....Frequency ",correct:"any",incorrect:["low","medium","high"]},{difficulty:"hard",question:"(75) The concept of matter wave was suggested by_____",correct:"de Broglie",incorrect:["Heisenberg","Schrodinger","Laplace"]},{difficulty:"hard",question:"(76) The intensity of the diffraction pattern is proportional to ______ of the wave function ",correct:"square",incorrect:["forth power","cube"," sixth power"]},{difficulty:"hard",question:"(77) The function representing matter waves must be _______",correct:" complex ",incorrect:["real","zero"," infinity"]},{difficulty:"hard",question:"(78) The total probability of finding the particle in space must be __________",correct:"unity ",incorrect:["zero","infinity","double"]},{difficulty:"hard",question:"(79) The normalized wave function must have ________ norm",correct:"finite",incorrect:["zero","unity","complex"]},{difficulty:"hard",question:"(80) The Non-normalized wave function  must have ________ norm",correct:"infinite",incorrect:["zero","finite","complex"]},{difficulty:"hard",question:"(81) For normalized wave function \u03C8\u21920 as r\u2192___ ",correct:"\u03B1",incorrect:[" 0 ","1","-1"]},{difficulty:"hard",question:"(82) The square of the magnitude of the wave function is called_________",correct:"  probability densit",incorrect:["  current density","zero density ","volume density"]},{difficulty:"hard",question:"(83) The operator \u2207 is called _______ operator ",correct:" Laplacian",incorrect:["Hamiltonian ","  IPoisson"," vector"]},{difficulty:"hard",question:"(84) _________ principle states that the actual path taken by the light ray is one  which minimizes the integral",correct:" Maupertuis ",incorrect:["Heisenberg"," Hamilton\u2019s"," Fermat\u2019s"]},{difficulty:"hard",question:"85-Quantum mechanics deals with _____ subject?",correct:"Physics",incorrect:["Mechanics","Mechanics","Electronics"]},{difficulty:"hard",question:"86-Schrodinger equation is a part of ____ law? ",correct:" Newtons",incorrect:[" Charl\u2019s"," Ohms"," None of the above"]},{difficulty:"hard",question:"87-Classical mechanics defines ____? ",correct:"Break downs",incorrect:[" Force","   All the above"]},{difficulty:"hard",question:"88-Which of the following scientist discovered matrix based mechanism of Schrodinger equation? ",correct:"Werner Heisenberg",incorrect:[" Richard F"," Paul Dirac","None of the above"]},{difficulty:"hard",question:"89-Schrodinger wave equation also help in finding out the ____? ",correct:"Quantum number",incorrect:["Prime number","  Even number"," Odd number "]},{difficulty:"hard",question:"90-A periodic wave has _____ equilibrium positions?",correct:" Zero",incorrect:[" Maximum"," Minimum","Infinite"]},{difficulty:"hard",question:"91-____ is the particles to and fro motion about a mean position? ",correct:"   Oscillatory motion",incorrect:[" Damping"," Overdamping"," Clipping"]},{difficulty:"hard",question:"92-Kinetic energy in Hamiltonian operator (H=T+V) is represented as___?",correct:" T",incorrect:[" V ","H","S"]},{difficulty:"hard",question:"93-Which of the following are the disadvantages of Schrodinger wave equation? ",correct:"  Complicate in understanding physical model of electrons as waves",incorrect:[" Aperiodic signal","Newtons third law","All the above"]},{difficulty:"hard",question:"94). A stationary type of state is a ____ state?",correct:" Quantum",incorrect:["Exponential"," Linear ","All the above "]},{difficulty:"hard",question:"95-Force is expressed in terms of ___?",correct:" Newtons",incorrect:[" Joules"," Seconds","Meters"]},{difficulty:"hard",question:"96-A periodic wave has _____ restoring force? ",correct:"Zero",incorrect:["Maximum","Minimum","Infinite"]},{difficulty:"hard",question:"97-A Schrodinger equation governs ____ form of quantum mechanics? ",correct:"  Wave",incorrect:["Air","Noise","All the above "]},{difficulty:"hard",question:"98-A periodic wave is _____ form?",correct:" Sinusoidal",incorrect:[" Square"," Rectangle ","  All the above"]},{difficulty:"hard",question:" 99-Potential energy of a Schrodinger equation is _____?",correct:"Additive",incorrect:[" Subtractive"," Multiplex "," All the above"]},{difficulty:"hard",question:" 100-Which of the following scientist discovered matrix based mechanism of Schrodinger equation?",correct:" Werner Heisenberg",incorrect:["  Richard F"," Paul Dirac"," None of the above "]}];function O(){const[o,i]=s.exports.useState(null),[c,n]=s.exports.useState([]),t=r=>{switch(i(r),r.name){case p.first.name:n(R);break;case p.second.name:n(B);break;case p.third.name:n(P);break}};return e(d,{children:u(E,{children:[e(m,{className:"my-5",children:e(y,{className:"text-center",children:e("h1",{onClick:()=>i(null),children:"QC Quiz"})})}),o?u(d,{children:[e(m,{className:"d-flex justify-content-center gap-4 mb-4",children:e(y,{md:4,className:"text-center",children:e(T,{category:o,size:"sm",onSelect:t})})}),e(m,{className:"d-flex justify-content-center",children:e(y,{md:4,className:"text-center",children:e(U,{questions:c})})})]}):e(d,{children:Object.values(p).map((r,l)=>e(m,{className:"d-flex justify-content-center mb-5",children:e(y,{md:4,children:e(T,{category:r,onSelect:t})})},l))})]})})}M.render(e(H.StrictMode,{children:e(O,{})}),document.getElementById("root"));
