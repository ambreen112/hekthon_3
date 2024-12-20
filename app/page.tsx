import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navbar";



export default function Home() {
  return (
    <>
    <header className="w-full h-auto">
  <Navigation/>
  
      <div className="w-full relative">
  <Image  src={"/shop-1.jpg"} alt="hero" layout="responsive" width={1440} height={716} />
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 ml-28">
    <h5 className="font-Montserrat font-bold text-base text-white mb-2">
      SUMMER 2020
    </h5>
    <h1 className="font-Montserrat text-[58px] font-bold text-white">
      NEW COLLECTION
    </h1>
    <h4 className="font-Montserrat text-[20px] font-normal text-white mb-4 w-full">
      We knew how large objects will act,<br></br> but things on a small scale.
    </h4>
    <div className="w-[221px] h-[62px] flex items-center justify-center bg-custom-green-0">
      <button className="px-4 py-1 bg-custom-green-0 text-white">
        SHOP NOW
      </button>
      </div>
  </div> 
</div>

<div className="w-[1440] h-auto  flex justify-center items-center ">
  <div className="w-[1050] h-770 flex flex-col justify-center items-center p-14">
    <h2 className="font-Montserrat font-bold text-[24] justify-center">EDITOR&apos;S PICK</h2>
    <p className="font-Montserrat font-normal text-sm">Problems trying to resolve the conflict between </p>

  
  <div className="w-[1050] h-[500] flex gap-9 mt-14">
    <div className="relative">
      <Image src={"/filter-1.png"} alt="man"width={509} height={500}/>
      <h2 className="absolute bottom-9 left-6  py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white ">
      MEN
    </h2>
    </div>
    <div className="relative">
      <Image src={"/filter-2.png"} alt="man"width={239} height={500}/>
      <h2 className="absolute bottom-9 left-6  py-2 px-11  font-Montserrat font-bold text-[16px] bg-white">WOMEN</h2>
    </div>
   
    <div className=" gap-9 flex flex-col">
    <div className="relative">
      <Image src={"/filter-3.png"} alt="man"width={239} height={242}/>
      <h2 className="absolute bottom-9 left-6  py-2 px-11  font-Montserrat font-bold text-[16px] bg-white">ACCESSORIES</h2>
    </div>
    <div className="relative">
      <Image src={"/filter-4.png"} alt="man"width={239} height={242}/>
      <h2 className="absolute bottom-9 left-6  py-2 px-11  font-Montserrat font-bold text-[16px] bg-white">KIDS</h2>
    </div>
    </div>
  </div>


  <div className="w-[1440] h-auto mt-24">
    <div className="w-[1124] h-[1652] flex justify-center ">
      <div className="w-[691] h-[102]">
        <h2 className="font-Montserrat font-normal text-[20px] items-center justify-center ml-14 text-gray-500">Featured Product</h2>
        <h3 className="font-Montserrat font-bold text-[24px] " >BESTSELLER PRODUCT</h3>
        <p className="font-Montserrat font-normal text-sm mr-20 text-gray-500">Problems trying to solve the conflict between</p>
</div>
      </div>

      <div className="w-[1049] h-[615]  flex justify-center items-center    mt-10">
        <div className="w-[239] h-[615]  flex gap-9   ">
          <div  className="flex flex-col " >
            <Image src={"/her1.png"} alt="style" width={239} height={427}/>
          
         
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            </div>

            <div>
            <Image src={"/her2.png"} alt="style" width={239} height={427}/>
          
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
              <Image  className="mt-4"src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            </div>

            <div>
            <Image src={"/her3.png"} alt="style" width={239} height={427}/>
          
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500 ">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>

            </div>
          
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
            </div>
        <div>
            <Image src={"/her4.png"} alt="style" width={239} height={427}/>
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>

            </div>
            
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
</div>
</div>
</div>
<div className="w-[1049] h-[615]  flex justify-center items-center mt-32">
        <div className="w-[239] h-[615]  flex gap-9 ">

<div  className="flex flex-col  " >
            <Image src={"/her5.png"} alt="style" width={239} height={427}/>
          
         
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            </div>

            <div>
            <Image src={"/her6.png"} alt="style" width={239} height={427}/>
          
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
              <Image  className="mt-4"src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            </div>

            <div>
            <Image src={"/her7.png"} alt="style" width={239} height={427}/>
          
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500 ">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>

            </div>
          
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
            </div>
        <div>
            <Image src={"/her8.png"} alt="style" width={239} height={427}/>
          
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>

            </div>
            
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            


</div>
</div>
</div>

<div className="w-full relative bg-custom-dark-green-0 flex items-center mt-4">
  {/* Content on the left */}
  <div className="flex flex-col justify-center items-start px-4 ml-28">
    <h5 className="font-Montserrat font-normal text-[20px] text-white mb-2">
      SUMMER 2020
    </h5>
    <h1 className="font-Montserrat text-[58px] font-bold text-white">
      Vita Classic<br />Product
    </h1>
    <h4 className="font-Montserrat text-sm font-normal text-white mb-4 w-full">
      We knew how large objects will act, We know<br />how our object will act we know.
    </h4>
    <div className="w-[221px] h-[62px] flex items-center justify-center">
      <div className="flex gap-3">
        <div>
          <p className="text-white font-Montserrat font-bold text-[24px] mt-2">$16.48</p>
        </div>
        <div className="ml-5  bg-custom-green-0 rounded-sm mt-2 w-[184px] h-[52px]  text-white font-Montserrat font-bold text-sm">
          <button className="text-white ml-12 mt-3 ">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
  
  {/* Image on the right */}
  <div className="ml-auto">
    <Image src="/hero9.png" alt="hero" width={350} height={100} />
  </div>
</div>

{/* Section 2 */}
<div className="w-full h-auto flex flex-row justify-center items-center mt-10">
  <Image src={"/hero01.png"} alt="women" width={500} height={234} />
  <div className="flex flex-col justify-center items-start px-8 ml-8">
    <h5 className="font-Montserrat font-bold text-base text-gray-600 mb-2">SUMMER 2020</h5>
    <h1 className="font-Montserrat font-bold text-[40px] text-black mb-4">
      Part Of The Neural<br />Universe
    </h1>
    <h4 className="font-Montserrat font-normal text-sm text-[20px] text-gray-600 mb-6">
      We know how large objects will act,<br /> but things on a small scale.
    </h4>
    <div className="flex m-4 space-x-4">
      <button className="bg-custom-green-0 text-white font-Montserrat px-6 py-2 rounded-md">
        BUY NOW
      </button>
      <button className="bg-transparent text-black font-Montserrat px-6 py-2 border border-green-600 rounded-md">
        READ MORE
      </button>
    </div>
  </div>
</div>

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
</div>
</div>
</div>
</header>
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
