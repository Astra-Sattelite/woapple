import * as React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import { AllDatoCmsTopic } from '../Types';

export const Categories = () => {

  const query = graphql`
    query GetAllCmsTopics {
      allDatoCmsTopic {
        nodes {
          topic
          slug
        }
      }
    }
  `
  const data: { allDatoCmsTopic: AllDatoCmsTopic } = useStaticQuery(query)

  return (
    <div className="h-1/2 bg-slate-50 w-full flex justify-center">
      <div className="flex h-full w-10/12 items-center gap-4 flex-row">
        <div className="text-2xl text-black font-bold">Whomp</div>
        {data.allDatoCmsTopic.nodes.map(
          obj => 
            <Link to={"/posts/topic/" + obj.slug} key={obj.slug} className="text-2xl">
              <div>{obj.topic}</div>
            </Link>
        )}
      </div>
    </div>
  )
}

export default Categories