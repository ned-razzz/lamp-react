import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">용인 함박 교회</h1>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-gray-600 hover:text-blue-800">About</a>
            <a href="#sermons" className="text-gray-600 hover:text-blue-800">Sermons</a>
            <a href="#events" className="text-gray-600 hover:text-blue-800">Events</a>
            <a href="#visit" className="text-gray-600 hover:text-blue-800">Visit</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative bg-cover bg-center h-[60vh] text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome Home</h2>
          <p className="text-lg md:text-xl">A place to find hope, faith, and community.</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">About Our Church</h3>
          <p className="max-w-3xl mx-auto text-lg">
            We are a vibrant, multicultural church in the heart of Yongin. Our mission is to love God, love people, and make disciples of Jesus Christ. We welcome people from all walks of life to join us in worship and fellowship.
          </p>
        </div>
      </section>

      {/* Sermons Section */}
      <section id="sermons" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Recent Sermons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">The Power of Forgiveness</h4>
              <p className="text-gray-600 mb-4">Pastor John Doe | September 1, 2025</p>
              <a href="#" className="text-blue-800 hover:underline">Watch Now</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Living a Life of Purpose</h4>
              <p className="text-gray-600 mb-4">Pastor Jane Smith | August 25, 2025</p>
              <a href="#" className="text-blue-800 hover:underline">Watch Now</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Finding Joy in the Journey</h4>
              <p className="text-gray-600 mb-4">Pastor John Doe | August 18, 2025</p>
              <a href="#" className="text-blue-800 hover:underline">Watch Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Upcoming Events</h3>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h4 className="text-xl font-bold mb-1">Community BBQ</h4>
              <p className="text-gray-600">September 14, 2025 | 1:00 PM</p>
            </div>
            <div className="p-6 border-b">
              <h4 className="text-xl font-bold mb-1">Youth Group Movie Night</h4>
              <p className="text-gray-600">September 20, 2025 | 7:00 PM</p>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-1">Worship Night</h4>
              <p className="text-gray-600">September 27, 2025 | 7:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Visit Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Service Times</h4>
              <p className="text-lg mb-2">Sundays at 11:00 AM</p>
              <h4 className="text-2xl font-bold mt-8 mb-4">Location</h4>
              <p className="text-lg">123 Main Street, Yongin, South Korea</p>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg shadow-md">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.836739944582!2d127.1592653153109!3d37.28078297985102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5a9b1f8f5a9d%3A0x7b2c7b3b1c8e6b8e!2sYongin%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1630500000000!5m2!1sen!2skr"
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 용인 함박 교회. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
