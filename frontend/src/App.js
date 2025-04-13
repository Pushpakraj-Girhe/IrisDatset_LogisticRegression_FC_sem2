import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutDataset from "./pages/AboutDataset"
import AboutRegression from "./pages/AboutRegression"
import Predict from "./pages/Predict"
import UploadDataset from "./pages/UploadDataset"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
          <div
            className="absolute top-0 left-0 w-64 h-64 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/placeholder-flower-large.png')" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('/placeholder-flower-large.png')" }}
          ></div>
        </div>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-dataset" element={<AboutDataset />} />
            <Route path="/about-regression" element={<AboutRegression />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/upload-dataset" element={<UploadDataset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="text-center p-6 text-sm text-pink-700 mt-12 border-t border-pink-200">
          <p>🌸 Iris Classifier - A Beautiful Exploration of the Iris Dataset 🌸</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

