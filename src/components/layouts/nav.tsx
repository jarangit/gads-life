import Link from "next/link";
import { FiCheck, FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
      <header className="flex items-center justify-between mb-6 max-w-7xl mx-auto py-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <FiCheck className="text-brand text-xl" />
            </div>
            <span className="hidden md:block font-bold text-gray-900">
              gads
              <FiCheck className="inline text-brand" />
              life
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/category"
              className="text-gray-800 hover:text-black font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-black font-medium"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-800 hover:text-black font-medium"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors">
            <FiSearch className="text-gray-600" />
          </button>
          <button className="hidden md:block px-4 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            SIGN UP
          </button>
        </div>
      </header>
  );
};

export default Nav;
