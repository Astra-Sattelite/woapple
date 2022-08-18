import * as React from 'react'
import { PaginationT } from '../Types'
import { Link } from "gatsby"
import { range } from "../Utils"

const Pagination = (props: PaginationT) => {
  const isLast  = props.currentPage === props.numPages

  const prevPage 
    = props.currentPage - 1 <= 1
      ? "/posts/" 
      : `/posts/${props.currentPage - 1}`
  const nextPage = `/posts/${props.currentPage + 1}`

  return (
    <div className="
        flex p-1
        flex-row border-2 
        gap-3 rounded-2xl
        max-w-4xl text-1xl
      "
    >
      <Link 
        to={prevPage}
        className="p-1"
      >
        {"<"}
      </Link>
      {range(props.numPages).map(
        pageNum =>
          <Link 
            to={"/posts/" + (pageNum === 1 ? "" : pageNum)} 
            key={"___keyr" + pageNum}
            className="p-1"
          >
            {pageNum}
          </Link>
      )}
      <Link 
        to={!isLast ? nextPage : `/posts/${props.currentPage}`}
        className="p-1"
      >
        {">"}
      </Link>
    </div>
  )
}

export default Pagination