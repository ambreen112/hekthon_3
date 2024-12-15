import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <header className="w-full h-auto">
    <nav className="bg-black w-full h-[46px] flex justify-between items-center">
      {/* Left Navigation */}
      <div className="flex items-center justify-between">
        <div className="ml-7">
          <button className="flex items-center w-[145px] h-[44px] text-white text-sm font-bold font-Montserrat">
            <Image className="align-middle" src="/Vector (6).png" alt="phone" width={16} height={16} />
            (225)555-0118
          </button>
        </div>
        <div className="mr-9">
          <button className="flex items-center w-[260px] h-[44px] text-white text-sm font-bold ml-8 font-Montserrat">
            <Image className="text-white" src="/Vector (7).png" alt="email" width={16} height={12} />
            michelle.rivera@example.com
          </button>
        </div>
      </div>
  
      {/* Center Text */}
      <div className="w-full h-24 text-white text-sm font-bold flex justify-center">
        <p className="flex p-9 font-Montserrat">Follow Us and get a chance to win 80% off</p>
      </div>
  
      {/* Follow Us Section */}
      <div className="w-full h-24 text-white inline-flex items-center justify-center">
        <h6 className="font-Montserrat font-bold text-sm p-3">Follow Us :</h6>
        <div className="inline-flex w-auto h-26 mb-1 items-center space-x-3">
          <Image src="/a.png" alt="a" width={26} height={26} />
          <Image src="/b.png" alt="b" width={26} height={26} />
          <Image src="/c.png" alt="c" width={26} height={26} />
          <Image src="/bird.png" alt="bird" width={26} height={26} />
        </div>
      </div>
    </nav>
  
    {/* Main Navigation */}
    <div className="w-full h-[58px] flex items-center bg-white">
      <p className="font-Montserrat font-bold text-2xl text-black ml-8">Bandage</p>
  
      <nav className="flex items-center justify-between w-full ml-8">
        {/* Left Navigation */}
        <div className="flex items-center space-x-6">
          <Link href="#" className="text-black text-sm font-Montserrat">Home</Link>
          <div className="flex items-center">
            <Link href="/shop" className="text-black  text-sm font-Montserrat flex items-center">
              Shop
              <Image src="/arrow.png" alt="arrow" width={5.71} height={28} priority />
              
            </Link>
          </div>
          <Link href={"/about"} className="text-black text-sm font-Montserrat">About</Link>
          <Link href={"/blog"} className="text-black text-sm font-Montserrat">Blog</Link>
          <Link href={"/contact"} className="text-black text-sm font-Montserrat">Contact</Link>
          <Link href={"/team"}className="text-black text-sm font-Montserrat">Pages</Link>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center space-x-8">
          <nav className="flex items-center">
            <a href="#" className="flex items-center text-white">
              <Image src="/but.png" alt="button" width={12} height={12} />
              <p className="text-custom-blue-0 font-bold text-sm font-Montserrat ml-2">Login/Register</p>
            </a>
          </nav>
  
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Image src="/li-1.png" alt="lens" width={46} height={46} />
            <Image src="/li-2.png" alt="lens" width={46} height={46} />
            <Image src="/li-3.png" alt="lens" width={46} height={46} />
          </div>
        </div>
      </nav>
    </div>
  
  
      <div className="w-full relative">
  <Image src={"/shop-1.jpg"} alt="hero" layout="responsive" width={1440} height={716} />
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

<div className="w-full relative bg-emerald-700 flex items-center mt-4">
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
          <p className="text-white font-Montserrat font-bold text-[24px]">$16.48</p>
        </div>
        <div className="ml-5 px-4 py-2 bg-custom-green-0 rounded-lg items-center text-white font-Montserrat font-normal text-sm">
          <button className="text-white">Add To Cart</button>
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
)
}
