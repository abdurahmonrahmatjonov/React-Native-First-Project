import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PurchaseIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20 20.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
      />
      <Path
        d="M6 4h12a4 4 0 014 4v5a4 4 0 01-4 4h-8a4 4 0 01-4-4V4zm0 0a2 2 0 00-2-2H2m4 6h15.5"
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PurchaseIcon;
