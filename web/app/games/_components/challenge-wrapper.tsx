import React, { ReactNode } from 'react';

interface ChallengeWrapperProps {
  children: ReactNode;
  className?: string;
}

const ChallengeWrapper: React.FC<ChallengeWrapperProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative w-full aspect-[400/200] ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 437 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 219V19.4535L18.5889 0H437V199.087L417.917 219H0Z"
          fill="#111411"
          stroke="#2A342A"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-0 p-4 flex flex-col">
        <div className="flex-grow overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default ChallengeWrapper;
