import Image from "next/image";

export default function Blog2() {
  return (
    <>
      {/* Picture Section */}
      <div className="w-full h-auto bg-custom-light-gray">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full flex justify-start items-center px-4 sm:px-12 py-8">
            <h3 className="font-Montserrat font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
            <Image className="mt-4" src="/Rectangle.png" alt="a" width={1042} height={2} />
          </div>

          {/* Product Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 px-4 sm:px-12">
            {/* Product Card */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="w-full bg-white rounded-lg shadow-md flex flex-col justify-between"
              >
                <Image
                  src={`/crokery${item}.png`}
                  alt={`crockery ${item}`}
                  width={239}
                  height={280}
                  className="rounded-t-lg"
                />
                <div className="w-full p-4 flex flex-col justify-between h-full">
                  <h5 className="font-Montserrat font-bold text-base text-gray-900">
                    Graphic Design
                  </h5>
                  <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">
                    English Department
                  </h6>
                  <div className="flex justify-between gap-2 mt-4">
                    <h5 className="font-Montserrat font-bold text-base text-gray-400">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-base text-custom-teal">
                      $6.48
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
