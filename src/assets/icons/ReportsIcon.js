import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ReportsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7 9h10M7 13h10M7 17h5m4-15v3M8 2v3M7 22h10a4 4 0 004-4V7.5a4 4 0 00-4-4H7a4 4 0 00-4 4V18a4 4 0 004 4z"
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ReportsIcon;
