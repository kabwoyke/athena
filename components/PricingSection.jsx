import PricingCard from '@/components/PricingCard'

const PricingSection = () => {
  return (
    <div >
        <div className="flex flex-col m-auto text-center w-full my-8">
   
   <div className="mx-auto">
       <h2
           className="font-heading  mb-4 text-center bg-blue-400 text-white text-2xl px-4 py-2 rounded-lg md:w-96 md:mx-auto  font-semibold tracking-widest uppercase title-font">
           Our Packages
       </h2>
   </div>

   <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">We offer the most affordable packages , with <b>ksh 2500</b>  one time installation fee</h1>
  
   <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
       We offer packages for as low as 1500 monthly
   </p>

   <div className="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
       <button className="py-1 px-4 bg-orange-500 text-white focus:outline-none">Monthly</button>
   </div>

</div>

<div className="flex flex-wrap justify-center">
<PricingCard btn_properties={{ background:'bg-blue-400' }} mbps={'4'} subtitle={"STANDARD"} isPopular={true} price={1500}/>
<PricingCard btn_properties={{ background:'bg-blue-600' }} mbps={'10'} subtitle={"PREMIUM"} price={2500} />
</div>
</div>
  )
}

export default PricingSection