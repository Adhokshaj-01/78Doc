import Image from "next/image";
import { Nav } from "@/components/nav";
import LogoGrid from "@/components/logo-grid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="text-center space-y-8">
          <h1 className="text-[20vw] font-cinzel-decorative leading-none tracking-tight">
            {/* VII.VIII */} VII8
          </h1>
          <div className="flex items-center justify-center gap-8 text-2xl font-cinzel">
            <span>7/8 coffee & Co.</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>७ | ८</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-[1/2] max-w-md text-sm leading-relaxed text-center">
          VII.VIII is where precision meets passion in every cup. Our commitment
          to quality is as unwavering as the 7/8 time signature in music -
          complex, yet perfectly balanced.
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
      <section className="min-h-screen py-24 px-6 md:px-12 bg-[#EAEAE8]">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-cinzel-decorative">Typography</h2>
              <p className="text-lg leading-relaxed">
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
                <p className="text-2xl sm:text-xl font-cinzel-decorative">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-xl sm:text-lg font-cinzel-decorative">
                  1234567890
                </p>
              </div>
              <div className="space-y-2 mt-8">
                <p className="text-6xl sm:text-4xl font-cinzel">Aa</p>
                <p className="text-sm">Cinzel</p>
              </div>
              <div className="space-y-4">
                <p className="text-2xl sm:text-xl font-cinzel">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-xl sm:text-lg font-cinzel">1234567890</p>
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
            <div className="aspect-[4/5] relative bg-[#121212] flex items-center justify-center text-white">
              {/* <div className="text-6xl font-cinzel-decorative text-"> */}
              <div
                className="text-6xl font-cinzel-decorative text-transparent bg-clip-text"
                style={{
                  // backgroundImage: 'linear-gradient(to right, #2f2f2e, #d6b003,rgb(179, 154, 12),rgb(154, 142, 32),rgb(164, 140, 6), #2f2f2e)',
                  backgroundImage:
                    "linear-gradient(to right, #2f2f2e,rgb(164, 140, 6), #d6b003,rgb(154, 142, 32),rgb(164, 140, 6), #2f2f2e)",
                }}
              >
                {/* VII.VIII */}
                VII8
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
      <section className="min-h-screen py-24 px-6 md:px-12 bg-[#EAEAE8]">
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
                { color: "#C65D4B", name: "Terracotta" },
                { color: "#D4A44C", name: "Golden" },
                { color: "#8C9CB1", name: "Slate" },
                { color: "#789395", name: "Sage" },
                { color: "#C69B9B", name: "Rose" },
                { color: "#98B4A6", name: "Mint" },
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
    </div>
  );
}
