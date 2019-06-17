import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultTitle = 'OctoProfile';
const defaultDescription = 'A nicer look at your GitHub profile. With charts!';
const defaultOGURL = 'https://octoprofile.bchiang7.now.sh';
const defaultOGImage = 'https://octoprofile.bchiang7.now.sh/static/og.png';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#1A1E22" />
    <meta name="msapplication-TileColor" content="#1A1E22" />
    <meta name="theme-color" content="#0070f3" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta name="twitter:description" content={props.description || defaultDescription} />
    <meta name="twitter:creator" content={'@bchiang7'} />
    <meta name="twitter:title" content={props.title || defaultTitle} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  ogImage: PropTypes.string,
};

export default Head;
