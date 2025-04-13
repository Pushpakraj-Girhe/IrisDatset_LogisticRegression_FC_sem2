const AboutRegression = () => {
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
            The Art of Floral Prediction
          </h1>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">🌺</span>
            <span className="text-2xl">🌷</span>
          </div>
        </div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Magic of Regression
          </h2>
          <p className="font-serif">
            Regression analysis is like the ancient wisdom of master gardeners who could identify flowers by their subtle
            characteristics. It's a set of statistical processes for estimating relationships between a flower's features
            and its variety.
          </p>
          <p className="font-serif">
            In our floral garden, regression techniques help us predict the species of an Iris flower based on its
            measurements - the length and width of its sepals and petals, like a botanical fingerprint.
          </p>
  
          <div className="flex justify-center my-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-lg"></div>
            <img
              src=""
              alt="Regression visualization"
              className="rounded-lg relative z-10 border border-pink-200 w-[400px] h-[250px] object-cover"
            />
          </div>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8">
          <div className="floral-card">
            <span className="text-3xl block mb-4 text-center">🌺</span>
            <h3 className="font-serif text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Logistic Regression
            </h3>
            <p className="font-serif">
              Logistic regression is like a skilled botanist who can categorize flowers into distinct species. For our
              Iris garden, since we're classifying flowers into three varieties, logistic regression helps us determine
              which species a flower belongs to.
            </p>
            <p className="font-serif">
              It works by estimating the probability that a given bloom belongs to a certain variety. For our three Iris
              species, we use multinomial logistic regression, like having three different botanical experts each
              specializing in one variety.
            </p>
          </div>
  
          <div className="floral-card">
            <span className="text-3xl block mb-4 text-center">🌷</span>
            <h3 className="font-serif text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Linear Regression for Classification
            </h3>
            <p className="font-serif">
              While linear regression typically measures continuous growth like the height of a plant over time, it can be
              adapted for classification tasks. One approach is to encode the target classes numerically (e.g., Setosa =
              0, Versicolor = 1, Virginica = 2) and then round the prediction.
            </p>
            <p className="font-serif">
              However, this approach assumes an ordering of varieties that may not exist in nature. For our Iris garden,
              there's no inherent hierarchy among the three species - each has its own unique beauty.
            </p>
          </div>
        </div>
  
        <div className="floral-divider"></div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Botanical Classification Process
          </h2>
  
          <p className="font-serif">
            When using regression for classifying our Iris flowers, the process unfolds like a gardener's ritual:
          </p>
  
          <ol className="list-none pl-6 mb-4 space-y-4 mt-6">
            <li className="flex items-start">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-pink-200">
                1
              </span>
              <div>
                <strong className="text-rose-700">Preparing the Garden:</strong>
                <p className="font-serif">
                  Scaling the features (measurements) to ensure they're on the same scale, like ensuring all our measuring
                  tools use the same units.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-purple-200">
                2
              </span>
              <div>
                <strong className="text-purple-700">Training the Botanical Eye:</strong>
                <p className="font-serif">
                  Using the training data to find the patterns that best distinguish between different species, like a
                  gardener learning to recognize subtle differences.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-pink-200">
                3
              </span>
              <div>
                <strong className="text-rose-700">Identifying New Blooms:</strong>
                <p className="font-serif">
                  Applying the trained model to new flowers to predict their species, like a gardener confidently naming a
                  newly discovered bloom.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-purple-200">
                4
              </span>
              <div>
                <strong className="text-purple-700">Evaluating Our Garden Knowledge:</strong>
                <p className="font-serif">
                  Assessing how well our botanical knowledge performs using metrics like accuracy and precision, like
                  testing a gardener's expertise.
                </p>
              </div>
            </li>
          </ol>
  
          <div className="flex justify-center my-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-lg"></div>
            <img
              src=""
              alt="Regression process"
              className="rounded-lg relative z-10 border border-pink-200 w-[400px] h-[250px] object-cover"
            />
          </div>
        </div>
  
        <div className="floral-card">
          <h2 className="font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Garden Boundaries
          </h2>
          <p className="font-serif">
            In our floral classification journey, regression models create decision boundaries that separate different
            species in the garden of features. For the Iris dataset:
          </p>
  
          <ul className="list-none pl-6 mb-4 space-y-2">
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> Setosa grows in its own distinct garden plot, easily
              distinguishable from the others
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">❀</span> Versicolor and Virginica share some garden space, with their
              territories gently overlapping
            </li>
          </ul>
  
          <p className="font-serif">
            The threshold values that determine these garden boundaries are crucial for understanding why a particular
            bloom was classified as it was. In our prediction tool, we'll reveal these thresholds to help you understand
            the botanical reasoning behind each classification.
          </p>
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
  
  export default AboutRegression
  
  
