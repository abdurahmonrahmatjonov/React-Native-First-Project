import * as React from 'react';
import Svg, {Ellipse, Circle} from 'react-native-svg';

function ProfileIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={props.color || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Ellipse
        cx={12}
        cy={17.5}
        rx={7}
        ry={3.5}
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Circle
        cx={12}
        cy={7}
        r={4}
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
