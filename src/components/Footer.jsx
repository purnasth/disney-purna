import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const author = "Purna Shrestha";
  return (
    <footer className="bg-gradient-to-b from-[--tmdbDarkBlue] to-[--darkBg] py-12">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col space-y-4 text-gray-400">
            <h2 className="text-2xl font-bold text-white">About Us</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum libero vitae velit tincidunt, non feugiat turpis
              efficitur.
            </p>
          </div>
          <div className="flex flex-col space-y-4 text-gray-400">
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <p className="text-sm">Email: contact@disneyplusclone.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col space-y-4 text-white">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 pt-5 mt-8 text-center text-sm text-gray-400 mb-0 pb-0">
        {/* <p>© 2023 Disney Plus Clone. All rights reserved.</p> */}
        <p className="text-sm text-center">
          &copy; {currentYear} Disney Plus Clone.{" "}
          <a
            href="https://www.purnashrestha.com.np/"
            target="_blank"
            className="text-white"
          >
            {author}
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
