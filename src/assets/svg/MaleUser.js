import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M39 52c-5 6-20 3-23 16-2 7-2 30 13 28-1-18-3-27-3-27s2 17 3 25c11 6 28 6 42-1 0-8-1-15 0-22 1-6 0 24 0 24s9 2 12-7c2-11 5-29-13-33-11-2-8-3-10-3H39z"
        fill="#427794"
        stroke="#2a424f"
      />
      <Path
        d="M40 45s1 4-1 7c4 4 13 10 21 0-1-3-1-3-1-7H40z"
        fill="#c29b82"
        stroke="#693311"
      />
      <Path
        d="M50 50C33 50 21 4.1 49 3.4 79 3.3 66 50 50 50z"
        fill="#cda68e"
        stroke="#693311"
      />
      <Path
        d="M33 30C29 19 29 2.2 49 1.2 66 2.1 72 18 66 30c0-5 1-7-2-11-5-1-12 0-18-7-2 6-16 3-13 18z"
        fill="#553932"
        stroke="#311710"
      />
    </Svg>
  )
}

export default SvgComponent
