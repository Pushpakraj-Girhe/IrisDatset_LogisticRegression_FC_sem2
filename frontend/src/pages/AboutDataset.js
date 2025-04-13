const AboutDataset = () => {
    return (
      <div className="space-y-8">
        <div className="text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div
              className="h-4 bg-contain bg-center bg-no-repeat mx-auto w-64"
              style={{ backgroundImage: "url('/placeholder-divider.png')" }}
            ></div>
          </div>
          <h1 className="font-serif text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Garden of Iris Dataset
          </h1>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">🌺</span>
            <span className="text-2xl">🌷</span>
          </div>
        </div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Introduction to the Iris Dataset
          </h2>
          <p className="font-serif">
            The Iris flower dataset is a botanical treasure introduced by the British statistician and biologist Ronald
            Fisher in his 1936 paper "The use of multiple measurements in taxonomic problems". Like a carefully curated
            garden collection, it showcases the diversity and beauty of Iris flowers across three related species.
          </p>
  
          <div className="flex justify-center my-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-lg"></div>
            <img
              src="/placeholder-iris-dataset.png"
              alt="Iris dataset visualization"
              className="rounded-lg relative z-10 border border-pink-200 w-[400px] h-[250px] object-cover"
            />
          </div>
        </div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Blooms in Our Garden
          </h2>
          <p className="font-serif">Our floral collection consists of 50 samples from each of three species of Iris:</p>
          <ul className="list-none pl-6 mb-4 space-y-2">
            <li className="flex items-center">
              <span className="text-xl mr-2">🌸</span> <strong className="text-rose-700">Iris Setosa</strong> - The
              delicate beauty
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🌺</span> <strong className="text-purple-700">Iris Versicolor</strong> - The
              elegant charm
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-2">🌷</span> <strong className="text-pink-700">Iris Virginica</strong> - The
              majestic wonder
            </li>
          </ul>
  
          <p className="font-serif">Four features were measured from each floral specimen:</p>
          <ul className="list-none pl-6 mb-4 space-y-2">
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> <strong>Sepal Length</strong> (in cm) - The protective outer
              layer
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> <strong>Sepal Width</strong> (in cm) - The breadth of
              protection
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> <strong>Petal Length</strong> (in cm) - The colorful
              attraction
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> <strong>Petal Width</strong> (in cm) - The delicate spread
            </li>
          </ul>
        </div>
  
        <div className="floral-divider"></div>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="floral-card text-center">
            <span className="text-4xl block mb-4">🌸</span>
            <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              Iris Setosa
            </h3>
            <div className="flex justify-center my-4">
              <img
                src="/placeholder-setosa.png"
                alt="Iris Setosa"
                className="rounded-full border-4 border-pink-200 w-[150px] h-[150px] object-cover"
              />
            </div>
            <p className="font-serif">A delicate beauty with small petals and wide sepals, like a shy garden sprite.</p>
            <ul className="text-sm mt-4 bg-white/50 p-3 rounded-lg border border-pink-100">
              <li>
                <strong>Sepal Length:</strong> 4.3-5.8 cm
              </li>
              <li>
                <strong>Sepal Width:</strong> 2.3-4.4 cm
              </li>
              <li>
                <strong>Petal Length:</strong> 1.0-1.9 cm
              </li>
              <li>
                <strong>Petal Width:</strong> 0.1-0.6 cm
              </li>
            </ul>
          </div>
  
          <div className="floral-card text-center">
            <span className="text-4xl block mb-4">🌺</span>
            <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              Iris Versicolor
            </h3>
            <div className="flex justify-center my-4">
              <img
                src="/placeholder-versicolor.png"
                alt="Iris Versicolor"
                className="rounded-full border-4 border-purple-200 w-[150px] h-[150px] object-cover"
              />
            </div>
            <p className="font-serif">An elegant bloom with balanced proportions, the garden's perfect middle child.</p>
            <ul className="text-sm mt-4 bg-white/50 p-3 rounded-lg border border-purple-100">
              <li>
                <strong>Sepal Length:</strong> 4.9-7.0 cm
              </li>
              <li>
                <strong>Sepal Width:</strong> 2.0-3.4 cm
              </li>
              <li>
                <strong>Petal Length:</strong> 3.0-5.1 cm
              </li>
              <li>
                <strong>Petal Width:</strong> 1.0-1.8 cm
              </li>
            </ul>
          </div>
  
          <div className="floral-card text-center">
            <span className="text-4xl block mb-4">🌷</span>
            <h3 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              Iris Virginica
            </h3>
            <div className="flex justify-center my-4">
              <img
                src="/placeholder-virginica.png"
                alt="Iris Virginica"
                className="rounded-full border-4 border-rose-200 w-[150px] h-[150px] object-cover"
              />
            </div>
            <p className="font-serif">A majestic presence with grand petals and sepals, the garden's royal bloom.</p>
            <ul className="text-sm mt-4 bg-white/50 p-3 rounded-lg border border-rose-100">
              <li>
                <strong>Sepal Length:</strong> 4.9-7.9 cm
              </li>
              <li>
                <strong>Sepal Width:</strong> 2.2-3.8 cm
              </li>
              <li>
                <strong>Petal Length:</strong> 4.5-6.9 cm
              </li>
              <li>
                <strong>Petal Width:</strong> 1.4-2.5 cm
              </li>
            </ul>
          </div>
        </div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Significance of Our Garden
          </h2>
          <p className="font-serif">
            The Iris dataset is a cherished botanical collection in pattern recognition literature and machine learning
            for several reasons:
          </p>
          <ul className="list-none pl-6 space-y-2">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">❀</span> It's a perfectly curated small garden of complete data
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">❀</span> It contains three varieties, with Setosa being clearly
              distinct from its garden companions
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">❀</span> Versicolor and Virginica share some similarities,
              creating an interesting challenge for classification
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">❀</span> It's perfect for teaching the art of botanical
              classification through algorithms
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">❀</span> It has become the standard garden plot for testing new
              classification methods
            </li>
          </ul>
        </div>
  
        <div className="text-center">
          <div className="flex justify-center space-x-8 my-8">
            <span className="text-4xl">🌸</span>
            <span className="text-4xl">🌺</span>
            <span className="text-4xl">🌷</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutDataset
  
  