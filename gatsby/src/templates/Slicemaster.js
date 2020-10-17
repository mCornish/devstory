// import { graphql } from 'gatsby';
// import React from 'react';
// import Img from 'gatsby-image';
// import SEO from '../components/SEO';

// export default function SingleSlicemasterPage({ data: { slicemaster } }) {
//   return (
//     <>
//       <SEO title={slicemaster.name} image={slicemaster.image?.asset?.src} />
//       <Img fluid={slicemaster.image.asset.fluid} />
//       <div>
//         <h2 className="mark">{slicemaster.name}</h2>
//         <p>{slicemaster.description}</p>
//       </div>
//     </>
//   );
// }

// export const query = graphql`
//   query($slug: String!) {
//     slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
//       id
//       name
//       description
//       image {
//         asset {
//           fluid(maxWidth: 1000, maxHeight: 750) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//     }
//   }
// `;
