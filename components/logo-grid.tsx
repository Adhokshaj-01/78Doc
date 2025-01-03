export default function LogoGrid() {
  const colorBlocks = [
    { bg: 'bg-[#C65D4B]', text: 'text-black' }, // Terracotta
    { bg: 'bg-[#D4A44C]', text: 'text-black' }, // Golden yellow
    { bg: 'bg-[#8C9CB1]', text: 'text-black' }, // Slate blue
    { bg: 'bg-[#adf7b3]', text: 'text-black' }, // Sage green
    { bg: 'bg-[#C69B9B]', text: 'text-black' }, // Dusty rose
    { bg: 'bg-[#98B4A6]', text: 'text-black' }, // Mint green
    { bg: 'bg-[#A3AB8B]', text: 'text-black' }, // Light olive
    { bg: 'bg-[#C5BEB5]', text: 'text-black' }, // Beige/taupe
    { bg: 'bg-[#D4934B]', text: 'text-black' }, // Orange/amber
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        {colorBlocks.map((block, index) => (
          <div 
            key={index} 
            className={`${block.bg} aspect-[2/1] flex items-center justify-center p-6`}
          >
            <div className={`font-cinzel-decorative text-2xl md:text-4xl lg:text-5xl ${block.text}`}>
              {/* VII.VIII */}VII8
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

