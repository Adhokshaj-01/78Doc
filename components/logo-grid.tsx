'use client';
import React, { useState } from 'react';

type ColorBlock = {
  bg: string;
  text: string;
  defaultText: string;
  clickedText: string;
};

export default function LogoGrid() {
  const colorBlocks: ColorBlock[] = [
    { bg: 'bg-[#C65D4B]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Terracotta
    { bg: 'bg-[#D4A44C]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Golden yellow
    { bg: 'bg-[#8C9CB1]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Slate blue
    { bg: 'bg-[#adf7b3]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Sage green
    { bg: 'bg-[#C69B9B]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Dusty rose
    { bg: 'bg-[#98B4A6]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Mint green
    { bg: 'bg-[#A3AB8B]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Light olive
    { bg: 'bg-[#C5BEB5]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Beige/taupe
    { bg: 'bg-[#D4934B]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Orange/amber
  ];

  const [texts, setTexts] = useState<string[]>(colorBlocks.map(block => block.defaultText));

  const handleClick = (index: number): void => {
    const newTexts = [...texts];
    newTexts[index] =
      texts[index] === colorBlocks[index].defaultText
        ? colorBlocks[index].clickedText
        : colorBlocks[index].defaultText; // Toggle text
    setTexts(newTexts);
  };

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-3 gap-4">
        {colorBlocks.map((block, index) => (
          <div
            key={index}
            className={`border-dashed border-2 border-slate-600 ${block.bg} aspect-[2/1] flex items-center justify-center p-6 shadow-lg`}
            onClick={() => handleClick(index)}
          >
            <div
              className={`font-cinzel-decorative text-2xl md:text-4xl lg:text-5xl ${block.text} transform transition-transform duration-300 ease-in-out ${
                texts[index] === block.clickedText
                  ? 'scale-100 opacity-100'
                  : 'scale-100 opacity-100'
              }`}
            >
              {texts[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
