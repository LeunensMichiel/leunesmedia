import Img from "gatsby-image"
import { chunk, sum } from "lodash"
import React from "react"
import styled from "styled-components"

const Box = styled(Img)`
  display: inline-block;
  width: ${props => props.width};
`
const Gallery = ({ images, itemsPerRow }) => {
  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow)

  return (
    <div>
      {rows.map(row => {
        // Sum aspect ratios of images in the given row
        const rowAspectRatioSum = sum(row.map(image => image.aspectRatio))

        return row.map(image => (
          <Box
            key={image.src}
            fluid={image}
            width={`${(image.aspectRatio / rowAspectRatioSum) * 100}%`}
          />
        ))
      })}
    </div>
  )
}

export default Gallery
