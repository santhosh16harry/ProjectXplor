import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M256 43.5C138.64 43.5 43.5 138.64 43.5 256S138.64 468.5 256 468.5 468.5 373.36 468.5 256 373.36 43.5 256 43.5zm68.14 314.7c6.26 6.24 6.27 16.37.03 22.63-3.13 3.13-7.23 4.7-11.33 4.7-4.09 0-8.17-1.56-11.3-4.67L187.86 267.5a16.007 16.007 0 01-.01-22.65l113.69-113.69c6.25-6.25 16.38-6.25 22.63 0s6.25 16.38 0 22.63L221.8 256.15 324.14 358.2z"
          id="Layer_2"
          fill="#01a3ff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
