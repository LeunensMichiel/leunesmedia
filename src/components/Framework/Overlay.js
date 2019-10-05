import React from "react"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #212121;
  opacity: 0.9;
  z-index: 1;
`

const Backdrop = () => {
  return <StyledBackdrop />
}

Backdrop.propTypes = {}

export default Backdrop
