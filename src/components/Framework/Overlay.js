import React from "react"
import styled from "styled-components"

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => (props.heavy ? "#212121" : "#37383b")};
  opacity: ${props => (props.heavy ? 0.8 : 0.66)};
  z-index: 1;
`

const Backdrop = ({ heavy }) => {
  return <StyledBackdrop heavy={heavy} />
}

Backdrop.propTypes = {}

export default Backdrop
