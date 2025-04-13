import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Iris Dataset", path: "/about-dataset" },
    { name: "About Regression", path: "/about-regression" },
    { name: "Make Prediction", path: "/predict" },
    { name: "Upload Dataset", path: "/upload-dataset" },
  ]

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-repeat"
        style={{ backgroundImage: "url('/placeholder-pattern-small.png')", backgroundSize: "100px" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="mr-2">🌸</span>
            <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Iris Classifier
            </span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-full hover:bg-white/20 transition-colors ${
                  location.pathname === item.path ? "bg-white/20 border border-white/40" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

