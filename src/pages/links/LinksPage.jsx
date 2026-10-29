/**
 * This is the page containing the list of links to my various social media profiles.
 * @author Zenzicubic
 * @license MIT
 */
import React from 'react';

import { PageLayout, Banner } from '../../components/layout-components/LayoutComponents';
import { BasicLink } from '../../components/general/BasicComponents';

import './links-page.css';
import bgImg from './links_bg.png';

// The list of links to various pages
const links = [
    {href: "https://www.youtube.com/c/zenzicubic/", text: "YouTube"},
    {href: "https://discord.gg/YkyuWWh4M8", text: "Discord Server"},
    {href: "https://bsky.app/profile/zenzicubic.dev", text: "Bluesky"},
    {href: "https://github.com/zenzicubic", text: "GitHub"},
    {href: "https://www.shadertoy.com/user/zenzicubic", text: "Shadertoy"},
    {href: "https://en.wikipedia.org/wiki/User:Zenzicubic", text: "Wikipedia"},
    {href: "mailto:contact@zenzicubic.dev", text: "Email"}
]

const LinksPage = () => {
    return (<PageLayout title="Links">
        <Banner title="Links" bgImg={bgImg}>
            This page contains a collection of links to my various online profiles, from YouTube to GitHub.
        </Banner>
        <div id="links-container">
            {links.map((link, i) => (<BasicLink key={"pg-link-" + i} 
                className="page-link" href={link.href}>{link.text}</BasicLink>))}
        </div>
    </PageLayout>);
}

export default LinksPage;