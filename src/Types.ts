export type AllCmsData = {
  data: Data;
  extensions: Extensions;
}

export type Extensions = {
}

export type Data = {
  allDatoCmsPost: AllDatoCmsPost;
  allDatoCmsTopic: AllDatoCmsTopic;
}

export type AllDatoCmsTopic = {
  nodes: Topic[];
}

export type Topic = {
  topic: string;
  slug: string;
}

export type AllDatoCmsPost = {
  nodes: DatoCmsPost[];
}

export type DatoCmsPost = {
  title: string;
  description: string;
  img: Img;
  slug: string;
  topics: Topic[];
  internal: object;
}

export type Img = {
  gatsbyImageData: GatsbyImageData;
}

export type GatsbyImageData = {
  images: Images;
  layout: string;
  placeholder: Placeholder;
  width: number;
  height: number;
}

export type Placeholder = {
  fallback: string;
}

export type Images = {
  sources: Source[];
  fallback?: Fallback;
}

export type Fallback = {
  src: string;
  srcSet: string;
  sizes: string;
}

export type Source = {
  srcSet: string;
  sizes: string;
  type: string;
}

// export type Topic 
//   = = { topic: "Motivation" }
//   | = { topic: "Power"      }
//   | = { topic: "Education"  }
//   | = { topic: "Greatness"  }

export type Post = {
  slug: string,
  title: string, 
  description: string,
  img: { gatsbyImageData: Object },
  topics: AllDatoCmsTopic,
  internal: object
}

export type PaginationT = {
  limit: number,
  skip: number,
  numPages: number,
  currentPage: number
}
