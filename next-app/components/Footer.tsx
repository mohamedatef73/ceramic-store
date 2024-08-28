import React from "react"

const Footer = () => {
  return (
    <div className="footer w-full bg-gray-800">
      <div className="links flex flex-col md:flex-row justify-between bg-gray-800">
        <div className="left-links flex flex-row md:flex-row md:justify-around w-full md:w-2/3 mt-2 md:mt-0">
          <div className="cols text-white flex flex-col leading-9 mt-10 md:mt-0 items-center md:items-start w-full md:w-1/4">
            <h1 className="font-bold mt-1 text-md">Home</h1>
            <a href="#" className="mt-2">
              Home
            </a>
            <a href="#" className="mt-2">
              Community
            </a>
            <a href="#" className="mt-2">
              Events
            </a>
            <a href="#" className="mt-2">
              Contact
            </a>
          </div>
          <div className="cols text-white flex flex-col leading-9 mt-10 md:mt-0 items-center md:items-start w-full md:w-1/4">
            <h1 className="font-bold mt-1 text-md">Resources</h1>
            <a href="#" className="mt-2">
              Blog
            </a>
            <a href="#" className="mt-2">
              News
            </a>
            <a href="#" className="mt-2">
              Guides
            </a>
            <a href="#" className="mt-2">
              Help Center
            </a>
          </div>
          <div className="cols text-white flex flex-col leading-9 mt-10 md:mt-0 items-center md:items-start w-full md:w-1/4">
            <h1 className="font-bold mt-1 text-md">Community</h1>
            <a href="#" className="mt-2">
              NewsFeed
            </a>
            <a href="#" className="mt-2">
              Profile
            </a>
            <a href="#" className="mt-2">
              Friends
            </a>
            <a href="#" className="mt-2">
              Forum
            </a>
          </div>
        </div>
        <div className="right-links flex flex-col md:flex-row justify-center items-center w-full md:w-1/3 bg-gray-800 text-white mt-6 md:mt-0">
          <div className="text flex flex-col w-full text-white text-center align-center">
            <p className="font-medium text-lg md:text-xl">Subscribe to the Cirkle Newsletter</p>
            <p className="font-medium text-lg md:text-xl mt-2">Newsletter</p>
            <p className="text-base md:text-lg mt-2">
              Subscribe to be the first to know about updates. Enter your email.
            </p>
            <div className="buttons flex flex-col md:flex-row mt-4 md:mt-6 items-center">
              <div className="relative mb-4 md:mb-0">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full bg-gray-700 px-4 py-2 text-sm text-white border border-white rounded-sm focus:ring-blue-500"
                  placeholder="Email Address"
                />
              </div>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 rounded-md px-4 py-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links flex flex-col md:flex-row justify-between items-center w-full h-auto bg-gray-900 py-4">
        <div className="logo flex flex-col md:flex-row items-center md:items-start">
          <div className="text text-center md:text-left text-white mt-2 md:mt-0">
            Besnik Creative Agency.
          </div>
          <div className="logo-icon flex items-center mt-2 md:mt-0">
            <img src="./svg/Group (1).svg" className="w-9" alt="logo" />
            <h1 className="text-white font-semibold ml-2">Netbook</h1>
          </div>
        </div>
        <div className="social-icons flex mt-4 md:mt-0">
          <img src="/facebook.svg" className="w-8 mx-2" alt="Facebook" />
          <img src="/Twitter.svg" className="w-8 mx-2" alt="Twitter" />
          <img src="/instagram.svg" className="w-8 mx-2" alt="Instagram" />
          <img src="/Linkedin.svg" className="w-8 mx-2" alt="LinkedIn" />
        </div>
      </div>
    </div>
  )
}

export default Footer
