import React from 'react'

import StyledIcon from './'

const CheckRound = ({ width, height, color, ...props }) => (
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
      <g fill="currentColor">
        <path
          d="M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z
M370.9,181.1L231.8,359.6c-1.1,1.1-2.9,3.5-5.1,3.5c-2.3,0-3.8-1.6-5.1-2.9c-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5
c-0.6-0.9-1.1-2-1.1-3.2c0-1.2,0.5-2.3,1.1-3.2c0.4-0.4,0.7-0.7,1.1-1.2c7.7-8.1,23.3-24.5,24.3-25.5c1.3-1.3,2.4-3,4.8-3
c2.5,0,4.1,2.1,5.3,3.3c1.2,1.2,45,43.3,45,43.3l111.3-143c1-0.8,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.3l30.6,24.1
c0.8,1,1.3,2.2,1.3,3.5C372,179.1,371.5,180.2,370.9,181.1z"
        />
      </g>
    </svg>
  </StyledIcon>
)

CheckRound.defaultProps = {
  width: 20,
  height: 20
}

export default CheckRound
