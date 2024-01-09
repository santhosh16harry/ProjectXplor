import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535zM18.75 16a.75.75 0 01-.75.75H6a.75.75 0 010-1.5h12a.75.75 0 01.75.75zM18 12.75a.75.75 0 000-1.5H6a.75.75 0 000 1.5h12zM18.75 8a.75.75 0 01-.75.75H6a.75.75 0 010-1.5h12a.75.75 0 01.75.75z"
        fill="#01A3FF"
      />
    </Svg>
  );
}

export default SvgComponent;
