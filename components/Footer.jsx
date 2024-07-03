
const Footer = () => {
    const current_year = new Date().getFullYear()
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

        
<footer className="bg-blue-800 text-white py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h4 className="text-lg font-bold mb-4">Athena Link</h4>
                <p>Athena Link - Think of better , affordable and quality internet connectivity think of Athena Link</p>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">Contact US</a></li>
                    <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">athenalink@gmail.com.com</a></li>
                    <li><a href="#" className="hover:text-gray-300">07589432391</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook fa-lg"></i></a>
                    <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
            </div>
        </div>
        <div className="text-center mt-8">
            <p>© {current_year} Athena Link. All rights reserved.</p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer