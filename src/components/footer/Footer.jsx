import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-16 w-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Heading and Email) */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">
            Let's work together on <br /> your next product.
          </h2>
          <p className="text-red-700 underline font-semibold">
            ahmetpkavas@gmail.com
          </p>
        </div>

        {/* Right Side (Links) */}
        <nav className="flex items-center space-x-4">
          <Link to="#" className="text-gray-700 font-semibold hover:underline">
            Personal Blog
          </Link>
          <a
            href="https://github.com/ahmetkvs"
            className="text-green-700 font-semibold hover:underline"
            target="_blank" // Important for opening in a new tab
            rel="noopener noreferrer" // Important for security
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ahmetkavas"
            className="text-blue-700 font-semibold hover:underline"
            target="_blank" // Important for opening in a new tab
            rel="noopener noreferrer" // Important for security
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
