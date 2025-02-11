import Image from "next/image";


export default function Blog3(){
    return(
        <>
      {/* Companies Logos */}
<div className="w-full bg-custom-light-gray py-8">
  <div className="w-full max-w-screen-xl mx-auto flex justify-center gap-8 sm:gap-12 md:gap-16 items-center flex-wrap">
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
</>
    )
}