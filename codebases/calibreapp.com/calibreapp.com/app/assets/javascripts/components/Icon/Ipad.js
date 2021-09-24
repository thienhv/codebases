import React from 'react'

import StyledIcon from './'

const Ipad = ({ width, height, color, ...props }) => (
  <StyledIcon width={width} height={height} color={color} {...props}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="512px"
      height="512px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M112,72.8v366.4c0,4.9,3.9,8.8,8.8,8.8h270.4c4.9,0,8.8-3.9,8.8-8.8V72.8c0-4.9-3.9-8.8-8.8-8.8H120.8
	C115.9,64,112,67.9,112,72.8z M256,437.6c-7.5,0-13.6-6-13.6-13.5c0-7.5,6.1-13.6,13.6-13.6c7.4,0,13.5,6.1,13.5,13.6
	C269.6,431.6,263.5,437.6,256,437.6z M144,118.6c0-3.5,2.7-6.6,6-6.6h211.2c3.4,0,6.8,3.1,6.8,6.6v275.2c0,3.5-3.4,6.3-6.8,6.3H150
	c-3.4,0-6-2.8-6-6.3V118.6z"
      />
    </svg>
  </StyledIcon>
)

Ipad.defaultProps = {
  color: 'rgb(145,145,145)',
  width: 20,
  height: 20
}

export default Ipad
