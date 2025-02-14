import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function About(){
    return(
    
        <>
  {/* Navigation Section */}
  <div className="flex justify-around p-9 w-full h-[91px] flex-wrap md:flex-nowrap">
    <p className="font-Montserrat font-bold text-[24px] w-full md:w-auto text-center md:text-left">Bandage</p>
    <nav className="font-Montserrat text-sm font-bold text-gray-600 mb-3 ">
      <Link href="/" className="mr-4 mb-2 md:mb-0 ">Home</Link>
      <Link href="/blog" className="mr-4 mb-2 md:mb-0">Product</Link>
      <Link href="#" className="mr-4 mb-2 md:mb-0">Pricing</Link>
      <Link href="/contact" className="mr-4 mb-2 md:mb-0">Contact</Link>
    </nav>
    <div className="font-Montserrat font-bold text-sm text-sky-500 w-full md:w-auto text-center md:text-lef">
      <Link href="#">Login</Link>
    </div>
    <div className="bg-sky-500 px-6 py-6 flex rounded-md font-Montserrat font-bold text-white mb-4 items-center justify-center w-full md:w-auto">
      <button>Become a member</button>
      <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
    </div>
  </div>

  {/* About Us Section */}
  <div className="w-full h-auto p-6 md:p-12 lg:p-40">
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="text-center md:text-left md:w-1/2">
      <h5 className="font-Montserrat font-bold text-base text-gray-700 mb-5">ABOUT COMPANY</h5>
      <h1 className="font-Montserrat font-bold text-2xl md:text-[58px] mt-7">ABOUT US</h1>
      <p className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">
        We know how large objects will act
        <br />
        <span className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">but think on a small scale</span>
      </p>
      <div className="bg-sky-500 p-2 py-2 rounded-sm inline-block mt-8">
        <button className="text-white font-Montserrat font-bold px-6 py-2 ">
          Get Quote Now
        </button>
      </div>
    </div>
    <div className="mt-6 md:mt-0 md:w-1/2">
      <Image className="w-full h-auto" src="/girl.png" alt="woman" width={900} height={988} />
    </div>
  </div>
</div>


  {/* Call to Action Section */}
  <div className="w-full h-[236px] flex items-center justify-center gap-32 flex-col md:flex-row">
    <div className="mb-5 text-center md:text-left">
      <p className="font-Montserrat text-sm font-normal text-red-600 mb-4 ">Problem trying</p>
      <h2 className="font-Montserrat font-bold text-[24px] text-gray-800">
        Met minim Mollie non desert<br />Alamo est sit cliquy dolor do<br />met sent
      </h2>
    </div>
    <div>
      <p>
        Problem trying to resolve the conflict between the two major realms of<br />
        classical physics. Newton Mechanics
      </p>
    </div>
  </div>

  {/* Statistics Section */}
  <div className="w-full h-[264px] flex justify-center gap-16 mt-9 flex-col md:flex-row">
    <div className="text-center">
      <p className="font-Montserrat font-bold text-[58px]">15K</p>
      <p className="font-Montserrat font-bold text-base text-gray-600">Happy Customers</p>
    </div>
    <div className="text-center">
      <p className="font-Montserrat font-bold text-[58px]">150K</p>
      <p className="font-Montserrat font-bold text-base text-gray-600">Monthly Visitors</p>
    </div>
    <div className="text-center">
      <p className="font-Montserrat font-bold text-[58px]">15K</p>
      <p className="font-Montserrat font-bold text-base text-gray-600">Countries Worldwide</p>
    </div>
    <div className="text-center">
      <p className="font-Montserrat font-bold text-[58px]">100+</p>
      <p className="font-Montserrat font-bold text-base text-gray-600">Top Partners</p>
    </div>
  </div>

  {/* Video Section */}
  <div className="w-full h-[764px] flex justify-center relative">
    <div className="relative">
      {/* Video Image */}
      <Image src="/vedio.png" alt="video" width={989} height={540} />
      {/* Button Image positioned on top of the video image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image src="/button.png" alt="button" width={92} height={92} />
      </div>
    </div>
   </div> 

  {/* Meet Our Team Section */}
  <div className="w-full h-[826px]">
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="font-Montserrat font-bold text-[40px]">Meet Our Team</h2>
        <p className="text-gray-600 font-Montserrat font-normal text-sm">
          Problem trying to resolve the conflict between the two major realms of<br />
          classical physics. Newton Mechanics
        </p>
      </div>

      {/* Team Members */}
      <div className="w-full flex justify-center gap-5 mt-8 items-center flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-center">
          <Image src="/girl1.png" alt="girl" width={316} height={231} />
          <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm mt-4">Profession</h6>
          <div className="flex items-center space-x-4 mt-4">
            <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
            <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
            <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/girl2.png" alt="girl" width={316} height={231} />
          <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm mt-4">Profession</h6>
          <div className="flex items-center space-x-4 mt-4">
            <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
            <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
            <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/girl3.png" alt="girl" width={316} height={231} />
          <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm mt-4">Profession</h6>
          <div className="flex items-center space-x-4 mt-4">
            <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
            <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
            <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Big Companies Section */}
  <div className="w-full h-[826px]">
    <div className="w-full h-full flex flex-col justify-center items-center ">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="font-Montserrat font-bold text-[40px]  sm:text-[40px] ">Big Companies Are Here</h2>
        <p className="text-gray-600 font-Montserrat font-normal text-sm">
          Problem trying to resolve the conflict between the two major realms of<br />
          classical physics. Newton Mechanics
        </p>
      </div>

      {/* Companies Logos */}
      <div className="flex justify-center gap-20 items-center   flex-wrap md:flex-nowrap">
        <div>
          <Image src="/fa1.png" alt="fa" width={76} height={72} />
        </div>
        <div>
          <Image src="/fa2.png" alt="fa" width={76} height={72} />
        </div>
        <div>
          <Image src="/fa3.png" alt="fa" width={76} height={72} />
        </div>
        <div>
          <Image src="/fa4.png" alt="fa" width={76} height={72} />
        </div>
        <div>
          <Image src="/fa5.png" alt="fa" width={76} height={72} />
        </div>
        <div>
          <Image src="/fa6.png" alt="fa" width={76} height={72} />
        </div>
      </div>
   

  {/* Work With Us Section */}
  <div className="w-full h-auto flex justify-center  p-20 mb-9">
    <div className="flex flex-col items-center md:flex-row md:items-center gap-1 bg-custom-blue-0  ">
      <div className="text-center md:text-left ">
        <h5 className="font-Montserrat font-bold text-base text-white">WORK WITH US</h5>
        <h2 className="font-Montserrat font-bold text-[40px] text-white">
          Now Let&apos;s grow Yours 
        </h2>
        <p className="text-white ">
          The gradual information about atomic and <br />
          small-scale behavior during the first quarter of the 20th century.
        </p>
      </div>
      <div className="flex flex-row">
        <Image src={"/mam.png"} alt="mam" width={590} height={640} />
      </div>
    </div>
  </div>
  </div>
  </div>

  <div className="flex items-center justify-around bg-slate-100 px-6 py-4">
  <p className="font-Montserrat font-bold text-[24px]">Bandage</p>
  <div className="flex items-center space-x-4">
    <Image src={"/facebook.png"} alt="Facebook" width={26} height={26} />
    <Image src={"/instagram.png"} alt="Instagram" width={26} height={26} />
    <Image src={"/twitter.png"} alt="Twitter" width={26} height={26} />
  </div>
</div>
        
        <footer className=" text-black py-6">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1">
                <h2 className=" font-bold mb-4 font-Montserrat  text-base">Company Info</h2>
                <ul className="font-Montserrat font-bold text-sm text-gray-600">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h2 className=" font-bold mb-4 font-Montserrat text-base">Legal</h2>
                <ul className="font-Montserrat font-bold text-sm text-gray-600">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h2 className=" font-bold mb-4 font-Montserrat text-base">Features</h2>
                <ul className="font-Montserrat font-bold text-sm text-gray-600">
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h2 className="font-Montserrat text-base font-bold mb-4">Resources</h2>
                <ul className="font-Montserrat font-bold text-sm text-gray-600">
                    <li><a href="#">iOS & Android</a></li>
                    <li><a href="#">Watch a Demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h2 className="font-Montserrat text-base font-bold mb-4">Get In Touch</h2>
                
                <div className="mb-4">
          <div className="flex items-center ">
            <input
              type="email"
              placeholder="Your Email"
              className="w-auto border border-gray-300 p-2 rounded"
            />
            <button className="bg-blue-400 py-2 px-1 rounded hover:bg-blue-100">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-2 font-Montserrat font-normal text-[12px]">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
        </div>
        <div className="text-center mt-6 font-Montserrat font-bold text-sm text-gray-600">
            <p>Made With Love By Finland | All Rights Reserved</p>
        </div>
    
</footer>
  
</>


    )
}