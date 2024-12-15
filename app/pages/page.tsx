import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Page(){
    return(
      
      <div className="w-full h-[3634px]">
      <div className="w-full h-[1162px] bg-custom-light-gray">
        <div className="w-[1050px] h-[1600px]">
          <div className="w-full h-[384px]">
            {/* Navigation Section */}
<div className="flex justify-around p-9 w-full h-[91px] ml-56 bg-white">
<p className="font-Montserrat font-bold text-[24px]">Bandage</p>
<nav className="font-Montserrat text-sm font-bold text-gray-600 mb-3 ">
  <Link href="#" className="mr-4">Home</Link>
  <Link href="#" className="mr-4">Product</Link>
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
          <div className="w-[870px] h-[280px] bg-white flex justify-center items-center ml-72">
      <div className="w-[427px] h-[180px]  ">
        <h5 className="font-Montserrat font-bold text-base text-gray-600 ml-44">PRICING</h5>
        <h2 className="font-Montserrat font-bold text-[58px]">Simple<span className="ml-3">Pricing</span> </h2>
        <div className="w-[134px] h-44 flex justify-center items-center ml-32 gap-3  ">
          <p className="font-Montserrat font-bold text-sm mb-32 ">Home</p>
          <Image className="object-contain mb-32" src={"/arrow1.png"} alt="arrow" width={9} height={16}/>
          <p className="font-Montserrat font-bold text-sm mb-32" >Pricing</p>
        </div>

      </div>
      </div>      

      </div>
      <div className="w-[633px] h-[100px] flex justify-center items-center ml-96">
        <div className="w-[625px] h-[100px] text-center">
          <h2 className="font-Montserrat font-bold text-[40px]">Pricing</h2>
          <p className="font-Montserrat font-normal text-sm text-gray-600">Problem trying to resolve the conflict between<br/>the two major realmsof classNameical physics: Newton mechanics</p>

        </div>

      </div>

      <div className=" w-[331px] h-44 ">
        <div className="w-[186px] h-28 flex gap-2  justify-center items-center ml-[590px]">
          <p className="font-Montserrat font-bold text-base ">Monthly</p>
          <div 
className= "  border border-blue-500 rounded-full  flex justify-center items-center  "
>
<Image 
className="object-contain rounded-full mr-2 px-4 py-2  " 
src="/Ellipse.png" 
alt="ellipse" 
width={79} 
height={79} 
/>
</div>
          <p className="font-Montserrat font-bold text-base">Yearly</p>

          <div className="w-[109px] h-12 border rounded-full bg-custom-light-blue flex items-center justify-center">
            <button className="text-custom-light-blue-1-0 px-3 py-9 font-Montserrat font-bold text-sm">Save<span>25%</span></button>
          </div>
        </div>
      {/* card */}
      <div className="w-full h-[704px] grid grid-cols-3  justify-items-center ml-96 mt-8 ">


<div className="w-[327px] h-[664px] mt-24 ">
<h3 className="font-Montserrat font-bold text-[24px] flex justify-center mb-8">FREE</h3>
<h5 className="font-Montserrat font-bold text-base text-gray-600 text-center">Organize across all<br/> apps by hand</h5>
<div className="w-[114px] h-56 flex flex-col items-center justify-center">
  <h2 className="font-Montserrat font-bold text-[40px] text-custom-blue-0 mt-56 ml-10">0</h2>
  <div className="w-[76px] h-56 ml-60 mb-60">
    <h3 className="font-Montserrat font-bold text-[24px] text-custom-blue-0">$</h3>
    <h5 className="font-Montserrat font-bold text-sm text-custom-sky">Per Month</h5>
  </div>
</div>

<div className="w-[247px] h-32 flex items-center">
  
    <Image className="object-contain" src={"/tick.png"} alt="tick" width={32} height={32} />

  <h6 className="font-Montserrat font-bold text-sm">Unlimited product update</h6>
</div>
</div>


<div className="w-[329px] h-[704px]  ml-96 bg-custom-voilet ">
<h3 className="font-Montserrat font-bold text-[24px] text-white mt-24 flex justify-center">STANDARD</h3>
<h5 className="font-Montserrat font-bold text-base text-white text-center mt-10 ">Organize across all<br/> apps by hand</h5>
<div className="w-[114px] h-56 flex flex-col items-center justify-center">
  <h2 className="font-Montserrat font-bold text-[40px] text-custom-blue-0 mt-56 ml-10">9.99</h2>
  <div className="w-[76px] h-56 ml-60 mb-60">
    <h3 className="font-Montserrat font-bold text-[24px] text-custom-blue-0">$</h3>
    <h5 className="font-Montserrat font-bold text-sm text-custom-sky">Per Month</h5>
  </div>
</div>
<div className="w-[247px] h-32 flex items-center">
  <Image className="object-contain" src={"/tick.png"} alt="tick" width={32} height={32} />
  <h6 className="font-Montserrat font-bold text-sm text-white">Unlimited product update</h6>
</div>
<div className="w-[247px] h-32 flex items-center">
  <Image className="object-contain" src={"/tick.png"} alt="tick" width={32} height={32} />
  <h6 className="font-Montserrat font-bold text-sm text-white">Access to premium features</h6>
</div>
</div>


<div className="w-[329px] h-[704px]  ml-[900px] mt-24  ">
<h3 className="font-Montserrat font-bold text-[24px]  flex justify-center">PREMIUM</h3>
<h5 className="font-Montserrat font-bold text-base text-gray-600 text-center mt-10">Organize across all<br/> apps by hand</h5>
<div className="w-[114px] h-56 flex flex-col items-center justify-center ">
  <h2 className="font-Montserrat font-bold text-[40px] text-custom-blue-0 mt-40 ml-6 ">19.99</h2>
  <div className="w-[76px] h-56 ml-60  mb-44 ">
    <h3 className="font-Montserrat font-bold text-[24px] text-custom-blue-0">$</h3>
    <h5 className="font-Montserrat font-bold text-sm text-custom-sky">Per Month</h5>
  </div>
</div>
<div className="w-[247px] h-32 flex items-center">
  <Image className="object-contain" src={"/tick.png"} alt="tick" width={32} height={32} />
  <h6 className="font-Montserrat font-bold text-sm ">Unlimited product update</h6>
</div>
<div className="w-[247px] h-32  items-center flex">
  <Image className="object-contain" src={"/tick.png"} alt="tick" width={32} height={32} />
  <h6 className="font-Montserrat font-bold text-sm ">Priority support</h6>
</div>
</div>
</div>
  </div>


      
      </div>
    </div>
   

<div className=" h-[365px] w-full bg-custom-light-gray flex flex-col justify-center  items-center ">

<h2 className="flex items-center justify-center font-Montserrat font-bold text-[20px] mt-52">Trusted By Over 4000 Big Companies</h2>
<div className=" w-[1054px] h-[175px] flex justify-center gap-16 items-center mt-16">
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
  </div>

  <div className=" w-full h-[1037px] container mx-auto px-4 py-8">
    <div className="W-[1056PX] H-[1037PX]">
      <div className="w-[1050px] h-[210px] flex justify-center items-center ml-24 mt-28">
        <div className= "w-[651px] h-[210px] text-center  ">
    <h1 className="text-[40px] font-bold font-Montserrat mb-6 ml-56">Pricing FAQs</h1>
    <p className="text-[20px] font-Montserrat font-normal text-gray-600 mb-6 text-center ml-32">Problems trying to resolve the conflict between the two major realms of classNameical physics</p>
</div>
</div>
    <div className=" w-[1056px] h-[537] grid grid-cols-2 gap-4 ml-60 mt-32">
        <div className=" p-6">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
        <div className=" p-6">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
        <div className=" p-6">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>

        <div className=" p-6 ">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
       
        <div className=" p-6">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>

        <div className=" p-6">
          <div className="flex text">
          <Image className="object-contain mb-4 text-blue-filter" src={"/arrowb.png"} alt="arrow" width={8.62} height={16}/>
            <h5 className="text-base font-Montserrat font-bold mb-4 ml-2">the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="font-Montserrat font-normal text-sm text-gray-600 ml-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
    </div>

    <p className="text-center  font-Montserrat font-normal text-[20px] text-gray-600 mt-20">Haven&apos;t got your answer? Contact our support</p>
</div>
</div>
<div className="w-full h-[582px]">
<div className="w-[1050px] h-[602] flex justify-center items-start ml-60  mt-40">
<div className="w-[607px] h-[282px] ">
  <h2 className="font-Montserrat font-bold text-[40px]">Start your 14 days free trial</h2>
  <h6 className="font-Montserrat font-normal text-sm text-gray-600 text-center">Met minim mollie non desert Alamo est sit cliquey dolor<br/><span>do met sent.RELIT official consequent</span></h6>
  <div className="w-[186px] h-52  flex items-center justify-center ml-48">
<button className="px-8 py-3 text-white bg-custom-blue-0 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
Try it free now
</button>
</div>

<div className="w-[242px] h-[50px] flex justify-center items-center ml-40 gap-6">
<Image src={"/t1.png"} alt="twitter" width={30} height={24}/>
<Image src={"/flogo.png"} alt="twitter" width={30} height={30}/>
<Image src={"/sl.png"} alt="twitter" width={29.98} height={29.98}/>
<Image src={"/fln.png"} alt="twitter" width={29.98} height={29.98}/>


</div>

</div>

</div>

</div>
</div>  

 
  
)
}