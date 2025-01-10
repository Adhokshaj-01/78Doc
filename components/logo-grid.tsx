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
    { bg: 'bg-[#E97451]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Burnt Sienna
    { bg: 'bg-[#DAA520]', text: 'text-black', defaultText: 'VII.VIII', clickedText: 'VII8' }, // Golden Ochre
    { bg: 'bg-[#FFFFF0]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Ivory White
    { bg: 'bg-[#89d99e]', text: 'text-black', defaultText: 'VII.VIII', clickedText: 'VII8' }, // Light Jade
    { bg: 'bg-[#89d9d6]', text: 'text-black', defaultText: 'VII8', clickedText: 'VII.VIII' }, // Mint
    { bg: 'bg-[#ac71c7]', text: 'text-black', defaultText: 'VII.VIII', clickedText: 'VII8' }, // Orchid Purple
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
    <div className="w-full mt-4 flex justify-center">
      <div
        className={`grid gap-4 ${
          colorBlocks.length === 1 ? 'grid-cols-1' : 'grid-cols-3'
        }`}
      >
        {colorBlocks.map((block, index) => (
          <div
          key={index}
          className={`border-dashed border-2 border-slate-600 ${block.bg} aspect-[2/1] flex items-center justify-center p-8 shadow-lg`}
          onClick={() => handleClick(index)}
        >
            {/* <div
              className={`font-cinzel-decorative text-2xl md:text-4xl lg:text-5xl ${block.text} transform transition-transform duration-300 ease-in-out ${{
                texts[index] === block.clickedText
                  ? 'scale-100 opacity-100'
                  : 'scale-100 opacity-100'
              }}`}
            >
              {texts[index]}
            </div> */}
             <div
              className={`font-cinzel-decorative text-xl md:text-4xl lg:text-2xl ${block.text} transform transition-transform duration-300 ease-in-out ${
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
