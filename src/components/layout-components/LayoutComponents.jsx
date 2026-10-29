/**
 * This file contains the components for the basic page layout used on every
 * page on this site.
 * @author Zenzicubic
 * @license MIT
 */

import React from 'react';

import { useCallback, useRef, useEffect } from 'react';

import { IconButton } from '../general/BasicComponents';

import './layout-components.css';

/**
 * A button-like link, used in the page's navbar.
 * @param {String} href Path of page to link to.
 * @param {String} text Text of the link
 */
const NavbarLink = ({href, text}) => {
    return (<a href={href} 
        className={`topbar-button-link ${href === window.location.pathname ? "current-page" : ""}`}>
            {text}
    </a>);
}

// These are the links that go on the navbar
const navbarButtons = [
    {link: "/", text: "Home"},
    {link: "/links", text: "Links"},
    {link: "/gallery", text: "Gallery"}
];

/**
 * The basic page layout with a navbar used by all of the site's pages.
 * @param {String} title Title of the page.
 * @param {Ref} [ref] Optional ref to the wrapper element of the whole page.
 * @param {Component} children Page's content (child components of this one).
 */
export const PageLayout = ({title, ref, children}) => {
    const navbarRef = useRef(null);
    const topbarRef = useRef(null);
    const visible = useRef(false);
    const isSmallScreen = useRef(null);
    const resizeTimer = useRef(null);

    const hideNavbar = useCallback(() => {
        // Hides the navbar
        navbarRef.current.classList.remove("expanded");
        visible.current = false;
    }, [navbarRef, visible]);

    const onMenuClick = useCallback(() => {
        if (visible.current) {
            // Hide navbar if it is already visible
            hideNavbar();
        } else {
            // Show navbar if it isn't visible
            let bBox = topbarRef.current.getBoundingClientRect();
            navbarRef.current.style.setProperty("top", (bBox.top + bBox.height) + "px");
            navbarRef.current.classList.add("expanded");
            visible.current = true;
        }
    }, [hideNavbar, navbarRef, topbarRef, visible]);

    const onResize = useCallback(() => {
        // Check if the window size is going above or below 767 px
        let screenSmall = (window.innerWidth < 767);
        if (screenSmall === isSmallScreen.current || screenSmall === null) return;

        // Pauses transitions on the navbar when the window size changes
        if (resizeTimer.current) clearTimeout(resizeTimer.current);
        navbarRef.current.classList.add("pause-transitions");

        resizeTimer.current = setTimeout(() => {
            navbarRef.current.classList.remove("pause-transitions");
        }, 510);
        isSmallScreen.current = screenSmall;
    }, [navbarRef, isSmallScreen, resizeTimer]);

    const onClickOff = useCallback((evt) => {
        // Handles the user clicking 
        if (!topbarRef.current.contains(evt.target)) {
            hideNavbar();
        }
    }, [hideNavbar, navbarRef]);

    useEffect(() => {
        // Add event listeners and set title
        document.body.addEventListener("click", onClickOff);
        window.addEventListener("resize", onResize);
        document.title = title + " | Zenzicubic";

        // Remove them on unmount
        return () => {
            document.body.removeEventListener("click", onClickOff);
            window.removeEventListener("resize", onResize);
        }
    }, [onClickOff, onResize, title]);

    return (<div className="page-wrapper" ref={ref}>
        <a className="page-skip-link" href="#page-content">Skip to content</a>
        <header className="page-topbar" ref={topbarRef}>
            <div className="topbar-component-wrapper">
                <div className="topbar-logo-wrapper">
                    <img src="/logo.png" alt="The channel's logo: a pyridine ring containing the expression (2^2)^2" className="topbar-logo" />
                    <h1 className="topbar-title">Zenzicubic</h1>
                </div>
                <IconButton iconName="menu" className="topbar-more-btn" onClick={onMenuClick} />
            </div>
            <nav className="topbar-links" ref={navbarRef}>
                {navbarButtons.map((btn, i) => (<NavbarLink 
                    key={"navbar-link-" + i} href={btn.link} text={btn.text} />))}
            </nav>
        </header>
        <main id="page-content" tabIndex="-1">
            {children}
        </main>
    </div>);
}

/**
 * A banner, which is a container at the top of the page with an image background,
 * a title, and a brief description of the page.
 * @param {String} title Page title.
 * @param {String} bgImg Path to background image.
 * @param {Boolean} fullscreen Whether the banner should be fullscreen.
 * @param {FunctionComponent} children Text of the banner.
 */
export const Banner = ({title, bgImg, fullscreen, children}) => {
    return (<header 
        style={{backgroundImage: `url(${bgImg})`}}
        className={`banner-wrapper ${fullscreen ? "fullscreen" : ""}`}>
        <div className="banner">
            <h2 className="banner-title">{title}</h2>
            <p>{children}</p>
        </div>
    </header>);
}