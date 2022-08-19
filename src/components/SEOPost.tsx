import * as React from 'react'
import { DatoCmsPostMetaTag } from '../Types';

const SEOPost = (props: { seoMetaTags: { tags: DatoCmsPostMetaTag[]} }) => {


  return (
    <>
      {props.seoMetaTags.tags.map((tag, i) => 
        <React.Fragment
          key={
            tag.content !== undefined
              ? "___metapostck" + tag.content + i
              : "___metapostack" + tag.content + i
          }
        >
          {tag.content !== undefined
            ? <meta 
                name={tag.tagName}
                content={tag.content}
              />
            : <meta
                name={
                  tag.attributes?.name !== undefined
                    ? tag.attributes!.name
                    : tag.attributes!.property
                }
                content={tag.attributes!.content}
              />
          }
        </React.Fragment>
      )}
    </>
  )
}

export default SEOPost


