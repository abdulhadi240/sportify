export default function ContactForm() {
  return (
    <div className="flex flex-col items-center w-full shadow-2xl h-auto bg-white px-32 py-6">
      {/* Container */}
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-xl overflow-hidden p-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Map Section */}
          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0945160355474!2d67.0556381!3d24.9346611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3c7333b935%3A0xeabe72d422fa58e2!2sSlidey%20HQ!5e0!3m2!1sen!2s!4v1666939951729!5m2!1sen!2s"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-6">Get in touch</h1>
            <form className="space-y-4">
              <div className="flex justify-between">
                {/* Full Name */}
                <div className="w-full mr-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold mb-1"
                  >
                    Full name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                    placeholder="Name"
                  />
                </div>
                {/* Email */}
                <div className="w-full ml-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                {/* Phone */}
                <div className="w-full mr-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-1"
                  >
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                    placeholder="+1 (234) 56789"
                  />
                </div>
                {/* Subject */}
                <div className="w-full ml-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-1"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                    placeholder="subject..."
                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-1"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-gray-100 rounded-md focus:outline-none h-24"
                  placeholder="Your message goes here..."
                ></textarea>
              </div>
              {/* Privacy Policy */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I’d like to receive more information about the company. I
                  understand and agree to the{" "}
                  <a
                    href="#"
                    className="text-purple-600 underline hover:no-underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-auto px-6 py-3 bg-primary1 text-white font-semibold rounded-md hover:bg-purple-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
