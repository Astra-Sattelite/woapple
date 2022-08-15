import type { IGatsbyImageData } from "gatsby-plugin-image"

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
  descriptionNode: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export type Img = {
  gatsbyImageData: IGatsbyImageData;
}

// export type GatsbyImageData = {
//   images: Images;
//   layout: string;
//   placeholder: Placeholder;
//   width: number;
//   height: number;
// }

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

export type Post = {
  slug: string,
  title: string, 
  description: string,
  img: { gatsbyImageData: IGatsbyImageData },
  topics: AllDatoCmsTopic,
  descriptionNode: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export type PaginationT = {
  limit: number,
  skip: number,
  numPages: number,
  currentPage: number
}
