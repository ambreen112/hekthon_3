import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog(){
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
            <Link href="/team" className="text-black  text-sm font-Montserrat flex items-center">
              Shop
              <Image src="/arrow.png" alt="arrow" width={5.71} height={28} priority />
            </Link>
          </div>
          <Link href={"/about"} className="text-black text-sm font-Montserrat">About</Link>
          <Link href={"/blog"} className="text-black text-sm font-Montserrat">Blog</Link>
          <Link href={"/contact"} className="text-black text-sm font-Montserrat">Contact</Link>
          <Link href={"/team"} className="text-black text-sm font-Montserrat">Pages</Link>
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

{/*second sectio */}
<div className="w-full h-[572]">
  <nav className="w-full h-[91] flex justify-center items-center ">
    <ul className="flex gap-14 font-Montserrat font-bold text-sm text-gray-600 mt-16">
      <li>Descriptin</li>
      <li>Additional Information</li>
      <li>Reviews (0)</li>
    </ul>

  </nav>
  <hr className="text-gray-600 w-[1049] mt-4" />
  
  <div className="w-full h-[499px]">
    <div className="w-[1056px] h-[499px]  ">
      <div className="w-[1056px] h-[427px] flex justify-between items-center ml-64">
      <div className="relative w-[332px] h-[392px] ">
  <Image className="object-contain" src="/unplash.png" alt="unplash" width={325} height={382} />
  <Image className="absolute top-0 left-0 object-contain" src="/chair.png" alt="chair" width={316} height={372} />
</div>
        <div className="w-[332px] h-[427px]">
          <h5 className="font-Montserrat font-bold text-[24px]">the quick fox jumps over</h5>
        <h6 className="font-Montserrat font-normal text-sm text-gray-600 ">Met minim Mollie non desert Alamo est sit<br/> cliquey dollar do met sent.RELIT official<br/>consequet door ENIM RELIT Mobile.<br/>
        Excitatio venial consequentsent nostrum<br/>met.</h6><br/>

        <h6 className="font-Montserrat font-normal text-sm text-gray-600">Met minim Mollie non desert Alamo est sit<br/> cliquey dollar do met sent.RELIT official<br/>consequet door ENIM RELIT Mobile.<br/>
        Excitatio venial consequentsent nostrum<br/>met.</h6><br/>

        <h6 className="font-Montserrat font-normal text-sm text-gray-600">Met minim Mollie non desert Alamo est sit<br/> cliquey dollar do met sent.RELIT official<br/>consequet door ENIM RELIT Mobile.<br/>
        Excitatio venial consequentsent nostrum<br/>met.</h6><br/>
        </div>


        <div className="w-[332px] h-[367px] mb-14 " >
       <div className="[332px] h-[188px] ">
       <h5 className="font-Montserrat font-bold text-[24px]">the quick fox jumps over</h5>
       <div className="flex gap-4 ">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>

       <div className="flex gap-4 mt-2  ">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>

       <div className="flex gap-4 mt-2 ">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>

       <div className="flex gap-4 mt-2">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>
       </div>
  

       <div className="w-[332px] h-[179px] " >
       <div className="[332px] h-[188px] mt-2 ">
       <h5 className="font-Montserrat font-bold text-[24px]">the quick fox jumps over</h5>
       <div className="flex gap-4 mt-2">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>
       <div className="flex gap-4 mt-2">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>
       <div className="flex gap-4 mt-2 ">
       <Image src={"/arrow1.png"} alt="arrow" width={8.62} height={16}/>
       <h5 className="  font-Montserrat font-normal text-sm text-gray-600 ">the quick fox jump over the lady dog</h5>
       </div>
       </div>
       </div>
</div>


      </div>

    </div>


  </div>

</div>

{/*picture section*/}
<div className="w-1440px] h[1086px] bg-custom-light-gray">
  <div className="w-[1124px] h-[1086]">
    <div className="w-[1040px] h-[32px] ml-60 p-12">
      <h3 className="font-Montserrat font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
     
     <Image className="mt-14" src={"/Rectangle.png"} alt="a" width={1042} height={2}/>
    </div>


    {/*bfksdhf*/}
    <div className="w-full flex justify-around ml-60 gap-4 mt-12">
  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery1.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery2.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery3.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery4.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>
</div>


{/*fdsfd*/}

<div className="w-full flex justify-around ml-60 gap-4 mt-2">
  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery5.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery6.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery7.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>

  <div className="w-[239px] h-[442px] bg-white mt-16">
    <Image src="/crokery8.png" alt="crocery" width={239} height={280} />
    <div className="w-[239px] h-[162px]">
      <h5 className="font-Montserrat font-bold text-base mt-4">Graphic Design</h5>
      <h6 className="font-Montserrat font-bold text-sm text-gray-600 mt-2">English Department</h6>
      <div className="w-[108px] h-[34px] flex gap-2 mt-2">
        <h5 className="font-Montserrat font-bold text-base text-gray-400">$16.48</h5>
        <h5 className="font-Montserrat font-bold text-base text-custom-teal">$6.48</h5>
      </div>
    </div>
  </div>
</div>
</div>
</div>
 {/* Companies Logos */}
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
</>
)
}