import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    <Helmet
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{title}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="UxgeINtOanaVYwND8jEyRPlMR1EgIAblVZQgbg86o0w"
      />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,700;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      {children}
    </Helmet>
  );
}
