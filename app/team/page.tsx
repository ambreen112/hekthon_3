import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Fashion(){
    return(
    <>
     {/* Navigation Section */}
  <div className="flex justify-around p-9 w-full h-[91px]">
    <p className="font-Montserrat font-bold text-[24px]">Bandage</p>
    <nav className="font-Montserrat text-sm font-bold text-gray-600 mb-3">
      <Link href="/" className="mr-4">Home</Link>
      <Link href="#" className="mr-4">Product</Link>
      <Link href="/pages" className="mr-4">Pricing</Link>
      <Link href="/contact" className="mr-4">Contact</Link>
    </nav>
    <div className="font-Montserrat font-bold text-sm text-sky-500">
      <Link href="#">Login</Link>
    </div>
    <div className="bg-sky-500 px-6 py-6 flex rounded-md font-Montserrat font-bold text-white mb-4 items-center justify-center">
      <button>Become a member</button>
      <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
    </div>
  </div>

   <div className="w-[870px] h-[280px] bg-white flex justify-center items-center ml-44">
        <div className="w-[427px] h-[180px] text-center  ">
          <h5 className="font-Montserrat font-bold text-base text-gray-600 ml-64">WHAT WE DO</h5>
          <h2 className="font-Montserrat font-bold text-[58px] ">Innovation<span className="ml-4">tailored</span><span className="ml-4">for</span><span className="ml-4">you</span></h2>

          <div className="w-[134px] h-44 flex justify-center items-center ml-72 gap-3  ">
            <p className="font-Montserrat font-bold text-sm mb-32 ">Home</p>
            <Image className="object-contain mb-32" src={"/arrow1.png"} alt="arrow" width={9} height={16}/>
            <p className="font-Montserrat font-bold text-sm mb-32" >Pricing</p>
          </div>
  
        </div>
        </div>      
  
        
       <div className="w-full h-[530px] flex justify-center">
        <div>
            <Image src={"/fac1.png"} alt="girl" width={700} height={530}/>
        </div>
        <div className="grid grid-cols-2">
        <Image src={"/fac2.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac3.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac4.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac5.png"} alt="girl" width={361} height={260}/>
        </div>
       </div>


       <div className="w-full h-[1759px]">
        <div className="w-[1050px] h-[1759px] ">
            <div className="w-[607px] h-[50px] flex justify-center items-center mt-16  ml-96">
                <h2 className="font-Montserrat font-bold text-[40px]  ">Meet Our Team</h2>

            </div>
            <div className="w-[1034px] h-[383px] mt-20 flex justify-around items-center ml-52 ">
                <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg1.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>
           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg2.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base text-center">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>
           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg3.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base text-center">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>
            </div>

            <div className="w-[1034px] h-[383px] mt-20 flex justify-around items-center ml-52">
                <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg4.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>

           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg5.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>

           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg6.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>
        </div>

        <div className="w-[1034px] h-[383px] mt-20 flex justify-around items-center ml-52">
                <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg7.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>

           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg8.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>

           <div className="w-[316px] h-[383px] mt-5">
                <Image src={"/fg9.jpg"} alt="girl" width={316} height={231}/>
                <div className="w-[316px] h-[152px] text-center ">
                    <h5 className="font-Montserrat font-bold text-base">Username</h5>
                    <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
                    <div className="w-[112px] h-24 flex justify-center items-center ml-24 gap-3">
                    <Image className="object-contain"src={"/i1.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i2.png"} alt="girl" width={24} height={19.76}/>
                    <Image className="object-contain" src={"/i3.png"} alt="girl" width={24} height={19.76}/>       

                    </div>

                </div>
           </div>
           </div>

           <div className="w-full h-[582px]">
           <div className="w-[1050px] h-[602] flex justify-center items-start ml-60  mt-2">
           <div className="w-[607px] h-[282px] ">
             <h2 className="font-Montserrat font-bold text-[40px]">Start your 14 days free trial</h2>
             <h6 className="font-Montserrat font-normal text-sm text-gray-600 text-center">Met minim mollie non desert Alamo est sit cliquey dolor<br/><span>do met sent.RELIT official consequent</span></h6>
             <div className="w-[186px] h-52  flex items-center justify-center ml-48 ">
           <button className="px-8 py-3 text-white bg-custom-blue-0 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-20">
           Try it free now
           </button>
           </div>
           
           <div className="w-[242px] h-[50px] flex justify-center items-center ml-40 gap-6 ">
           <Image className="mb-32" src={"/t1.png"} alt="twitter" width={30} height={24}/>
           <Image className="mb-32" src={"/flogo.png"} alt="twitter" width={30} height={30}/>
           <Image className="mb-32" src={"/sl.png"} alt="twitter" width={29.98} height={29.98}/>
           <Image className="mb-32" src={"/fln.png"} alt="twitter" width={29.98} height={29.98}/>
           
           
           </div>
           
           </div>
          </div>
          </div> 
           
         </div>
       </div>
  </>
    )
}