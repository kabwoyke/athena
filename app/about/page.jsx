import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Athena Link</span>
            </h2>
            <p class="text-gray-700">
                Athena Link provides fast, reliable, and affordable internet services 
                tailored to homes and businesses. Our dedicated team ensures seamless connectivity, 
                committed to bridging the digital divide and enhancing your online experience with exceptional support.
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default AboutUs