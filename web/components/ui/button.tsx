import React from 'react';

interface UtilityButtonProps {
  text: string;
  onClick?: () => void;
}

const UtilityButton: React.FC<UtilityButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative w-full max-w-[586px] h-[60px] sm:h-[70px] md:h-[80px]
        bg-[#2D2D2D]
        text-white text-opacity-80 
        focus:outline-none
        overflow-hidden
        transition-all duration-300 ease-in-out
        hover:brightness-110 active:brightness-90
      "
      style={{
        clipPath: 'polygon(12% 0, 100% 0, 100% 77%, 86% 100%, 0 100%, 0 25%)'
      }}
    >
      <div 
        className="
          absolute inset-[1px]
          bg-[#002D00] bg-opacity-50
        "
        style={{
          clipPath: 'polygon(12% 0, 100% 0, 100% 77%, 86% 100%, 0 100%, 0 25%)'
        }}
      />
   
      <span className="
        absolute inset-0 flex items-center justify-center
        font-sans text-sm sm:text-base md:text-lg 
        z-10
      ">
        {text}
      </span>
    </button>
  );
};

export default UtilityButton;