import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DashboardReportIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 22H5a3 3 0 01-3-3V5a3 3 0 013-3h10a3 3 0 013 3v3m2 14a2 2 0 01-2-2V8m2 14a2 2 0 002-2V10a2 2 0 00-2-2h-2M6 7h8m-8 5h8m-8 5h4"
        stroke={props.color || '#28303F'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DashboardReportIcon;
