import React from "react";
import Image from "next/image";

import Navigation1 from "../components/navbar1";
import Footer from "../components/footer";
import Blog1 from "../components/blog1";
import Blog2 from "../components/blog2";
import Blog3 from "../components/blog3";

export default function Blog(){
    return(
        <>
<Navigation1/>
{ /*home*/ }
    <div className=" w-full h-[92] bg bg-custom-light-gray ">
        <div className="w-[1033] h-44 flex items-start ">
            <p className="font-Montserrat font-bold text-sm ml-10 mt-9">Home</p>
        
            <Image className=" ml-4 text-custom-gray -rotate-90 mt-11" src="/arrow.png" alt="arrow" width={8.62} height={16}  />
            <h6 className="text-custom-gray font-Montserrat  mt-9 font-bold text-sm ml-4">Shop</h6>
        </div>

    </div>

    {/*sofa */ }

    <div className="w-full h-[600] bg-custom-light-gray   ">
        <div className="w-[1050] h-[598]  flex flex-row justify-center ">
        <div className="relative w-[506px] h-[450px] mb-28">
    <Image src={"/s1.jpg"} alt="sofa" width={506} height={450} />
    <Image src={"/s5.png"} alt="arrow" width={23.87} height={44.07} 
           className="absolute top-1/2 left-6 transform -translate-x-1/2 -translate-y-1/2" />
    <Image src={"/s4.png"} alt="arrow" width={23.87} height={44.07} 
           className="absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2" />

           <div className="w[219] h-[75] flex gap-5 mt-4">
           <Image src={"/s2.jpg"} alt="arrow" width={100} height={75}/> 
           <Image src={"/s3.jpg"} alt="arrow" width={100} height={75}/> 
           </div>
</div>

            <div className="w-[510] h-[471] ml-9 ">
                <h4 className="font-Montserrat font-normal text-[20px] ">Floating Phone</h4>
                <div className="w-[221] h-24 flex items-start  ">
                <Image className="object-contain" src={"/star1.png"} alt="star" width={18.34} height={18.35}/> 
                <Image  className="object-contain" src={"/star1.png"} alt="star" width={18.34} height={18.35}/> 
                <Image  className="object-contain"  src={"/star1.png"} alt="star" width={18.34} height={18.35}/> 
                <Image className="object-contain" src={"/star1.png"} alt="star" width={18.34} height={18.35}/> 
                <Image  className="object-contain" src={"/star2.png"} alt="star" width={18.34} height={18.35}/> 
                <h6 className="font-Montserrat font-bold text-sm text-gray-600 ml-7">10 Reviews</h6>  
                </div>

                <div className="w-[159] h-24 ">
                  <h5 className="font-Montserrat font-bold text-[24px]">$1,139.33</h5><br/>
                  <div className="flex">
                  <h6 className=" font-Montserrat font-bold text-sm text-gray-600">Availability :</h6>
                  <h6 className="  font-Montserrat font-bold text-sm text-custom-blue-0 ml-2">In Stock</h6>
                </div>
                <p className="font-Montserrat font-normal text-sm text-gray-800">Met minim Mollie non desert Alamo est sit cliquey dollar<br/>
                do met sent.RELIT official consequet door ENIM RELIT Mobile.<br/>
                Excitatio venial consequentsent nostrum met.</p>
                <hr className="text-gray-400 mt-4 w-[445]"/>
                <div className="flex gap-3 mt-6">
<Image  src={"/d1.png"} alt="star" width={30} height={30}/> 
<Image  src={"/d2.png"} alt="star" width={30} height={30}/> 
<Image  src={"/d3.png"} alt="star" width={30} height={30}/> 
<Image  src={"/d4.png"} alt="star" width={30} height={30}/> 
</div>
<div className="mt-5 flex gap-4">
<button className="mt-1  border-2 border-custom-blue-0 px-8 py-3 font-Montserrat font-bold text-sm text-white rounded-md bg-custom-blue-0">
    Select Option
  </button>
  <Image className="object-contain"  src={"/likebg.png"} alt="heart" width={40} height={40}/> 
  <Image className="object-contain"  src={"/basket.png"} alt="basket" width={40} height={40}/> 
  <Image className="object-contain"  src={"/more.png"} alt="eye" width={40} height={40}/> 
</div>
    </div>
</div>
 </div>

</div> 

<Blog1/>
<Blog2/>
 <Blog3/>


       
        <Footer/>
        </>
        
        )
        }
    