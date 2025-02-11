import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navbar";
import Hero from "./components/hero1";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Hero4 from "./components/hero4";



export default function Home() {
  return (
    <>
   
  <Navigation/>
  
  <div className="w-full relative">
  <Image 
    src={"/shop-1.jpg"} 
    alt="hero" 
    layout="responsive" 
    width={1440} 
    height={716} 
  />
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-28">
    <h5 className="font-Montserrat font-bold text-base sm:text-lg text-white mb-2">
      SUMMER 2020
    </h5>
    <h1 className="font-Montserrat text-[32px] sm:text-[48px] md:text-[58px] font-bold text-white leading-tight mb-4">
      NEW COLLECTION
    </h1>
    <h4 className="font-Montserrat text-[14px] sm:text-[16px] md:text-[20px] font-normal text-white mb-4 w-full">
      We knew how large objects will act,<br /> but things on a small scale.
    </h4>
    <div className="w-[180px] sm:w-[200px] md:w-[221px] h-[50px] sm:h-[56px] md:h-[62px] flex items-center justify-center bg-custom-green-0">
      <button className="px-4 py-2 sm:px-5 sm:py-3 bg-custom-green-0 text-white text-sm sm:text-base">
        SHOP NOW
      </button>
    </div>
  </div> 
</div>


<Hero/>

 <Hero2/>

<Hero3/>
  
 <Hero4/>




{/* Section 3 */}
<div className="w-full h-auto mt-10">
  {/* Main Header Section */}
  <div className="w-full flex justify-center">
    <div className="w-[691px] text-center">
      <h2 className="font-Montserrat font-bold text-sm text-blue-600">Practice Advice</h2>
      <h3 className="font-Montserrat font-bold text-[40px]">Featured Post</h3>
      <p className="font-Montserrat font-normal text-sm text-gray-500">
        Problems trying to solve the conflict between the two major realms of classical physics. Newton Mechanics
      </p>
    </div>
  </div>

  {/* Post Section with images and content */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
    {/* First Post */}
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/r1.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1<br></br> (L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
           </div>
</div>
            <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
            </div>
          
        
      </div>
    </div>

    {/* Second Post */}
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src="/r2.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1 <br></br>(L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
          </div>
        </div>
        <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
            </div>
      </div>
    </div>

    {/* Third Post */}
    <div className="w-full bg-white shadow-lg rounded-md overflow-hidden">
      <Image src="/r3.png" alt="road" width={200} height={200} className="w-full h-[200px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex space-x-4 text-xs text-gray-600">
          <h6 className="text-blue-600">Google</h6>
          <h6>Trending</h6>
          <h6>New</h6>
        </div>
        <h4 className="font-Montserrat font-normal text-[20px] mt-2 text-black">
          Loudest a la Madison #1<br></br> (L&apos;integral)
        </h4>
        <p className="font-Montserrat font-normal text-sm text-gray-600 mt-2">
  We focus on ergonomics and meeting<br/>
  <span>you where you work. It&apos;s only a</span>
  <br />
  keystroke away.
</p>
        
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Image src="/clock.png" alt="clock" width={16} height={16} />
            <p>22 April 2021</p>
          </div>
          <div className="flex items-center space-x-1">
            <Image src="/grass.png" alt="comments" width={16} height={16} />
            <p>10 Comments</p>
          </div>
        </div>
        <div className="font-Montserrat text-gray-600 font-bold text-sm mt-2 flex gap-4">
              <Link href="#"> Learn More</Link>
              <Image className="flex" src={"/icon1.png"} alt="icon" width={9} height={16}/>
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
