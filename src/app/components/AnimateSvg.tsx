

"use client";

import React from 'react'; 
interface AnimateSvgProps {
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  className?: string;
  path: string;
  strokeColor?: string;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "round" | "square";
  animationDuration?: number;
  animationDelay?: number;
  animationBounce?: number;
  reverseAnimation?: boolean;
  enableHoverAnimation?: boolean;
  preserveAspectRatio?: string;
}

const AnimateSvg: React.FC<AnimateSvgProps> = ({
  width,
  height,
  viewBox,
  className,
  path,
  strokeColor,
  strokeWidth,
  strokeLinecap,
  preserveAspectRatio
}) => {
  
  
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio={preserveAspectRatio}
    >
 
      <path
        d={path}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        fill="none"
      />
    </svg>
  );
};

export default AnimateSvg;