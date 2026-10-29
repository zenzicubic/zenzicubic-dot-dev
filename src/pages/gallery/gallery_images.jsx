/**
 * This is the list of all of the images in the gallery, along with their
 * titles, descriptions, alt text, and other additional data.
 * @author Zenzicubic
 * @license MIT
 */

import React from 'react';

import { BasicLink } from '../../components/general/BasicComponents.jsx';
import { MathJax } from 'better-react-mathjax';

export const groupNames = ["Birds and nature", "Mathematical visualization", "Abandoned places"];

export const imageList = [
    {
        title: "Dipper",
        description: <>An American dipper (<i>Cinclus mexicanus</i>) photographed near McDonald Falls in Glacier National Park.</>,
        filename: "dipper.jpg",
        date: "Aug 2026",
        alt: "A gray bird with a brown bill, with all its feathers visible, facing the camera",
        category: 0
    },
    {
        title: "Hooded Warbler",
        description: <>A male hooded warbler (<i>Setophaga citrina</i>) photographed at Worthington State Forest in NJ.</>,
        filename: "hoody.png",
        date: "May 2026",
        alt: "A small yellow bird with olive wings and a black hood perched on a maple branch, facing the camera",
        category: 0
    },
    {
        title: "Carib",
        description: <>A green-throated carib (<i>Eulampis holosericeus</i>) photographed at Grand &Eacute;tang National Park in Grenada.</>,
        filename: "carib.jpg",
        date: "Feb 2026",
        alt: "A hummingbird on a thin branch, with a purple throat and green head",
        category: 0
    },
    {
        title: "Bird Bath",
        description: <>A white-throated sparrow (<i>Zonotrichia albicollis</i>) taking a bath, seen at Sandy Hook in NJ.</>,
        filename: "bird_bath.png",
        date: "Nov 2025",
        alt: "A sparrow sitting in a puddle and bathing, with one wing up and a splash of water in the air",
        category: 0
    },
    {
        title: "Kinglet",
        description: <>A golden-crowned kinglet (<i>Regulus satrapa</i>) seen on a juniper at Sandy Hook in NJ.</>,
        filename: "kinglet.png",
        date: "Nov 2025",
        alt: "A tiny gray bird perched on a juniper branch laden with berries, with a yellow crown and yellow streaks on the tail",
        category: 0
    },
    {
        title: "Orb Weaver",
        description: <>A yellow garden spider (<i>Argiope aurantia</i>) seen at Rea Farm in Cape May, NJ.</>,
        filename: "orbweaver.png",
        date: "Sep 2025",
        alt: "A black orbweaver spider with yellow spots and orange and black legs perched on its web, stablamentum clearly visible",
        category: 0
    },
    {
        title: "Sweat Bee",
        description: <>A sweat bee (<i>Augochlora</i> spp.) seen at Rea Farm in Cape May, NJ.</>,
        filename: "sweatbee.png",
        date: "Sep 2025",
        alt: "A green, iridescent bee perched on a leaf",
        category: 0
    },
    {
        title: "Skipper",
        description: <>A Huron skipper (<i>Atalopedes huron</i>) seen in my backyard in northern NJ.</>,
        filename: "skipper.png",
        date: "Sep 2025",
        alt: "A small yellow-brown butterfly drinking from a puffy blue flower, with its eyes, antennae, and proboscis clearly visible",
        category: 0
    },
    {
        title: "Common Buckeye",
        description: <>A common buckeye butterfly (<i>Junonia coenia</i>) seen at the Pole Farm in Mercer County, NJ.</>,
        filename: "buckeye_butterfly.png",
        date: "Aug 2025",
        alt: "A brown butterfly with orange streaks and eyespots on its wings resting on sandy ground",
        category: 0
    },
    {
        title: "Common Yellowthroat",
        description: <>A perched common yellowthroat (<i>Geothlypis trichas</i>) seen at Troy Meadows in Parsippany, NJ.</>,
        filename: "yellowthroat.png",
        date: "May 2025",
        alt: "A small olive bird with a yellow throat and a black mask with a gray streak above it perched on a tree whose leaves partially obscure its rear",
        category: 0
    },
    {
        title: "Forster's Tern",
        description:  <>A Forster's tern (<i>Sterna forsteri</i>) in flight, seen at Forsythe NWR near Galloway, NJ.</>,
        filename: "tern.png",
        date: "Apr 2025",
        alt: "A white bird with a black cap on its head, a black-tipped orange bill, and a distinctive, cutting silhouette gliding over a marsh",
        category: 0
    },
    {
        title: "Violet-green Swallow",
        description: <>An oddly cooperative violet-green swallow (<i>Tachycineta thalassina</i>) near La Ventana, Baja California Sur.</>,
        filename: "violetgreen.png",
        date: "Feb 2025",
        alt: "An iridescent green bird with a white head and breast and black tail feathers perched on a dead tree in front of a blue sky",
        category: 0
    },
    {
        title: "California Quail",
        description: <>A California quail (<i>Callipepla californica</i>) perched on a palm tree in La Ventana, Baja California Sur, Mexico.</>,
        filename: "califquail.png",
        date: "Feb 2025",
        alt: "A stout gray bird with white and brown streaks, brown-rimmed cream breast feathers, a white-lined black head, and a black plume standing on a spiky palm leaf",
        category: 0
    },
    {
        title: "Wood Duck",
        description: <>A rather confused wood duck (<i>Aix sponsa</i>), seen at the Potash Lake Recreational Area in Oakland, NJ.</>,
        filename: "woodduck.png",
        date: "Jan 2025",
        alt: "A duck with a red eye, blue head, pink bill, and multicolored body gliding through a creek, with snow visible in the reflection",
        category: 0
    }, 
    {
        title: "Harlequin Duck",
        description: <>A male harlequin duck (<i>Histrionicus histrionicus</i>), photographed at Barnegat Light in NJ.</>,
        filename: "harlequinduck.png",
        date: "Jan 2025",
        alt: "A stout navy-blue duck with white spots and stripes and reddish patches swimming along in a rough sea",
        category: 0
    }, 
    {
        title: "Paper Mill Window",
        description: "A photo I took of a broken window at the same location as the last photo.",
        filename: "millwindow.png",
        date: "Jan 2025",
        alt: "A broken window with sunlight shining through in a decrepit building, with tangled plants visible outside",
        category: 2
    },
    {
        title: "Paper Mill Pumps",
        description: "A photo I took of some pumps at the abandoned Fibermark Paper Mill in Warren County, NJ, which is currently being demolished.",
        filename: "millpumps.png",
        date: "Jan 2025",
        alt: "Industrial pumps, pipes, and valves in a dank pit with water at the bottom",
        category: 2
    },{
        title: "Server Room",
        description: "A photo taken in a dilapidated server room in the abandoned Mercer Hospital.",
        filename: "servers.png",
        date: "Jan 2025",
        alt: "A decaying room with a warped ceiling and filled with broken computer equipment",
        category: 2
    },
    {
        title: "Kummer Surface",
        description: <>A rendering of <BasicLink href="https://en.wikipedia.org/wiki/Kummer_surface">Kummer&apos;s quartic surface</BasicLink>, a nodal surface with 16 double points.</>,
        filename: "kummer.png",
        date: "Sep 2024",
        alt: "A shiny, tetrahedral mathematical surface with many points of self-intersection, colored blue on one side and red on the other, sitting in a black void",
        category: 1
    },
    {
        title: "Vermillion Flycatcher",
        description: <>A vermillion flycatcher (<i>Pyrocephalus obscurus</i>), photographed during a vacation to the Quindio region of Colombia.</>,
        filename: "vermillionflycatcher.png",
        date: "Sep 2024",
        alt: "A striking red bird with black wings and a black stripe around the eye perched on a branch",
        category: 0
    },
    {
        title: "Monastery",
        description: <>A photo I took of a room in the abandoned St. Paul&apos;s Abbey in Newton, NJ.</>,
        filename: "monastery.png",
        date: "Jul 2024",
        alt: "A decrepit white room with peeling paint and large windows with the sun shining through; two ceiling fans with their blades curving down",
        category: 2
    },
    {
        title: "Tree Swallow",
        description: <>A tree swallow (<i>Tachycineta bicolor</i>) on a branch, photographed at the Pole Farm in Mercer County, NJ.</>,
        filename: "treeswallow.png",
        date: "Jun 2024",
        alt: "A bluish-green bird with a white breast and throat and black wings perched on a small curved stick",
        category: 0
    },
    {
        title: "Five Cubes",
        description: <>A raytraced image of the <BasicLink href="https://en.wikipedia.org/wiki/Compound_of_five_cubes">compound of five cubes</BasicLink> in a dodecahedron.</>,
        filename: "cubefivecmpd.png",
        date: "May 2024",
        alt: "A red cube, a green cube, a blue cube, a yellow cube, and an orange cube rotated so as to fit in a gray wireframe dodecahedron, which sits on a gray plane",
        category: 1
    },
    {
        title: "Five Tetrahedra",
        description: <>A raytraced image of the <BasicLink href="https://en.wikipedia.org/wiki/Compound_of_five_tetrahedra">compound of five tetrahedra</BasicLink>.</>,
        filename: "tetfivecmpd.png",
        date: "May 2024",
        alt: "Five wireframe tetrahedra, one red, one green, one blue, one yellow, and one orange, rotated in a specific configuration and resting on a gray plane",
        category: 1
    },
    {
        title: "Chuck-will's-widow",
        description: <>A female chuck-will's-widow (<i>Antrostomus caroliniensis</i>) sitting on her nest. Photographed at Fort De Soto, FL.</>,
        filename: "chuckwillswidow.png",
        date: "Apr 2024",
        alt: "A brown bird covered in black and white spots, with half-lidded eyes and a peculiar short bill, sitting on the stick- and leaf-covered ground",
        category: 0
    },
    {
        title: "Purple Gallinule",
        description: <>A purple gallinule (<i>Porphyrio martinica</i>), photographed in Sarasota, FL while on vacation.</>,
        filename: "purplegallinule.png",
        date: "Apr 2024",
        alt: "A stout indigo, blue, and green bird with red eyes, a yellow-tipped red bill, a sky-blue patch on the head, and massive yellow feet stands on a mat of marsh plants",
        category: 0
    },
    {
        title: "Oystercatcher",
        description: <>An American oystercatcher (<i>Haematopus palliatus</i>) in front of a wave, seen at Sandy Hook NWR in New Jersey.</>,
        filename: "oystercatcher.png",
        date: "Apr 2024",
        alt: "A dark-brown bird with a black head, an orange-ringed yellow eye, a long orange bill, and a white breast standing on one leg on a rocky beach",
        category: 0
    },
    {
        title: "Monk Parakeets",
        description: <>One of the many nests of feral monk parakeets (<i>Myiopsitta monachus</i>) who have made their home in Edgewater, NJ.</>,
        filename: "parakeets.png",
        date: "Apr 2024",
        alt: "Several green-and-white parakeets with orange bills perched in and around a mass of sticks surrounded by the branches of a tree",
        category: 0
    },
    {
        title: "Osprey",
        description: <>An osprey (<i>Pandion haliaetus</i>) in flight over the pond at Garret Mountain Park near Patterson, NJ.</>,
        filename: "osprey.png",
        date: "Apr 2024",
        alt: "An eagle-like raptor hovers in a blue sky, posed as if ready to dive down and strike its prey",
        category: 0
    },
    {
        title: "Brown Creeper",
        description: <>A brown creeper (<i>Certhia americana</i>) climbing a tree, sighted near Garret Mountain Park near Patterson, NJ.</>,
        filename: "creeper.png",
        date: "Apr 2024",
        alt: "A petite brown bird with white speckles, a curved bill, and a white breast climbing the bark of a tree",
        category: 0
    },
    {
        title: "Diamond Lattice",
        description: "A view from inside the crystal structure of diamond, or more technically the diamond cubic lattice.",
        filename: "diamondcubic.png",
        date: "Apr 2024",
        alt: "A mathematical illustration of a lattice composed of white rods and red balls stretching off into the distance",
        category: 1
    },
    {
        title: "Abandoned Resort",
        description: "A picture I took a few weeks ago at the abandoned Unity House resort in the Poconos between PA and NJ.",
        filename: "unityhouse.png",
        date: "Mar 2024",
        alt: "An abandoned waiting room hallway which curves to the left, the walls covered in moss and peeling paint",
        category: 2
    },
    {
        title: "Cubic Surface",
        description: <>A raytraced image of the cubic surface defined by the equation <MathJax inline>{"\\(z(z^2-1)=x(x^2-3y^2)\\)"}</MathJax>, based on <BasicLink href= "https://mathcurve.com/surfaces.gb/cubic/cubic.shtml">this page by Robert Ferreol</BasicLink>.</>,
        filename: "mathcurve_cubic.png",
        date: "Feb 2024",
        alt: "A smooth mathematical surface, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    {
        title: "Tritrumpet",
        description: <>A raytraced image of the <BasicLink href="https://www.paulbourke.net/geometry/tritrumpet/">tritrumpet</BasicLink> cubic surface defined by the equation <MathJax inline>{"\\(8z^2+(2x+1)(3y^2-(x-1)^2)=0\\)"}</MathJax>.</>,
        filename: "tritrumpet.png",
        date: "Feb 2024",
        alt: "A triangular mathematical surface with three points of self-intersection, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    {
        title: "Goursat Cubic",
        description: <>A raytraced image of Goursat&apos;s tetrahedral cubic surface defined by the equation <MathJax inline>{"\\(x^2+y^2+z^2-kxyz=1\\)"}</MathJax>, with <MathJax inline>{"\\(k = \\frac{5}{2}\\)"}</MathJax> in this image.</>,
        filename: "goursat_cubic.png",
        date: "Feb 2024",
        alt: "A smooth tetrahedral mathematical surface, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    {
        title: "Clebsch Cubic",
        description: <>A raytraced image of a view of the famous <BasicLink href="https://blogs.ams.org/visualinsight/2016/03/01/clebsch-surface/">Clebsch cubic</BasicLink> in <MathJax inline>{"\\(\\mathbb{R}^3\\)"}</MathJax>.</>,
        filename: "clebsch_cubic.png",
        date: "Feb 2024",
        alt: "A fluted mathematical surface with three holes, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    {
        title: "Cayley Cubic no. 2",
        description: <>A raytraced image of another view of Cayley&apos;s nodal cubic surface in <MathJax inline>{"\\(\\mathbb{R}^3\\)"}</MathJax>, described by the equation <MathJax inline>{"\\(x^2+y^2+z^2-2xyz=1\\)"}</MathJax>.</>,
        filename: "cayley_cubic_2.png",
        date: "Feb 2024",
        alt: "A tetrahedral mathematical surface with four points of self-intersection, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    
    {
        title: "Cayley Cubic no. 1",
        description: <>A raytraced image of <BasicLink href="https://mathcurve.com/surfaces.gb/cayley/cayley.shtml">a view</BasicLink> of Cayley&apos;s nodal cubic surface in <MathJax inline>{"\\(\\mathbb{R}^3\\)"}</MathJax>. I built a raytracer for cubic surfaces to make this series of images.</>,
        filename: "cayley_cubic_1.png",
        date: "Feb 2024",
        alt: "An intricate mathematical surface with three points of self-intersection, colored blue on one side and red on the other, resting on a checkerboard plane",
        category: 1
    },
    {
        title: "Sanderling",
        description: <>A sanderling (<i>Calidris alba</i>) at Barnegat Light State Park in New Jersey</>,
        filename: "sanderling.png",
        date: "Feb 2024",
        alt: "A grayish bird with a white head and breast, black legs, and a black bill walking across a sandy beach, with the ocean visible in the background",
        category: 0
    },
    {
        title: "Red-breasted Merganser",
        description: <>A red-breasted merganser (<i>Mergus serrator</i>) male showing his crest at Barnegat Light State Park in New Jersey</>,
        filename: "merganser.png",
        date: "Feb 2024",
        alt: "A duck-like bird with a slim red bill, a bright red eye, a crested black head, and a black-and-white body floating in the ocean",
        category: 0
    },
    {
        title: "Long-tailed Duck Male",
        description: <>One of my favorite sea ducks: a long-tailed duck (<i>Clangula hyemalis</i>) male, seen at Barnegat Light State Park in New Jersey</>,
        filename: "longtail2.png",
        date: "Feb 2024",
        alt: "A dapper duck with a yellow eye, a white head with a brown spot, a brown, black, and white body, and an extremely long tail swimming in the ocean",
        category: 0
    },
    {
        title: "Newton Fractal no. 6",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^8+15z^4-16\\)"}</MathJax>.</>,
        filename: "newtonfractal6.png",
        date: "Jan 2024",
        alt: "A complex multicolored interlacing multilobed fractal pattern with black dots",
        category: 1
    },
    {
        title: "Newton Fractal no. 5",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^3+2.57z^2+1\\)"}</MathJax>, zoomed to show one of the hidden Julia sets within.</>,
        filename: "newtonfractal5.png",
        date: "Jan 2024",        
        alt: "A complex blue, green, and purple fractal pattern with many smaller black fractals visible within",
        category: 1
    },
    {
        title: "Newton Fractal no. 4",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^4-4z^2-6\\)"}</MathJax>.</>,
        filename: "newtonfractal4.png",
        date: "Jan 2024",
        alt: "A complex cyan, purple, red, and green interlacing, multilobed fractal pattern",
        category: 1
    },
    {
        title: "Newton Fractal no. 3",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^5+z^3-1\\)"}</MathJax>.</>,
        filename: "newtonfractal3.png",
        date: "Jan 2024",
        alt: "An asymmetrical, multicolored, interlacing multilobed fractal pattern",
        category: 1
    },
    {
        title: "Newton Fractal no. 2",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^6+z^3-1\\)"}</MathJax>.</>,
        filename: "newtonfractal2.png",
        date: "Jan 2024",
        alt: "A multicolored, multilobed, interlacing fractal pattern with three-fold symmetry",
        category: 1
    },
    {
        title: "Newton Fractal no. 1",
        description: <>A view of the Newton fractal for the polynomial <MathJax inline>{"\\(z^5-1\\)"}</MathJax>.</>,
        filename: "newtonfractal1.png",
        date: "Jan 2024",
        alt: "A multicolored, multilobed, interlacing fractal pattern with five-fold symmetry",
        category: 1
    },
    {
        title: "Islamic-style Hyperbolic Tiling",
        description: <>A <MathJax inline>{"\\(\\{4, 5\\}\\)"}</MathJax> hyperbolic tiling with a pattern based on zellij tiles and girih patterns from Islamic geometric design.</>,
        filename: "islamictiling.png",
        date: "Dec 2023",
        alt: "A tiling composed of smaller and smaller curved blue and green eight-pointed and yellow five-pointed stars in a disk, themselves composed of overlapping white straps",
        category: 1
    },
    {
        title: "Heptagonal Band",
        description: <>The <MathJax inline>{"\\(\\{7, 3\\}\\)"}</MathJax> hyperbolic tiling in the band model.</>,
        filename: "heptaband.png",
        date: "Dec 2023",
        alt: "A tiling composed of curved heptagons, each divided into 14 equal triangles, filling a band-shaped region",
        category: 1
    },
    {
        title: "Heptagonal Half-Plane",
        description: <>The <MathJax inline>{"\\(\\{7, 3\\}\\)"}</MathJax> hyperbolic tiling in the Poincar&eacute; half-plane model.</>,
        filename: "heptahalf.png",
        date: "Dec 2023",
        alt: "A tiling composed of curved heptagons, each divided into 14 equal triangles, getting smaller and smaller as they fill the whole image",
        category: 1
    },
    {
        title: "Square Model",
        description: <>The <MathJax inline>{"\\(\\{5, 4\\}\\)"}</MathJax> hyperbolic tiling in an <BasicLink href="https://archive.bridgesmathart.org/2018/bridges2018-59.pdf">approximate square model</BasicLink> of the hyperbolic plane.</>,
        filename: "squaremodel.png",
        date: "Dec 2023",
        alt: "A tiling composed of colorful curved pentagons, 4 to each vertex, filling a square region",
        category: 1
    },
    {
        title: "Cardioid Model",
        description: <>The <MathJax inline>{"\\(\\{4, 6\\}\\)"}</MathJax> hyperbolic tiling in the Poincar&eacute; disk with the conformal map <MathJax inline>{"\\(z \\mapsto (z+1)^2\\)"}</MathJax> applied.</>,
        filename: "cardioidmodel.png",
        date: "Dec 2023",
        alt: "A tiling of colorful curved squares, 6 to each vertex, filling a heart-shaped region",
        category: 1
    },
    {
        title: "Triangle Group",
        description: "An image of the 732 triangle group.",
        filename: "732trigroup.png",
        date: "Dec 2023",
        alt: "A blue tiling of curved triangles with 7-fold symmetry filling a disk",
        category: 1
    },
    {
        title: "Icosahedral Reflections",
        description: "An image of chaotic scattering phenomena between spheres in an icosahedral arrangement.",
        filename: "wada_icosa.png",
        date: "Dec 2023",
        alt: "An icosahedral arrangement of shiny spheres with a sky background, each sphere reflecting every other to create an intricate fractal pattern",
        category: 1
    },
    {
        title: "Jacobi CN",
        description: <>A plot of the Jacobi elliptic function <MathJax inline>{"\\(\\text{cn}(z, 0.5)\\)"}</MathJax> made using a domain coloring program I wrote.</>,
        filename: "cn.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image composed of a pattern of nested curves which get smaller and repeat over the whole plane",
        category: 1
    },
    {
        title: "Gamma Function",
        description: <>A domain-coloring plot of the gamma function <MathJax inline>{"\\(\\Gamma(z)\\)"}</MathJax> in the complex plane.</>,
        filename: "gamma.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image composed of nested curves expanding outward and shrinking inward",
        category: 1
    },
    {
        title: "Digamma Function",
        description: <>A domain-coloring plot of the digamma function <MathJax inline>{"\\(\\psi(z)\\)"}</MathJax> in the complex plane.</>,
        filename: "digamma.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image composed of kidney-shaped nested curves shrinking inward",
        category: 1
    },
    {
        title: "Lemniscate Sine",
        description: <>A domain-coloring plot of the lemniscate sine function <MathJax inline>{"\\(\\text{sl}(z)\\)"}</MathJax> in the complex plane.</>,
        filename: "sl.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image composed of repeating squares containing nested curves which get smaller and smaller",
        category: 1
    },
    {
        title: "Lambert W",
        description: <>A domain-coloring plot of the principal branch of the Lambert <i>W</i>-function <MathJax inline>{"\\(W_0(z)\\)"}</MathJax> in the complex plane.</>,
        filename: "lambertw.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image consisting of a series of nested heart-shaped curves which get progressively rounder and a straight line",
        category: 1
    },
    {
        title: "Icosahedral Function",
        description: <>A domain-coloring plot of a <BasicLink href="https://math.stackexchange.com/questions/1469554/polyhedral-symmetry-in-the-riemann-sphere">rational function with icosahedral symmetry</BasicLink>.</>,
        filename: "icosa.png",
        date: "Nov 2023",
        alt: "A rainbow mathematical image composed of intricate nested curves with five-fold symmetry",
        category: 1
    },
    {
        title: "Riemann Sphere",
        description: <>A domain coloring plot of the function <MathJax inline>{"\\(\\sin(z)\\)"}</MathJax> on both the <BasicLink href="https://en.wikipedia.org/wiki/Riemann_sphere">Riemann sphere</BasicLink> and complex plane.</>,
        filename: "stereo_prj.png",
        date: "Sep 2023",
        alt: "A multicolored pattern on a sphere; the same pattern is projected  out from the sphere's north pole onto a plane below it",
        category: 1
    },
    {
        title: "Kepler-Poinsot",
        description: <>Raytraced renders of the four <BasicLink href="https://en.wikipedia.org/wiki/Kepler-Poinsot_polyhedron">Kepler-Poinsot solids</BasicLink>.</>,
        filename: "kepler_poinsot.png",
        date: "Sep 2023",
        alt: "A collection of four reflective spiky solids, three red and one yellow, in a black void",
        category: 1
    },
    {
        title: "Rail Bridge Graffiti",
        description: "Some particularly attractive graffiti I photographed at the abandoned Paulinskill Viaduct.",
        filename: "railbridge.png",
        date: "Sep 2023",
        alt: "A picture looking out over a forest from one of the arches of an abandoned rail bridge; the walls are covered in graffiti",
        category: 2
    },
    {
        title: "Icosahedral Sphere Inversion",
        description: "A fractal pattern generated by iterated inversion in spheres arranged in an icosahedron.",
        filename: "icosahedral_sph_inv.png",
        date: "Sep 2023",
        alt: "An intricate pattern with five-fold symmetry in blue and white on the surface of a sphere",
        category: 1
    },
    {
        title: "Coal Dumper",
        description: "The abandoned McMyler coal dumper in Port Reading, NJ.",
        filename: "coaldumper.jpg",
        date: "Aug 2023",
        alt: "A rusting black metal structure, overlaid on a cloudy sky",
        category: 2
    },
    {
        title: "Quadrics",
        description: <>A collection of different <BasicLink href="https://en.wikipedia.org/wiki/Quadric">quadric surfaces.</BasicLink>.</>,
        filename: "quadrics.png",
        date: "Aug 2023",
        alt: "A collection of shiny red algebraic surfaces sitting on white cubes covered in grids, themselves sitting on a checkerboard plane",
        category: 1
    },
    {
        title: "Wada",
        description: "An image of chaotic scattering phenomena between spheres in an octahedral arrangement.",
        filename: "wada.png",
        date: "Jul 2023",
        alt: "An octahedral arrangement of shiny spheres with a sky background, each sphere reflecting every other to create an intricate fractal pattern",
        category: 1
    },
    {
        title: "Gaussian Rationals",
        description: <>An image of some of the <BasicLink href="https://math.stackexchange.com/questions/4617218/why-do-the-gaussian-rationals-make-these-patterns">Gaussian rationals</BasicLink>, or complex numbers with rational real and imaginary parts.</>,
        filename: "gaussianrationals.png",
        date: "Jan 2023",
        alt: "An image containing innumberable tiny white points on a black background forming flower-like patterns",
        category: 1
    },
    {
        title: "Burrowing Owl",
        description: <>I took this picture of a burrowing owl (<i>Athene cunicularia</i>) at a baseball field in Cape Coral, FL.</>,
        filename: "burrowingowl.jpg",
        date: "Nov 2021",
        alt: "A small brown owl with white spots, yellow eyes, and a stern expression sits in a grassy field staring at the viewer",
        category: 0
    }
];