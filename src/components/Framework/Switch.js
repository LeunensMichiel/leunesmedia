import React from "react"
import styled from "styled-components"

import colors from "./colors"

const StyledSwitch = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  margin-left: ${props => (props.lastLeft ? "2em" : "0")};

  &:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: ${colors.secondaryWhite};
  }

  &:checked + label {
    border-color: ${colors.secondaryWhite};
  }
`
const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 4.5em;
  height: 30px;
  border-radius: 100px;
  border: 2px solid ${colors.secondaryBlack};
  position: relative;
  transition: background-color 0.2s;
  box-sizing: content-box;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:active span {
    width: 50px;
  }
`

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 30px;
  transition: 0.2s;
  background: ${colors.secondaryBlack};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
`

const Switch = ({ lastLeft, isOn, handleToggle }) => {
  return (
    <>
      <StyledSwitch
        checked={isOn}
        onChange={handleToggle}
        lastLeft={lastLeft}
        id={`react-switch-new`}
        type="checkbox"
      />
      <SwitchLabel htmlFor={`react-switch-new`}>
        <SwitchButton />
      </SwitchLabel>
    </>
  )
}

export default Switch
