import React from 'react'
import { useParams } from 'react-router-dom'
const Application = ({application}) => {
    let { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default Application