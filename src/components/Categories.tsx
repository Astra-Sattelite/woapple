import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { AllDatoCmsTopic } from "../Types"
import { StaticImage } from "gatsby-plugin-image"

const DropDownOpened = () => {
  return (
    <StaticImage
      loading="eager"
      src="../../static/openedDropDown.svg"
      alt="../../static/openedDropDown.svg"
      objectFit="contain"
      width={30}
      className="z-50 top-0"
    />
  )
}

const DropDownClosed = () => {
  return (
    <StaticImage
      loading="eager"
      src="../../static/closedDropDown.svg"
      alt="../../static/closedDropDown.svg"
      objectFit="contain"
      width={40}
    />
  )
}

const Categories = () => {
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

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <div 
      className="h-1/2 bg-white w-full flex justify-center overflow-hidden"
    >
      <div className="flex h-full w-10/12 items-center gap-4 flex-row justify-between">
        <div className="text-2xl text-black font-bold">WhompWhomp</div>

        <div 
          className={
            isOpen
              ? "fixed w-full h-full bg-zinc-100 left-0 top-0 z-40 flex flex-col items-center"
              : ""
          }
        >
          {isOpen 
            ? <>
                <div className="w-11/12 h-24 flex flex-row items-center justify-between border-b-2 border-zinc-500">
                  <p className="text-2xl mt-5">Topics</p>
                  <div 
                    onClick={() => setIsOpen(false)}
                    className="mt-5"
                  >
                    <DropDownOpened />
                  </div>
                </div>
                <div className="w-11/12 h-5/6 flex overflow-y-scroll flex-col gap-4">
                  {data.allDatoCmsTopic.nodes.map(
                    obj =>
                      <Link 
                        to={"/posts/topic/" + obj.slug} key={obj.slug} 
                        className="text-1xl first-of-type:mt-5 hover:text-blue-500 transition ease-in-out duration-500"
                        onClick={() => setIsOpen(false)}
                      >
                        <div>{obj.topic}</div>
                      </Link>
                  )}
                </div>
              </>
            : <div onClick={() => setIsOpen(true)}>
                <DropDownClosed />
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Categories