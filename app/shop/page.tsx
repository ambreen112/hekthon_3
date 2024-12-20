import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Shop(){
    return(
    
      <>
 <nav className="bg-custom-dark-green-0 w-full h-[46px] flex justify-between items-center">
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
          <Link href="/" className="text-black text-sm font-Montserrat">Home</Link>
          <div className="flex items-center">
            <Link href="#" className="text-black  text-sm font-Montserrat flex items-center">
              Shop
              <Image src="/arrow.png" alt="arrow" width={5.71} height={28} priority />
            </Link>
          </div>
          <Link href={"/about"} className="text-black text-sm font-Montserrat">About</Link>
          <Link href={"/blog"} className="text-black text-sm font-Montserrat">Blog</Link>
          <Link href={"/contact"} className="text-black text-sm font-Montserrat">Contact</Link>
          <Link href="#" className="text-black text-sm font-Montserrat">Pages</Link>
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

    {/* shop */}
    <div className="w-full h-[92px] bg-custom-light-gray">
  <div className="w-[1049px] h-[42px] flex justify-center ml-11 ">
    <div className="w-[510px] h-32 flex justify-between">
      <h2 className="font-Montserrat font-bold text-[24px]">Shop</h2>
    </div>
    <div className="w-[509px] flex items-center  gap-2">
      <p className="font-Montserrat font-bold text-sm ml-[630px]">Home</p>
      <Image className="object-contain " src={"/arrow1.png"} alt="arrow" width={8.62} height={16} />
      <h6 className="font-Montserrat font-bold text-sm text-gray-400">Shop</h6>
    </div>
  </div>
</div>

{/* list of pic */}
<div className="w-full h-[271px] bg-custom-light-gray">
  <div className="w-[1088px] h-[271px]  ml-52">
    <div className="w-[1088] h-[223px] flex justify-center items-center gap-5 ">
      <div className="w-[205px] h-[223px] relative ">
        <Image src={"/f1.png"} alt="girl" width={205} height={223}/>
        <div className=" absolute bottom-20 left-14 text-white">
        <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
        <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
      </div>
      </div>
      <div className="w-[205px] h-[223px] relative">
        <Image src={"/g2.png"} alt="girl" width={205} height={223}/>
        <div className=" absolute bottom-20 left-14 text-white">
        <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
        <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
      </div>
      </div>
      <div className="w-[205px] h-[223px] relative">
        <Image src={"/g3.png"} alt="girl" width={205} height={223}/>
        <div className=" absolute bottom-20 left-14 text-white">
        <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
        <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
      </div>
      </div>
      <div className="w-[205px] h-[223px] relative">
        <Image src={"/g4.png"} alt="girl" width={205} height={223}/>
        <div className=" absolute bottom-20 left-14 text-white">
        <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
        <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
      </div>
      </div>
      <div className="w-[205px] h-[223px] relative">
        <Image src={"/g5.png"} alt="girl" width={205} height={223}/>
        <div className=" absolute bottom-20 left-14 text-white">
        <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
        <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
      </div>
      </div>
    </div>
  </div>


</div>

{/* view */}

<div className="w-[1050px] h-[98px] flex items-center ml-48">
  <div className="w-[1049px] h-[50px] flex justify-around ">
 <div className="w-[168px] h-24 ">
  <p className="font-Montserrat font-bold mt-2 text-sm text-gray-600">Showing all 12 results</p>
 </div>
 <div className="w-[177px] h-[46px] flex items-center">
 <p className="font-Montserrat font-bold text-sm text-gray-600">Views</p>
 <div className="w-[53px] h-24 flex">
  <Image className="object-contain" src={"/btn1.png"} alt="btn" width={46} height={46}/>
  <Image className="object-contain" src={"/btn2.png"} alt="btn" width={46} height={46}/>

 </div>
 </div>

 <div className="w-[252px] h-[50px] flex gap-6 ">
  <div className="w-[141px] h-[50px] relative  ">
    <button className=" font-Roboto font-normal text-[15px] text-gray-600 px-10 py-3 border border-gray-400  rounded-md bg-custom-light-gray">Popularity</button>
    <Image className ="object-contain ml-2 absolute bottom-5 left-28 rotate-90 text-gray-900 mt-1"src={"/arrow1.png"} alt="arrow" width={8} height={8}/>
  </div>
  <div className="w-[141px] h-[50px]  ">
    <button className=" font-Montserrat font-normal text-[15px] text-white px-10 py-3 border border-gray-400  rounded-md bg-custom-blue-0">Filter</button>
 </div>
  </div>
</div>
</div>

{/* langage */}
  <div className=" h-[175px] w-full bg-custom-light-gray flex justify-center gap-20 items-center">
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

<div className="w-full h-[74px] mt-6 bg-custom-light-gray" >
  <div className="w-[1050px] h-[74px] flex justify-center">
    <div className="w-[600px] h-[74px]">
      <p className="font-Montserrat font-bold text-sm text-gray-600 mt-6">Made With Love By Finland All Right Reserved</p>

    </div>

  </div>
</div>

<div className="w-full h-[1778px] mt-10 ">
   <div className="w-[239] h-[615]  flex justify-center gap-9 ">
  
  <div  className="flex flex-col justify-center " >
              <Image src={"/boy1.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>
              </div>

              <div  className="flex flex-col justify-center " >
              <Image src={"/boy2.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>

</div>
<div  className="flex flex-col justify-center " >
              <Image src={"/boy3.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>

          <div  className="flex flex-col justify-center " >
              <Image src={"/boy4.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>
      </div>




       <div className="w-[239] h-[615]  flex justify-center gap-9  mt-14">
  
  <div  className="flex flex-col justify-center " >
              <Image src={"/boy5.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>
              </div>

              <div  className="flex flex-col justify-center " >
              <Image src={"/boy6.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>

</div>
<div  className="flex flex-col justify-center " >
              <Image src={"/boy7.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>

          <div  className="flex flex-col justify-center " >
              <Image src={"/boy8.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>
      </div>   



        <div className="w-[239] h-[615]  flex justify-center gap-9  mt-14">
  
  <div  className="flex flex-col justify-center " >
              <Image src={"/boy9.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>
              </div>

              <div  className="flex flex-col justify-center " >
              <Image src={"/boy10.png"} alt="style" width={239} height={300}/>
            
           
              <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
              <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
              <div className="w-[108] h-[34] flex mt-4">
                <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
                <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
  </div>
              
              
        <div>
                <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
              </div>

</div>
<div  className="flex flex-col justify-center " >
              <Image src={"/boy11.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>

          <div  className="flex flex-col justify-center " >
              <Image src={"/boy12.png"} alt="style" width={239} height={300}/>
            
           
            <h5 className="font-Montserrat font-bold  text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="w-[108] h-[34] flex mt-4">
              <h5  className="font-Montserrat font-bold  text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold  text-base text-green-600">$6.48</h5>
</div>
            
            
      <div>
              <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16}/>
            
          </div>
          </div>
      </div>    



 
<div className=" w-[313px] h-[74px]  flex justify-center items-center  mt-10 ">
  <ul className="font-Montserrat text-sm font-bold text-custom-gray flex justify-center   ml-[1150px]   ">
    <li className="  bg-white border border-gray-300 rounded-1-md hover:bg-gray-50 px-2 py-4"> First</li>
    <li className="text-custom-light-blue-1-0  bg-white border border-gray-300 rounded-sm-md hover:bg-gray-50 px-2 py-4">1</li>
  
    <li className="bg-custom-light-blue-1-0 text-white  bg-white border border-gray-300 rounded-sm-md hover:bg-gray-50 px-2 py-4">2</li>
    <li className=" text-custom-light-blue-1-0  bg-white border border-gray-300 rounded-sm-md hover:bg-gray-50 px-2 py-4">3</li>
    <li className="text-custom-light-blue-1-0  bg-white border border-gray-300 rounded-1-md hover:bg-gray-50 px-2 py-4">Next</li>
  </ul>

</div>
</div>
      
    </>
   
        
    )
}