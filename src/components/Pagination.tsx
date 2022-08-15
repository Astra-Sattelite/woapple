import * as React from 'react'
import { PaginationT } from '../Types'
import { Link } from "gatsby"

export const Pagination = (props: PaginationT) => {
  const isLast  = props.currentPage === props.numPages

  const prevPage 
    = props.currentPage - 1 <= 1
      ? "/posts/" 
      : `/posts/${props.currentPage - 1}`
  const nextPage = `/posts/${props.currentPage + 1}`

  const range = (max: number) => [...Array((max + 1)).keys()].slice(1)

  return (
    <div>
      <Link to={prevPage}><h3>Previous</h3></Link>
      {range(props.numPages).map(
        pageNum =>
          <Link to={"/posts/" + (pageNum === 1 ? "" : pageNum)} key={"___keyr" + pageNum}>
            <h3>{pageNum}</h3>
          </Link>
      )}
      <Link to={!isLast ? nextPage : `/posts/${props.currentPage}`}><h3>Next</h3></Link>
    </div>
  )
}

const PaginationMemo = React.memo(Pagination)

export default PaginationMemo