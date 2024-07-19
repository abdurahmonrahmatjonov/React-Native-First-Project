import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DeliveryIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14 19V7m0 12h2m-2 0H9m5-12a4 4 0 00-4-4H6a4 4 0 00-4 4v8a4.002 4.002 0 003.004 3.875M14 7h3.21a2 2 0 011.367.54l2.79 2.617a2 2 0 01.633 1.46V17a2 2 0 01-2 2m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m-7 0a2 2 0 11-3.996-.125M9 19a2 2 0 00-3.996-.125"
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default DeliveryIcon;
