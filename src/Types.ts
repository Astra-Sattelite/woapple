export type Topic 
  = { topic: "Motivation" }
  | { topic: "Power"      }
  | { topic: "Education"  }
  | { topic: "Greatness"  }

export type Post = {
  slug: string,
  title: string, 
  description: string,
  img: { gatsbyImageData: Object },
  topics: Topic[],
  internal: { contentDigest: string }
}

// query MyQuery {
//   datoCmsPosts1 {
//     postscategory {
//       slug
//       title
//       img {
//         path
//       }
//       description
//       topics {
//         topic
//       }
//       internal {
//         contentDigest
//       }
//     }
//   }
// }

