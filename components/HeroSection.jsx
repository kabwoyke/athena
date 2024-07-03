import hero_img from "@/assets/images/coon2.png"
import Image from "next/image"
import Link from "next/link"
const HeroSection = () => {
  return (
    <div>
    <section className=" dark:bg-gray-900 mt-24">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Athena Link Ltd</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Athena Link: Providing lightning-fast, reliable internet service to keep you seamlessly connected to what matters. </p>
  
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-blue-500 border-blue-300 rounded-lg hover:bg-blue-400 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contact Us
            </Link> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={hero_img} alt="mockup"/>
        </div>                
    </div>
</section>
</div>
  )
}

export default HeroSection