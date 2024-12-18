import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Contact(){
    return(
    
        <>
  {/* Navigation Section */}
  <div className="flex justify-around p-9 w-full h-[91px]">
    <p className="font-Montserrat font-bold text-[24px]">Bandage</p>
    <nav className="font-Montserrat text-sm font-bold text-gray-600 mb-3">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="/blog" className="mr-4">Product</Link>
      <Link href="#" className="mr-4">Pricing</Link>
      <Link href="#" className="mr-4">Contact</Link>
    </nav>
    <div className="font-Montserrat font-bold text-sm text-sky-500">
      <Link href="#">Login</Link>
    </div>
    <div className="bg-sky-500 px-6 py-6 flex rounded-md font-Montserrat font-bold text-white mb-4 items-center justify-center">
      <button>Become a member</button>
      <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
    </div>
  </div>

  {/* About Us Section */}
  <div className="w-full h-auto p-6 md:p-12 lg:p-40">
  <div className="flex flex-col md:flex-row items-center justify-center ">
    <div className="text-center md:text-left md:w-1/2">
      <h5 className="font-Montserrat font-bold text-base  mb-5">CONTACT US</h5>
      <h1 className="font-Montserrat font-bold text-2xl md:text-[58px]  mt-7">Get in touch< br/>  <span className="mt-12 block">today!</span>
      </h1>
      <p className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">
        We know how large objects will act
        <br />
        <span className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">but think on a small scale</span>
      </p>
      <div>
        <p className="font-Montserrat font-bold text-[24px] mt-9">Phone; +451 215 215</p><br/>
        <p className="font-Montserrat font-bold text-[24px] mt-1">Fax; +451 215 215</p>
      </div>
      <div className="flex mt-7 gap-9">
        <Image src={"/p1.png"} alt="twitter" width={30} height={24.38}/>
        <div className="relative inline-block">
  <Image 
    className="absolute inset-0 " 
    src="/p2f.png" 
    alt="frame" 
    width={30} 
    height={30} 
  />
  <Image 
    className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 " 
    src="/p2.png" 
    alt="facebook" 
    width={13.23} 
    height={25.47} 
  />
</div>
        <Image src={"/p3.png"} alt="twitter" width={29.98} height={29.98}/>
        <Image src={"/p4.png"} alt="twitter" width={29.98} height={29.98}/>
      </div>
</div>
    <div className="mt-6 md:mt-0 md:w-1/2 ">
    <div className="relative w-[671px] h-[826px]">
    <Image  src="/E1.png" alt="woman" width={77} height={77} />
  {/* Background Image */}
  <Image 
    src="/E0.png" 
    alt="woman" 
    width={484.06} 
    height={484.06} 
    
  />
<Image  src="/E2.png" alt="woman" width={14.78} height={14.78} />

  {/* Foreground Image */}
  <Image 
     
    src="/p6.png" 
    alt="woman" 
    width={671} 
    height={825} 
     className="absolute inset-0 w-full h-full object-cover "
  />
 
</div>

   
    
      
      
    </div>
  </div>
</div>

{/*visit */}

<div className="w-[1440] h-auto mt-24">
    <div className="w-[1124] h-[1652] flex justify-center items-center ">
      <div className="w-[691] h-[102]">
        <h6 className="font-Montserrat font-bold text-sm items-center justify-center ml-44 ">VISIT OUR OFFICE</h6>
        <h2 className="font-Montserrat font-bold text-[40px] " >We help small business<br/><span className="ml-24">with big ideas</span></h2>
        
</div>
</div>
</div>
<div className="w-[985] h-[403] flex justify-center  mt-10">
    
<div className="w-[327] h-[343] border-2 custom-dotted-border border-dotted border-custom-blue-0 px-7 py-4" >
   
<Image className="ml-16 mb-4" src={"/t1.png"} alt="phone" width={72} height={72}/>
   
        <h6 className="font-Montserrat font-bold text-s">geoorgia.young@example.com</h6>
        <h6 className="font-Montserrat font-bold text-s ml-6">geoorgia.young@ple.com</h6><br/>
        <h5 className="font-Montserrat font-bold text-base ml-12">Get Support</h5>
        <button className=" mt-5 ml-8 border-2 border-custom-blue-0 px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white ">
  Submit Request
</button>
</div>

<div className="w-[327] h-[403] px-7 py-4 bg-custom-dark-blue-0" >
   
<Image className="ml-20 "  src={"/t2.png"} alt="phone" width={72} height={72}/>
   
        <h6 className="font-Montserrat font-bold text-s text-white">geoorgia.young@example.com</h6>
        <h6 className="font-Montserrat font-bold text-s ml-6 text-white">geoorgia.young@ple.com</h6><br/>
        <h5 className="font-Montserrat font-bold text-base ml-12 text-white">Get Support</h5>
        <button className="mb-20 mt-5 ml-8 border-2 border-custom-blue-0  px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white ">
  Submit Request
</button>
</div>

<div className="w-[327] h-[343] border-2 custom-dotted-border border-dotted border-custom-blue-0 px-7 py-4" >
   
<Image  className="ml-20" src={"/t3.png"} alt="phone" width={72} height={72}/>
   
        <h6 className="font-Montserrat font-bold text-s">geoorgia.young@example.com</h6>
        <h6 className="font-Montserrat font-bold text-s ml-6">geoorgia.young@ple.com</h6><br/>
        <h5 className="font-Montserrat font-bold text-base ml-12">Get Support</h5>
        <button className=" ml-8 mt-8 border-2 border-custom-blue-0 px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white ">
  Submit Request
</button>
</div>

</div>
    <div className="w-full h-[348] mt-24 flex justify-center ">
    <Image  className="mb-14 " src={"/Arrow2.png"} alt="arrow" width={72.56} height={21.84}/>
</div>
<div className="w-[607px] h-[188px] flex flex-col justify-center items-center ml-96">
  <h6 className="font-Montserrat font-bold text-base mt-5 text-center ml-36">
    WE Can&apos;t WAIT TO MEET YOU
  </h6>
  <h2 className="font-Montserrat font-bold text-[58px] text-center ml-36">
    Let&apos;s Talk
  </h2>
  <button className="mt-1 mb-16 ml-32 border-2 border-custom-blue-0 px-14 py-5 font-Montserrat font-bold text-sm text-sky-600 rounded-2xl hover:bg-sky-600 hover:text-white">
    Try it free now
  </button>
</div>

  
  </>
)
}