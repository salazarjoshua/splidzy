import React from "react";

interface DashedUnderlineProps {
  strokeColor?: string;
  dashSize?: number;
  gapSize?: number;
  strokeWidth?: number;
}

const DashedUnderline: React.FC<DashedUnderlineProps> = ({
  dashSize = 6,
  gapSize = 6,
  strokeWidth = 2,
}) => {
  return (
    <svg width="100%" height="10" className="text-neutral-300">
      <line
        x1="0"
        y1="5"
        x2="100%"
        y2="5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashSize}, ${gapSize}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DashedUnderline;
