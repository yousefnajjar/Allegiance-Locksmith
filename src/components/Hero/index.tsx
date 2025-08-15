import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                  Expert Locksmith Services
                </h1>
                <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed sm:text-lg md:text-xl">
                  Professionally crafted to meet your needs with precision and
                  care. Trust the expertise of Allegiance Locksmith.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
 


<div className="absolute inset-0 -z-10 w-full h-full">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0056ad" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#0056ad" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M0 150 C400 300 800 0 1440 200"
      stroke="url(#gradBlue)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0 300 C400 450 800 150 1440 350"
      stroke="url(#gradBlue)"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M0 450 C400 600 800 300 1440 500"
      stroke="url(#gradBlue)"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />

    <text
      x="50%"
      y="90%"
      textAnchor="middle"
      fill="#0056ad"
      fillOpacity="0.1"
      fontSize="8vw"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Allegiance Locksmith
    </text>
  </svg>
</div>













      </section>
    </>
  );
};

export default Hero;
