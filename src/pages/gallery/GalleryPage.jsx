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

import bgImg from '../../assets/gallery_bg.png';
import './gallery-page.css';

// Bulk-import thumbnails
const imgPaths = import.meta.glob("../../assets/gallery_thumbnails/*", {
    eager: true,
    query: "?url", 
    import: "default"});

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
            <img src={imgPaths[`../../assets/gallery_thumbnails/${filename}`]} alt={alt} 
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

    const displayRef = useRef(null);
    const imgRef = useRef(null);

    const turnOffLoading = useCallback(() => {
        // Hides the loading screen when the image has loaded
        imgRef.current.classList.remove("loading");
    }, []);

    const hideDisplay = useCallback(() => {
        // Hides the image display
        displayRef.current.close();
    }, []);

    const setImgToDisplay = useCallback((idx) => {
        // Update image component (no need to batch import)
        let img = imageList[idx];
        let url = new URL(
            `../../assets/gallery_images/${img.filename}`, 
            import.meta.url);
        imgRef.current.src = url.href;
        imgRef.current.alt = img.alt;

        // Show loading screen if image is not cached, then show popup
        if (!imgRef.current.complete)
            imgRef.current.classList.add("loading");
        displayRef.current.showModal();
    }, []);

    useEffect(() => {
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
    }, [setImgGroups]);

    return (<>
        <PageLayout title="Gallery">
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
        {/* Image display */}
        <dialog id="image-display" ref={displayRef}>
            <div id="display-topbar">
                <h2 id="display-title">View image</h2>
                <IconButton iconName="close" onClick={hideDisplay} />
            </div>
            <div id="display-body">
                <img id="display-img" alt="" ref={imgRef} onLoad={turnOffLoading} />
            </div>
        </dialog>
    </>);
}

export default GalleryPage;