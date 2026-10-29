/**
 * This is the home page and its associated components.
 * @author Zenzicubic
 * @license MIT
 */
import React from 'react';

import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

import { PageLayout } from '../../components/layout-components/LayoutComponents';
import { BasicLink, CopyrightFooter } from '../../components/general/BasicComponents';
import WitchApplet from './witch-applet';

import photographyImg from './images/photography.png';
import chemImg from './images/chemistry.png';
import mathImg from './images/math.png';
import './home-page.css';

/**
 * A section of the home page which displays something which I do.
 * @param {String} heading Section heading.
 * @param {String} imgSrc Image URL.
 * @param {String} imgAlt Image alt text.
 * @param {FunctionComponent} children Section blurb text.
 */
const HomePageSection = ({heading, imgSrc, imgAlt, children}) => {
    return (<div className="home-page-section">
        <img className="home-page-section-img" src={imgSrc} alt={imgAlt} />
        <div className="section-text">
            <h3>{heading}</h3>
            <p className="section-text-desc">{children}</p>
        </div>
    </div>);
}

/**
 * This is the actual home page component.
 */
const HomePage = () => {
    // Canvas and applet
    const canvasRef = useRef(null);
    const appletRef = useRef(null);

    useEffect(() => {
        // Create applet
        appletRef.current = new WitchApplet(canvasRef.current);
        return () => {
            appletRef.current.dispose();
        }
    }, []);

    return (<PageLayout title="Home">
        <div id="home-page-top-section">
            <h2>Who am I?</h2>
            <canvas id="home-top-canvas" ref={canvasRef}></canvas>
            <p id="home-top-description">My name is <strong>Zenzicubic</strong>, and I&apos;m a <BasicLink href="https://youtube.com/c/zenzicubic">YouTuber</BasicLink>, tinkerer, and enjoyer of figuring things out. Here is what I do:</p>
        </div>
        <div id="home-page-sections-wrapper">
            <HomePageSection heading="Chemistry" imgSrc={chemImg} imgAlt="A glass beaker on a black backdrop containing a mass of crystals">
                First and foremost, I am a chemist. I&apos;ve been doing experiments in my home lab since 2020, and filming them pretty much the entire time. In my years of doing chemistry, I&apos;ve <BasicLink href="https://youtu.be/JRyR2GFc8p0">recreated historical experiments</BasicLink>, <BasicLink href="https://youtu.be/S-pghymDUNM">turned steel wool into beautiful crystals</BasicLink>, conducted <BasicLink href="https://youtu.be/9uJvteUkMSE">color-changing organic reactions</BasicLink>, and so, so much more. Although I don&apos;t upload videos frequently, I put my back into them when I do.
            </HomePageSection>
            <HomePageSection heading="Photography" imgSrc={photographyImg} imgAlt="A dark-brown bird with a black head, an orange-ringed yellow eye, a long orange bill, and a white breast walking on a rocky beach">
                Filming videos is not the only thing I use my camera for. I appreciate both the forms and behaviors of all creatures great and small, which has led me to to take an interest in nature photography. I have accumulated a sizable collection of bird and insect photos from several states and 4 countries in total, which can be seen in the <Link to="/gallery">photo gallery</Link>.
            </HomePageSection>
            <HomePageSection heading="And math" imgSrc={mathImg} imgAlt="A shiny wireframe icosahedron on a black background with its three inscribed mutually perpendicular golden rectangles">
                Last but not least, I also enjoy mathematics and programming (and where they intersect). Along with nature photos, the photo gallery contains illustrations of various concepts in mathematics. But my visualizations aren&apos;t just limited to still images; I&apos;ve also made <BasicLink href="https://youtu.be/5ndPzXedSF8">animated math videos</BasicLink> explaining topics from the <BasicLink href="https://youtu.be/ejtqjxGvhL0">mundane</BasicLink> to the <BasicLink href="https://youtu.be/oVNr5wPHuTs">chaotic</BasicLink>. More on the programming side, I&apos;ve made <BasicLink href="https://curvascope.zenzicubic.dev/">interactive demos</BasicLink> of mathematical concepts alongside my videos.
            </HomePageSection>
        </div>    
        <CopyrightFooter />
    </PageLayout>);
}

export default HomePage; 