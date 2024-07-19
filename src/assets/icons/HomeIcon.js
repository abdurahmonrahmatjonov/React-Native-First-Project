import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={props.color ? props.color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 22v-4a4 4 0 00-8 0v4m13-11.85v7.817C21 20.194 19.21 22 17 22H7c-2.21 0-4-1.806-4-4.033V10.15c0-1.21.54-2.357 1.47-3.123l5-4.118a3.975 3.975 0 015.06 0l5 4.118A4.046 4.046 0 0121 10.15z"
        stroke={props.color ? props.color : 'none'}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgComponent;
