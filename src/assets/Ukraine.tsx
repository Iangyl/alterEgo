import React, { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <circle
      style={{
        fill: '#FFDA44',
      }}
      cx={256}
      cy={256}
      r={256}
    />
    <path
      style={{
        fill: '#338AF3',
      }}
      d="M0,256C0,114.616,114.616,0,256,0s256,114.616,256,256"
    />
  </svg>
);

const UkraineIcon = memo(SVGComponent);
export default UkraineIcon;
