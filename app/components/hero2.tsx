import Image from "next/image";

export default function Hero2() {
  return (
    <>
      <div className="w-full h-auto mt-24 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <div className="w-full text-center">
            <h2 className="font-Montserrat font-normal text-[20px] text-gray-500">Featured Product</h2>
            <h3 className="font-Montserrat font-bold text-[24px] mt-2">BESTSELLER PRODUCT</h3>
            <p className="font-Montserrat font-normal text-sm text-gray-500 mt-4">Problems trying to solve the conflict between</p>
          </div>

          {/* Product Grid */}
          <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
            {/* Product Item 1 */}
            <div className="flex flex-col items-center">
              <Image src="/her1.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 2 */}
            <div className="flex flex-col items-center">
              <Image src="/her2.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 3 */}
            <div className="flex flex-col items-center">
              <Image src="/her3.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 4 */}
            <div className="flex flex-col items-center">
              <Image src="/her4.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>
          </div>

          {/* Second Row of Products */}
          <div className="w-full mt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
            {/* Product Item 5 */}
            <div className="flex flex-col items-center">
              <Image src="/her5.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 6 */}
            <div className="flex flex-col items-center">
              <Image src="/her6.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 7 */}
            <div className="flex flex-col items-center">
              <Image src="/her7.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>

            {/* Product Item 8 */}
            <div className="flex flex-col items-center">
              <Image src="/her8.png" alt="style" width={239} height={427} />
              <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108px] h-[34px] flex mt-4 justify-between">
                <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
              </div>
              <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
