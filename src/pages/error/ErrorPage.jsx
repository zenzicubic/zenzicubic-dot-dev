/**
 * This is the page displayed when the user tries to navigate to a page
 * which does not exist.
 * @author Zenzicubic
 * @license MIT
 */
import React from 'react';

import { PageLayout, Banner } from '../../components/layout-components/LayoutComponents';

import bgImg from './404_bg.png';

const ErrorPage = () => {
    return (<PageLayout title="Oh no!">
        <Banner title="Oh no!" bgImg={bgImg} fullscreen="true">
            Unfortunately that page doesn&apos;t exist. Check your spelling and try again.
        </Banner>
    </PageLayout>);
}

export default ErrorPage;