import Image from "next/image";

export default function Hero4() {
  return (
    <>
      {/* Section 2 */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center mt-10 px-4 sm:px-6 md:px-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image src={"/hero01.png"} alt="women" width={500} height={234} />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 px-4 md:px-8">
          <h5 className="font-Montserrat font-bold text-base text-gray-600 mb-2 text-center md:text-left">
            SUMMER 2020
          </h5>
          <h1 className="font-Montserrat font-bold text-[32px] sm:text-[36px] md:text-[40px] text-black mb-4 text-center md:text-left">
            Part Of The Neural
            <br />
            Universe
          </h1>
          <h4 className="font-Montserrat font-normal text-sm sm:text-base text-[18px] text-gray-600 mb-6 text-center md:text-left">
            We know how large objects will act,
            <br /> but things on a small scale.
          </h4>

          {/* Button Section */}
          <div className="flex justify-center md:justify-start m-4 space-x-4">
            <button className="bg-custom-green-0 text-white font-Montserrat px-6 py-2 rounded-md">
              BUY NOW
            </button>
            <button className="bg-transparent text-black font-Montserrat px-6 py-2 border border-green-600 rounded-md">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
