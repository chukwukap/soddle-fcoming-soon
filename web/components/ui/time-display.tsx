import React from 'react';
import { TimeInput, formatTime } from '@/lib/utils';

interface TimerDisplayProps {
  time: TimeInput;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
  const { hours, minutes, seconds } = formatTime(time);

  return (
    <svg
      width="226"
      height="36"
      viewBox="0 0 226 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="1.5"
        width="225"
        height="33"
        fill="#111411"
        stroke="#2A342A"
      />
      <g filter="url(#filter0_f_42_20)">
        <text
          x="65"
          y="22"
          fill="#2FFF2B"
          fillOpacity="0.5"
          fontSize="16"
          fontFamily="Arial"
        >
          {hours}
        </text>
      </g>
      <g filter="url(#filter1_f_42_20)">
        <text
          x="108"
          y="22"
          fill="#2FFF2B"
          fillOpacity="0.5"
          fontSize="16"
          fontFamily="Arial"
        >
          {minutes}
        </text>
      </g>
      <g filter="url(#filter2_f_42_20)">
        <text
          x="151"
          y="22"
          fill="#2FFF2B"
          fillOpacity="0.5"
          fontSize="16"
          fontFamily="Arial"
        >
          {seconds}
        </text>
      </g>
      <text
        x="65"
        y="22"
        fill="white"
        fillOpacity="0.8"
        fontSize="16"
        fontFamily="Arial"
      >
        {hours}
      </text>
      <text
        x="108"
        y="22"
        fill="white"
        fillOpacity="0.8"
        fontSize="16"
        fontFamily="Arial"
      >
        {minutes}
      </text>
      <text
        x="151"
        y="22"
        fill="white"
        fillOpacity="0.8"
        fontSize="16"
        fontFamily="Arial"
      >
        {seconds}
      </text>
      <path
        d="M90.3693 20.5167C90.3693 19.8267 90.9443 19.2517 91.6343 19.2517C92.3243 19.2517 92.8993 19.8267 92.8993 20.5167C92.8993 21.2067 92.3243 21.7817 91.6343 21.7817C90.9443 21.7817 90.3693 21.2067 90.3693 20.5167ZM90.3693 12.8117C90.3693 12.1217 90.9443 11.5467 91.6343 11.5467C92.3243 11.5467 92.8993 12.1217 92.8993 12.8117C92.8993 13.5017 92.3243 14.0767 91.6343 14.0767C90.9443 14.0767 90.3693 13.5017 90.3693 12.8117Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M125.393 20.5167C125.393 19.8267 125.968 19.2517 126.658 19.2517C127.348 19.2517 127.923 19.8267 127.923 20.5167C127.923 21.2067 127.348 21.7817 126.658 21.7817C125.968 21.7817 125.393 21.2067 125.393 20.5167ZM125.393 12.8117C125.393 12.1217 125.968 11.5467 126.658 11.5467C127.348 11.5467 127.923 12.1217 127.923 12.8117C127.923 13.5017 127.348 14.0767 126.658 14.0767C125.968 14.0767 125.393 13.5017 125.393 12.8117Z"
        fill="white"
        fillOpacity="0.5"
      />
      <defs>
        <filter
          id="filter0_f_42_20"
          x="55.0767"
          y="0.97168"
          width="47.8228"
          height="34.145"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_42_20"
          />
        </filter>
        <filter
          id="filter1_f_42_20"
          x="95.5928"
          y="0.97168"
          width="42.3306"
          height="34.49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_42_20"
          />
        </filter>
        <filter
          id="filter2_f_42_20"
          x="130.345"
          y="0.97168"
          width="41.8545"
          height="31.04"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_42_20"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TimerDisplay;
