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

export type Pagination = {
  limit: number,
  skip: number,
  numPages: number,
  currentPage: number
}