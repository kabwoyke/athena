import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What Our Customers Are Saying</h2>
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
    
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fast , Cheap and Reliable</h3>
                  <p className="my-4">"I've been using Athena Link for the past year, and I couldn't be happier with their service. The internet connection is incredibly fast and reliable, ensuring that I can work and stream without any interruptions. The customer support team is always prompt and helpful, going above and beyond to resolve any issues. Athena Link truly stands out for its exceptional service and dedication to customer satisfaction. Highly recommended!"</p>
                 
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://www.ku.ac.ke/schools/education/images/stories/photos/dr_mary_atieno.jpg" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Mary Otieno</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Customer</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Perfect Customer Service</h3>
                  <p className="my-4">"I can't say enough good things about the customer service at Athena Link. Their support team is available 24/7, and every time I've needed assistance, they've been prompt, efficient, and incredibly helpful. Whether I've reached out via phone, email, or live chat, the response has always been quick and thorough."</p>
                  
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-9 h-9 rounded-full" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1oZGwR.img?w=768&h=432&m=6&x=389&y=137&s=232&d=232" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>Joseph Maina</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Customer</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      </div>
 
</section>
    </div>
  )
}

export default Testimonial