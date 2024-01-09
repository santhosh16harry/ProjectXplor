import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M24 57c7-8 1-30 4-38C32 8 36 1 47 1c13 0 20 10 24 20 1 2 0 8 2 14 2 5-1 10-1 12 0 5-1 3 3 10-7 17-40 13-51 0z"
        fill="#5f3e20"
        stroke="#311710"
      />
      <Path
        d="M40 51c-5 6-22 4-25 17-2 7-1 30 14 28-1-18-3-27-3-27s2 17 3 25c11 6 28 6 42-1 0-8-1-15 0-22 1-6 0 24 0 24s9 2 12-7c2-11 5-27-9-31-11-3-12-6-14-6H40z"
        fill="#d8933b"
        stroke="#2a424f"
      />
      <Path
        d="M40 45s1 4-1 7c4 4 13 10 21 0-1-3-1-3-1-7H40z"
        fill="#deb89f"
        stroke="#693311"
      />
      <Path
        d="M50 50C33 50 22 4 49 3.4 73 5 66 50 50 50z"
        fill="#dbbfa8"
        stroke="#693311"
      />
      <Path
        d="M46 12c-4 5-9 9-14 10S34 2 47 2c7 0 17 4 19 18-8 1-18-5-20-8"
        fill="#5f3e20"
      />
    </Svg>
  );
}

export default SvgComponent;
