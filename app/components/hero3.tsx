import Image from "next/image";

export default function Hero3() {
  return (
    <section className="w-full relative bg-custom-dark-green-0 flex items-center mt-4 px-4 sm:px-6 md:px-8 lg:px-16">
    {/* Content on the left */}
    <div className="flex flex-col justify-center items-start text-center md:text-left px-4 ml-0 sm:ml-10 md:ml-28 lg:ml-28">
      <h5 className="font-Montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] text-white mb-2">
        SUMMER 2020
      </h5>
      <h1 className="font-Montserrat text-[32px] sm:text-[44px] md:text-[58px] font-bold text-white mb-4">
        Vita Classic<br />Product
      </h1>
      <h4 className="font-Montserrat text-xs sm:text-sm md:text-base font-normal text-white mb-4 w-full">
        We knew how large objects will act, We know<br />how our object will act we know.
      </h4>
      <div className="w-full sm:w-[221px] h-[62px] flex items-center justify-center mb-4">
        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
        
          <div className="ml-0 sm:ml-5 bg-custom-green rounded-sm mt-2 w-full sm:w-[150px] md:w-[184px] h-[52px] text-white font-Montserrat font-bold text-xs sm:text-sm md:text-sm">
            <button className="text-white ml-0 sm:ml-12 mt-3 w-full sm:w-auto">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="ml-auto mt-4 sm:mt-0">
      <Image src="/hero9.png" alt="hero" width={350} height={100} />
    </div>
    </section>
  );
}
