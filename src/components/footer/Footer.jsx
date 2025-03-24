import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-16 w-screen">
      <div className="w-screen px-8 md:px-16 lg:px-32 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">
            Let's work together on <br /> your next product.
          </h2>
          <p className="text-red-700 underline font-semibold">
            ahmetpkavas@gmail.com
          </p>
        </div>

        <nav className="flex items-center space-x-4">
          <Link to="#" className="text-gray-700 font-semibold hover:underline">
            Personal Blog
          </Link>
          <a
            href="https://github.com/ahmetkvs"
            className="text-green-700 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ahmetkavas"
            className="text-blue-700 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
