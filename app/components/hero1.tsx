import Image from "next/image"


export default function Hero(){
    return(
        <>
      <div className="w-full h-auto flex justify-center items-center px-4">
  <div className="w-full max-w-[1440px] h-auto flex flex-col justify-center items-center p-6 md:p-14">
    <h2 className="font-Montserrat font-bold text-[24px] text-center">EDITOR&apos;S PICK</h2>
    <p className="font-Montserrat font-normal text-sm text-center mt-2">Problems trying to resolve the conflict between </p>

    <div className="w-full flex flex-wrap justify-center gap-9 mt-14">
      {/* MEN Image Section */}
      <div className="relative w-full sm:w-[509px] md:w-[509px] lg:w-[509px]">
        <Image src={"/filter-1.png"} alt="man" width={509} height={500} />
        <h2 className="absolute bottom-6 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
          MEN
        </h2>
      </div>

      {/* WOMEN Image Section */}
      <div className="relative w-full sm:w-[239px] md:w-[239px] lg:w-[239px]">
        <Image src={"/filter-2.png"} alt="woman" width={239} height={500} />
        <h2 className="absolute bottom-6 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
          WOMEN
        </h2>
      </div>

      {/* Accessories and Kids Section */}
      <div className="w-full flex flex-wrap gap-9 justify-center sm:w-[239px] md:w-[239px] lg:w-[239px]">
        {/* ACCESSORIES Image */}
        <div className="relative w-full">
          <Image src={"/filter-3.png"} alt="accessories" width={239} height={242} />
          <h2 className="absolute bottom-6 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
            ACCESSORIES
          </h2>
        </div>

        {/* KIDS Image */}
        <div className="relative w-full">
          <Image src={"/filter-4.png"} alt="kids" width={239} height={242} />
          <h2 className="absolute bottom-6 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
            KIDS
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>

        
        
        
        </>
    )
}