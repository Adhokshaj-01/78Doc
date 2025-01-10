'use client'
import { Nav } from "@/components/nav";
import LogoGrid from "@/components/logo-grid";
import { useEffect, useState } from "react";


export default function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [initialTxt, setTxt] = useState("VII8");

  const handleToggle = () => {
    setIsTyping(true);

    const newText = initialTxt === "VII8" ? "VII.VIII" : "VII8";
    let index = 0;

    // Typewriter effect logic
    const interval = setInterval(() => {
      setDisplayedText(newText.slice(0, index + 1));
      index++;

      if (index === newText.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTxt(newText);
      }
    }, 100); // Adjust typing speed here
  };

  useEffect(() => {
    setDisplayedText(initialTxt); // Initialize displayedText
  }, [initialTxt]);
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center space-y-8">
          <h1 className="text-[20vw] font-cinzel-decorative leading-none tracking-tight">
            {/* VII.VIII */} VII8
          </h1>
          <div className="flex items-center justify-center gap-8 text-2xl font-cinzel ">
            <span>7/8 COFFEE & Co.</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>७ | ८</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-[1/2] max-w-md text-sm leading-relaxed text-center font-serif">
          Our coffee embodies the dedication to quality, crafted with the
          precision of a 7/8 time signature in music—complex yet perfectly
          balanced. At VII.VIII, every cup is a harmonious blend of care and
          craftsmanship.
        </div>
      </section>

      {/* Brand Grid Section */}
      <section className="min-h-screen py-24 px-6 md:px-12 bg-[#F5F5F3]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-cinzel-decorative">
              Brand Expressions
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              Our brand identity adapts across a spectrum of colors while
              maintaining its distinctive character. Each variation speaks to
              different aspects of our craft and heritage.
            </p>
          </div>
          <LogoGrid />
        </div>
      </section>

      {/* Typography Section */}
      <section className="min-h-screen py-24 px-6 md:px-12  bg-[#09090B] text-white">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-cinzel-decorative">Typography</h2>
              <p className="text-lg leading-relaxed max-w-2xl">
                Our typography system combines the ornate elegance of Cinzel
                Decorative for primary headings with Cinzel for secondary text
                and Playfair Display for body copy. This hierarchy creates a
                sophisticated and layered typographic experience.
              </p>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-6xl font-cinzel-decorative">Aa</p>
                <p className="text-sm">Cinzel Decorative</p>
              </div>
              <div className="space-y-4">
                <p className="text-md sm:text-2xl font-cinzel-decorative">
                  |   ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-md sm:text-2xl font-cinzel-decorative">
                  -  1234567890
                </p>
              </div>
              <div className="space-y-2 mt-8">
                <p className="text-6xl sm:text-4xl font-cinzel">Aa</p>
                <p className="text-sm">Cinzel</p>
              </div>
              <div className="space-y-4">
                <p className="text-md sm:text-2xl font-cinzel">
                  |  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-md sm:text-2xl font-cinzel"> - 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="min-h-screen py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-cinzel-decorative">
              Brand Applications
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              Our VII.VIII identity comes to life across various touchpoints,
              from packaging to digital presence. Each application maintains our
              core design principles while adapting to specific contexts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/5] relative bg-[#121212] flex items-center justify-center text-white" 
                onClick={handleToggle}
            
            >
              {/* <div className="text-6xl font-cinzel-decorative text-"> */}
              {/* <div
                className="text-6xl font-cinzel-decorative text-transparent bg-clip-text"
                style={{
                  // backgroundImage: 'linear-gradient(to right, #2f2f2e, #d6b003,rgb(179, 154, 12),rgb(154, 142, 32),rgb(164, 140, 6), #2f2f2e)',
                  backgroundImage:
                    "linear-gradient(to right, #2f2f2e,rgb(164, 140, 6), #d6b003,rgb(154, 142, 32),rgb(164, 140, 6), #2f2f2e)",
                    transition: "all 0.8s ease",
                    transform: isToggling ? "rotate(980deg) scale(0.1)" : "rotate(0deg)",
                    opacity: isToggling ? 0.5 : 1,
                }}
              >
                {/* VII.VIII *
                {initialTxt}
              </div> */}
              <div
        className="text-6xl sm:text-8xl font-cinzel-decorative text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2f2f2e, rgb(164, 140, 6), #d6b003, rgb(154, 142, 32), rgb(164, 140, 6), #2f2f2e)",
          transition: "opacity 0.8s ease",
          opacity: isTyping ? 0.7 : 1,
        }}
      >
        {displayedText}
      </div>
              <div className="absolute bottom-8 left-8 text-2xl font-cinzel">
                ७ | ८
              </div>
              <div className="absolute bottom-8 right-8 text-2xl font-cinzel">
                7/8
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {["Coffee Bag", "Mug", "Business Card", "Website"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="aspect-square relative bg-[#d9d9ba] flex flex-col items-center justify-center p-4"
                  >
                    <div className="text-2xl font-cinzel-decorative mb-2 text-black">
                      VII.VIII
                    </div>
                    <div className="text-sm text-center">{item}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="min-h-screen py-24 px-6 md:px-12 bg-[#09090B] text-white">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-cinzel-decorative">Color Palette</h2>
              <p className="text-lg leading-relaxed">
                Our color palette draws inspiration from natural elements and
                artisanal craftsmanship. Each color has been carefully selected
                to complement our brand story while maintaining versatility
                across applications.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { color: "#E97451", name: "Burnt Sienna " },
                { color: "#DAA520", name: "Golden Ochre" },
                { color: "#FFFFF0", name: "Ivory White " },
                { color: "#89d99e", name: "Light Jade" },
                { color: "#89d9d6", name: "Mint" },
                { color: "#ac71c7", name: "Orchid Purple" },
              ].map((color, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="aspect-square rounded-lg"
                    style={{ backgroundColor: color.color }}
                  />
                  <p className="text-sm font-cinzel">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" text-black py-12">
  <div className="max-w-6xl mx-auto space-y-12 text-center">
    {/* Footer Branding */}
    {/* <div>
      <h3 className="text-2xl font-cinzel-decorative text-gray-600">
        VII8 -
      </h3>
    </div> */}

    {/* Footer Links */}
    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-xl font-cinzel">Quick Links</h4>
        <ul className="mt-4 space-y-4 text-sm">
          <li>
            <a href="#home" className="hover:text-[#D4A44C]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#D4A44C]">
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-[#D4A44C]">
              Products
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#D4A44C]">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-cinzel">Social Media</h4>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-[#D4A44C] text-2xl">
            {/* Replace with your icons, like Font Awesome or Heroicons 
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-[#D4A44C] text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#D4A44C] text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-[#D4A44C] text-2xl">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-cinzel">Newsletter</h4>
        <div className="mt-4 space-y-4">
          <p className="text-sm">
            Subscribe to our newsletter for the latest updates, promotions, and news!
          </p>
          <input
            type="email"
            className="w-full px-4 py-2 bg-[#2f2f2f] text-white border border-[#D4A44C] rounded-md"
            placeholder="Your email"
          />
          <button className="w-full mt-2 bg-[#D4A44C] py-2 text-white rounded-md hover:bg-[#C65D4B]">
            Subscribe
          </button>
        </div>
      </div>
    </div> */}

    {/* Footer Bottom */}
    
    <div className="text-sm text-gray-700 mt-12 font-cinzel-decorative max-w-2xl">
  <p>
    &copy;{new Date().getFullYear()} |
    <span className="text-sm font-cinzel-decorative"> 7/8 Coffee & Co. </span> 
    |&nbsp; Designed and Developed by -  Tyler Durden
  </p>
</div>

  </div>
</section>

    </div>
  );
}
