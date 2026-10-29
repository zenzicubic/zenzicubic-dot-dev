/**
 * This is the image gallery page.
 * @author Zenzicubic
 * @license MIT
 */
import React from 'react';

import { useEffect, useCallback, useRef, useState } from 'react';
import { MathJaxContext } from 'better-react-mathjax';

import { PageLayout, Banner } from '../../components/layout-components/LayoutComponents';
import { IconButton, CopyrightFooter } from '../../components/general/BasicComponents';
import { imageList, groupNames } from './gallery_images';

import bgImg from './gallery_bg.png';
import './gallery-page.css';

// Paths to various folders of images
const thumbnailPath = "/thumbnails/";
const imagePath = "/gallery-images/";

/**
 * A single card containing an image and its title and description.
 * @param {String} filename Image file name.
 * @param {String} title Image title.
 * @param {FunctionComponent | String} description Image description.
 * @param {String} alt Image alt text.
 * @param {String} date Image date.
 * @param {Number} index Image index in the image list.
 * @param {Function<Number>} onClick Function to call when this image is clicked, accepting its index as a parameter.
 */
const ImageCard = ({filename, title, description, alt, date, index, onClick}) => {
    return (<div className="gallery-image-display">
        <button className="gallery-thumbnail-wrapper" onClick={() => onClick(index)}>
            <img src={thumbnailPath + filename} alt={alt} 
                 className="gallery-thumbnail" loading="lazy" />
        </button>
        <h4>{title}</h4>
        <span className="gallery-image-date">{date}</span>
        <p>{description}</p>
    </div>);
}

/**
 * A group of images in the same category (section) arranged in a grid.
 * @param {Number} index Index of this section in the parent element.
 * @param {Array.<Object>} images List of images in the category.
 * @param {Function<Number>} onImgClick Function to call when an image in the category is clicked.
 */
const GallerySection = ({index, images, onImgClick}) => {
    return (<>
        <h3 className="gallery-section-header">{groupNames[index]}</h3>
        {images.map((imgData, j) => <ImageCard 
            key={`gallery-section-${index}-${j}`} {...imgData} onClick={onImgClick} />)}
    </>)
}

/**
 * The actual gallery page component.
 */
const GalleryPage = () => {
    const [imgGroups, setImgGroups] = useState([]);

    const imgRef = useRef(null);
    const displayRef = useRef(null);
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    const prevFocus = useRef(null);

    const showDisplay = useCallback(() => {
        // Show display popup and make background elements inert (for keyboard users)
        wrapperRef.current.classList.add("visible");
        contentRef.current.inert = true;

        // Focus trapping
        prevFocus.current = document.activeElement;
        wrapperRef.current.addEventListener("transitioned", () => {
            wrapperRef.current.focus();
        }, { once: true })
    }, [wrapperRef, contentRef, prevFocus]);

    const hideDisplay = useCallback(() => {
        // Hide display popup and re-enable background elements
        wrapperRef.current.classList.remove("visible");
        contentRef.current.inert = false;

        // Restore focus
        if (prevFocus.current) 
            prevFocus.current.focus({preventScroll: true});
    }, [wrapperRef, contentRef, prevFocus]);

    const handleClickOff = useCallback((evt) => {
        // Close the display popup if the user clicks outside of it
        if (!displayRef.current.contains(evt.target))
            hideDisplay();
    }, [hideDisplay, displayRef]);

    const handleKeyPress = useCallback((evt) => {
        // Close the display popup if the user presses the Escape key
        if (evt.key === "Escape")
            hideDisplay();
    }, [hideDisplay]);

    const setImgToDisplay = useCallback((idx) => {
        // Update image component
        let img = imageList[idx];
        imgRef.current.src = imagePath + img.filename;
        imgRef.current.alt = img.alt;

        // Decode image and display once it is ready to render
        imgRef.current.decode()
                .then(showDisplay)
                .catch(e => console.error("failed to load image: " + e));
    }, [showDisplay, imgRef]);

    useEffect(() => {
        // Add key listener
        document.addEventListener("keydown", handleKeyPress);

        // Sort images into groups
        let groups = [], i = 0;
        for (; i < groupNames.length;) {
            groups[i++] = [];
        }

        i = 0;
        for (let image of imageList) {
            image["index"] = i++;
            groups[image.category].push(image);
        }
        setImgGroups(groups)

        // Remove key listener on unmount
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        }
    }, [setImgGroups, handleKeyPress, handleClickOff]);

    return (<>
        <PageLayout title="Gallery" ref={contentRef}>
            <Banner title="Gallery" bgImg={bgImg}>
                These are various photos (mostly of animals or mathy things) I&apos;ve accumulated over the years. Click on a picture to enlarge it.
            </Banner>
            <MathJaxContext>
                <div id="gallery-wrapper">
                    {imgGroups.map((group, i) => (<GallerySection 
                        key={"gallery-section-" + i} index={i} images={group} 
                        onImgClick={setImgToDisplay} />))}
                </div>
            </MathJaxContext>
            <CopyrightFooter />
        </PageLayout>
        {/* Image display popup */}
        <div id="image-display-wrapper" ref={wrapperRef} tabIndex="-1" onClick={handleClickOff}>
            <div id="image-display" ref={displayRef}>
                <div id="display-topbar">
                    <h2 id="display-title">Image Display</h2>
                    <IconButton iconName="close" onClick={hideDisplay} />
                </div>
                <img id="display-img" alt="" ref={imgRef} />
            </div>
        </div>
    </>);
}

export default GalleryPage;