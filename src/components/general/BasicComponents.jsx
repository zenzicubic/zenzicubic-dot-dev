/**
 * These are just some basic React components.
 * @author Zenzicubic
 * @license MIT
 */
import React from 'react';

import './basic-components.css';

/**
 * A basic link to an external page.
 * @param {String} href Link URL.
 * @param {FunctionComponent | String} children Link's text or content.
 * @param {String} [className] Optional additional class name for the link.
 */
export const BasicLink = ({href, children, className}) => {
    return (<a href={href} className={className}
               target="_blank" rel="noopener noreferrer">{children}</a>)
}

/**
 * A simple square button with an icon from the Material Icons library in the middle of it.
 * @param {String} iconName Name of the icon.
 * @param {Function} onClick Function to call when the button is clicked.
 * @param {String} [className] Optional additional class name for the button.
 */
export const IconButton = ({iconName, onClick, className}) => {
    return <button className={"icon-btn " + (className || "")} onClick={onClick}>
        <span className="material-icons">{iconName}</span>
    </button>
}

/**
 * Copyright footer, indicating what the images and content on the site are licensed under.
 */
export const CopyrightFooter = () => {
    return (
        <footer className="copyright-footer">
            <p>The images on this page (and all others on this site) are licensed under&nbsp;
            <BasicLink href="http://creativecommons.org/licenses/by/4.0">CC BY 4.0
                <img className="copyright-footer-icon" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" />
                <img className="copyright-footer-icon" src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt=""/>
            </BasicLink>, meaning that they are free to use so long as you give credit.</p>
        </footer>);
}