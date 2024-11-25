export default function Profile() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          {/* Profile Header */}
          <h1 className="text-4xl font-bold mb-8">Profile</h1>
  
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
            </div>
  
            {/* Form Section */}
            <div className="w-full flex flex-wrap gap-8">
              {/* Left Column */}
              <div className="w-full md:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value="Ahmed Raza"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="primaryContact"
                    className="block text-sm font-semibold mb-2"
                  >
                    Primary Contact Number
                  </label>
                  <input
                    type="text"
                    id="primaryContact"
                    value="+92 3185 678910"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
              </div>
  
              {/* Right Column */}
              <div className="w-full md:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value="ahmed.raza524@gmail.com"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="secondaryContact"
                    className="block text-sm font-semibold mb-2"
                  >
                    Secondary Contact Number
                  </label>
                  <input
                    type="text"
                    id="secondaryContact"
                    value="+92 3185 678910"
                    className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
  
          {/* Update Button */}
          <div className="flex justify-end mt-8">
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
  