import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <span className="text-6xl mb-4">🥀</span>
      <h1
        className="text-4xl font-bold mb-4 text-rose-800 font-serif"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        404 - Garden Path Not Found
      </h1>
      <p className="text-xl mb-8 text-purple-700 font-serif max-w-md">
        Oh dear! It seems you've wandered into an uncharted part of our garden. This bloom doesn't exist or has been
        moved to a different garden bed.
      </p>
      <Link to="/" className="btn-primary px-8 py-3">
        Return to the Garden
      </Link>
      <div className="flex justify-center space-x-4 mt-8">
        <span className="text-2xl">🌸</span>
        <span className="text-2xl">🌺</span>
        <span className="text-2xl">🌷</span>
      </div>
    </div>
  )
}

export default NotFound

