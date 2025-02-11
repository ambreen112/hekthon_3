import Image from "next/image";

export default function Blog1() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full max-w-[1056px] mx-auto h-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Image Section */}
            <div className="relative w-full max-w-[332px] h-auto">
              <Image
                className="object-contain"
                src="/unplash.png"
                alt="unplash"
                width={325}
                height={382}
              />
              <Image
                className="absolute top-0 left-0 object-contain"
                src="/chair.png"
                alt="chair"
                width={316}
                height={372}
              />
            </div>

            {/* Text Section */}
            <div className="w-full max-w-[332px] px-4 md:px-8">
              <h5 className="font-Montserrat font-bold text-[24px] mb-4">the quick fox jumps over</h5>
              <h6 className="font-Montserrat font-normal text-sm text-gray-600 mb-4">
                Met minim Mollie non desert Alamo est sit
                <br />
                cliquey dollar do met sent.RELIT official
                <br />
                conseququet door ENIM RELIT Mobile.
                <br />
                Excitatio venial consequentsent nostrum
                <br />
                met.
              </h6>
              <h6 className="font-Montserrat font-normal text-sm text-gray-600 mb-4">
                Met minim Mollie non desert Alamo est sit
                <br />
                cliquey dollar do met sent.RELIT official
                <br />
                conseququet door ENIM RELIT Mobile.
                <br />
                Excitatio venial consequentsent nostrum
                <br />
                met.
              </h6>
              <h6 className="font-Montserrat font-normal text-sm text-gray-600 mb-4">
                Met minim Mollie non desert Alamo est sit
                <br />
                cliquey dollar do met sent.RELIT official
                <br />
                conseququet door ENIM RELIT Mobile.
                <br />
                Excitatio venial consequentsent nostrum
                <br />
                met.
              </h6>
            </div>

            {/* First List Section */}
            <div className="w-full max-w-[332px] h-auto mb-14">
              <h5 className="font-Montserrat font-bold text-[24px] mb-4">the quick fox jumps over</h5>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
              </div>
            </div>

            {/* Second List Section */}
            <div className="w-full max-w-[332px] h-auto mb-14">
              <h5 className="font-Montserrat font-bold text-[24px] mb-4">the quick fox jumps over</h5>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/arrow1.png" alt="arrow" width={8.62} height={16} />
                  <h5 className="font-Montserrat font-normal text-sm text-gray-600">
                    the quick fox jump over the lady dog
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for mobile devices */}
          <div className="block md:hidden h-8" />

        </div>
      </div>
    </>
  );
}
