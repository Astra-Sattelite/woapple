import React from 'react'
import { DatoCmsPost } from '../Types';

export const WhompWhomp = (props: DatoCmsPost) => {
  return (
    <div className="w-4/6 h-64 border-2 rounded">
      {props.title}
    </div>
  )
}

export default WhompWhomp