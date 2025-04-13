import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div
            className="h-4 bg-contain bg-center bg-no-repeat mx-auto w-64"
            style={{ backgroundImage: "url('/placeholder-divider.png')" }}
          ></div>
        </div>
        <h1
          className="text-4xl font-bold mb-4 font-serif text-rose-800"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome to the Iris Classifier
        </h1>
        <p className="text-xl max-w-3xl mx-auto font-serif italic text-purple-700">
          Discover the beauty and science of the famous Iris dataset, understand regression techniques, and predict iris
          species based on their delicate measurements.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <span className="text-3xl">🌸</span>
          <span className="text-3xl">🌺</span>
          <span className="text-3xl">🌷</span>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="floral-card">
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/placeholder-flower.png')" }}
          ></div>
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            About the Iris Dataset
          </h2>
          <p className="font-serif">
            The Iris dataset is one of the most beautiful collections in pattern recognition and machine learning. It
            contains measurements for 150 iris flowers from three different species, each with its own unique charm.
          </p>
          <div className="flex justify-center my-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-lg"></div>
            <img
              src="/placeholder-iris-collection.png"
              alt="Iris flowers"
              className="rounded-lg relative z-10 w-[300px] h-[200px] object-cover"
            />
          </div>
          <Link to="/about-dataset" className="btn-primary inline-block">
            Explore Iris Varieties
          </Link>
        </div>

        <div className="floral-card">
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/placeholder-flower.png')" }}
          ></div>
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Regression Analysis
          </h2>
          <p className="font-serif">
            Like a gardener who can identify flowers by their characteristics, regression analysis examines
            relationships between variables to predict outcomes. In our garden, we use it to identify iris species.
          </p>
          <div className="flex justify-center my-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-lg"></div>
            <img
              src="/placeholder-regression.png"
              alt="Regression graph"
              className="rounded-lg relative z-10 w-[300px] h-[200px] object-cover"
            />
          </div>
          <Link to="/about-regression" className="btn-primary inline-block">
            Understand the Magic
          </Link>
        </div>
      </div>

      <div className="floral-divider"></div>

      <div className="floral-card text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat opacity-5"
          style={{ backgroundImage: "url('/placeholder-pattern-small.png')", backgroundSize: "100px" }}
        ></div>
        <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
          Experience the Bloom of Prediction
        </h2>
        <p className="font-serif max-w-2xl mx-auto">
          Input the measurements of an iris flower and watch as our model magically predicts its species. See the beauty
          of machine learning in action!
        </p>
        <div className="flex justify-center my-6 space-x-8">
          <span className="text-4xl">🌸</span>
          <span className="text-4xl">🌺</span>
          <span className="text-4xl">🌷</span>
        </div>
        <Link to="/predict" className="btn-primary inline-block px-8 py-3 text-lg">
          Make a Prediction
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="floral-card text-center">
          <span className="text-4xl block mb-4">🌸</span>
          <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Iris Setosa
          </h3>
          <p className="font-serif">Delicate and distinctive, with small petals and wide sepals.</p>
        </div>
        <div className="floral-card text-center">
          <span className="text-4xl block mb-4">🌺</span>
          <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Iris Versicolor
          </h3>
          <p className="font-serif">Elegant and balanced, with medium-sized petals and sepals.</p>
        </div>
        <div className="floral-card text-center">
          <span className="text-4xl block mb-4">🌷</span>
          <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Iris Virginica
          </h3>
          <p className="font-serif">Majestic and grand, with the largest petals and sepals.</p>
        </div>
      </div>
    </div>
  )
}

export default Home

