"use client"

import { useState } from "react"
import { API_BASE_URL } from "../api"
import { Button } from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { Slider } from "../components/Slider"

const Predict = () => {
  const [formData, setFormData] = useState({
    sepalLength: 5.8,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
  })

  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [datasetMode, setDatasetMode] = useState("default") // "default" or "custom"

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: Number.parseFloat(value),
    })
  }

  const handleSliderChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Use different endpoint based on the selected mode
      const endpoint = datasetMode === "default" ? 'predict' : 'predict-custom';
      
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sepal_length: formData.sepalLength,
          sepal_width: formData.sepalWidth,
          petal_length: formData.petalLength,
          petal_width: formData.petalWidth
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setPrediction({
        species: data.prediction.toLowerCase(),
        probability: Math.max(...data.probability),
        thresholds: {
          setosa: { petalLength: 2.5, petalWidth: 0.8 },
          versicolor: { petalLength: 4.9, petalWidth: 1.6 },
          virginica: { petalLength: 4.9, petalWidth: 1.6 },
        },
      });
      setLoading(false);
    } catch (err) {
      setError(err.message)
      console.error("Error:", err)
      setLoading(false)
    }
  }

  const getSpeciesInfo = (species) => {
    const info = {
      setosa: {
        fullName: "Iris Setosa",
        description:
          "A delicate beauty with small petals and wide sepals. Native to eastern Siberia, this charming bloom stands out with its distinctive features.",
        image: "/placeholder-setosa.png",
        emoji: "🌸",
      },
      versicolor: {
        fullName: "Iris Versicolor",
        description:
          "Also known as the Blue Flag, this elegant flower has medium-sized petals and sepals. Native to North America, it graces wetlands with its purple-blue hues.",
        image: "/placeholder-versicolor.png",
        emoji: "🌺",
      },
      virginica: {
        fullName: "Iris Virginica",
        description:
          "The majestic Virginia Iris has the largest petals and sepals of the three. Native to eastern North America, it creates a stunning display in garden settings.",
        image: "/placeholder-virginica.png",
        emoji: "🌷",
      },
    }

    return info[species] || {}
  }

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
          Predict Your Iris Bloom
        </h1>
        <p className="font-serif text-lg text-purple-700 max-w-2xl mx-auto mt-2">
          Enter the measurements of your mysterious iris flower, and our botanical algorithm will reveal its species.
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
              datasetMode === "default"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setDatasetMode("default")}
          >
            Use Default Dataset
          </button>
          <a
            href="/upload-dataset"
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
              datasetMode === "custom"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Use Custom Dataset
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-pink-200 bg-gradient-to-br from-white/90 to-pink-50/90 overflow-hidden relative">
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-10"
            style={{ backgroundImage: "url('/placeholder-setosa.png')" }}
          ></div>
          <CardContent className="pt-6">
            <h2
              className="text-2xl font-semibold mb-4 text-rose-700 font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Floral Measurements
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                  <Label htmlFor="sepalLength" className="text-rose-700 font-serif">
                    Sepal Length (cm): {formData.sepalLength}
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="sepalLength"
                      min={4.0}
                      max={8.0}
                      step={0.1}
                      value={formData.sepalLength}
                      onChange={(value) => handleSliderChange("sepalLength", value)}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      name="sepalLength"
                      value={formData.sepalLength}
                      onChange={handleInputChange}
                      min={4.0}
                      max={8.0}
                      step={0.1}
                      className="w-20 border-pink-200"
                    />
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                  <Label htmlFor="sepalWidth" className="text-purple-700 font-serif">
                    Sepal Width (cm): {formData.sepalWidth}
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="sepalWidth"
                      min={2.0}
                      max={4.5}
                      step={0.1}
                      value={formData.sepalWidth}
                      onChange={(value) => handleSliderChange("sepalWidth", value)}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      name="sepalWidth"
                      value={formData.sepalWidth}
                      onChange={handleInputChange}
                      min={2.0}
                      max={4.5}
                      step={0.1}
                      className="w-20 border-pink-200"
                    />
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                  <Label htmlFor="petalLength" className="text-rose-700 font-serif">
                    Petal Length (cm): {formData.petalLength}
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="petalLength"
                      min={1.0}
                      max={7.0}
                      step={0.1}
                      value={formData.petalLength}
                      onChange={(value) => handleSliderChange("petalLength", value)}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      name="petalLength"
                      value={formData.petalLength}
                      onChange={handleInputChange}
                      min={1.0}
                      max={7.0}
                      step={0.1}
                      className="w-20 border-pink-200"
                    />
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                  <Label htmlFor="petalWidth" className="text-purple-700 font-serif">
                    Petal Width (cm): {formData.petalWidth}
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="petalWidth"
                      min={0.1}
                      max={2.5}
                      step={0.1}
                      value={formData.petalWidth}
                      onChange={(value) => handleSliderChange("petalWidth", value)}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      name="petalWidth"
                      value={formData.petalWidth}
                      onChange={handleInputChange}
                      min={0.1}
                      max={2.5}
                      step={0.1}
                      className="w-20 border-pink-200"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full transition-colors shadow-md border border-pink-300"
                disabled={loading}
              >
                {loading ? "Consulting the Garden..." : "Identify My Iris Bloom"}
              </Button>

              {error && (
                <div className="text-red-500 text-center mt-2 p-2 bg-red-50 rounded-lg border border-red-200">
                  Error: {error}
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div>
          {prediction ? (
            <Card className="border-pink-200 bg-gradient-to-br from-white/90 to-pink-50/90 overflow-hidden relative">
              <div
                className="absolute top-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-10"
                style={{ backgroundImage: "url('/placeholder-setosa.png')" }}
              ></div>
              <CardContent className="pt-6">
                <h2
                  className="text-2xl font-semibold mb-4 text-rose-700 font-serif"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Your Bloom Revealed
                </h2>

                <div className="text-center mb-6">
                  <div className="text-5xl mb-2">{getSpeciesInfo(prediction.species).emoji}</div>
                  <div
                    className="text-xl font-bold mb-2 text-purple-700 font-serif"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {getSpeciesInfo(prediction.species).fullName}
                  </div>
                  <div className="text-sm text-pink-600 mb-4 bg-pink-50 inline-block px-3 py-1 rounded-full border border-pink-200">
                    Confidence: {(prediction.probability * 100).toFixed(0)}%
                  </div>

                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-lg"></div>
                      <img
                        src={getSpeciesInfo(prediction.species).image || "/placeholder-iris.png"}
                        alt={getSpeciesInfo(prediction.species).fullName}
                        className="rounded-lg border-4 border-pink-200 relative z-10 w-[200px] h-[200px] object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-sm font-serif">{getSpeciesInfo(prediction.species).description}</p>
                </div>

                <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                  <h3
                    className="font-semibold mb-2 text-rose-700 font-serif"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    The Garden's Wisdom
                  </h3>
                  <p className="text-sm mb-4 font-serif">
                    Our botanical algorithm made this prediction based on these floral insights:
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="bg-pink-50/70 p-3 rounded-lg border border-pink-100">
                      <strong className="text-purple-700">Your bloom's measurements:</strong>
                      <ul className="list-none pl-2 mt-1 space-y-1">
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Petal Length: {formData.petalLength} cm
                        </li>
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Petal Width: {formData.petalWidth} cm
                        </li>
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Sepal Length: {formData.sepalLength} cm
                        </li>
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Sepal Width: {formData.sepalWidth} cm
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50/70 p-3 rounded-lg border border-purple-100">
                      <strong className="text-rose-700">Garden thresholds:</strong>
                      <ul className="list-none pl-2 mt-1 space-y-1">
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Setosa typically has petal length &lt;{" "}
                          {prediction.thresholds.setosa.petalLength} cm
                        </li>
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Versicolor typically has petal width between{" "}
                          {prediction.thresholds.setosa.petalWidth} and {prediction.thresholds.versicolor.petalWidth} cm
                        </li>
                        <li className="flex items-center">
                          <span className="text-pink-500 mr-2">❀</span> Virginica typically has petal length &gt;{" "}
                          {prediction.thresholds.virginica.petalLength} cm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 border border-pink-200">
              <span className="text-5xl mb-4">🌿</span>
              <img
                src="/placeholder-setosa.png"
                alt="Iris flower"
                className="mb-4 rounded-full border-4 border-pink-100 w-[150px] h-[150px] object-cover"
              />
              <p className="text-center text-purple-700 font-serif">
                Enter the measurements of your mysterious bloom and click "Identify" to reveal its species.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <span className="text-2xl">🌸</span>
                <span className="text-2xl">🌺</span>
                <span className="text-2xl">🌷</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Card className="border-pink-200 bg-gradient-to-br from-white/90 to-pink-50/90 overflow-hidden relative">
        <div
          className="absolute top-0 right-0 w-20 h-20 bg-contain bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('/placeholder-flower.png')" }}
        ></div>
        <CardContent className="pt-6">
          <h2
            className="text-2xl font-semibold mb-4 text-rose-700 font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Garden's Secret
          </h2>
          <p className="font-serif">When you submit your bloom's measurements, our garden magic works as follows:</p>
          <ol className="list-none pl-6 space-y-3 mb-4 mt-4">
            <li className="flex items-start">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-pink-200">
                1
              </span>
              <p className="font-serif">
                Your bloom's measurements are sent to our botanical laboratory (Flask backend)
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-purple-200">
                2
              </span>
              <p className="font-serif">
                Our garden sage (regression model) consults its wisdom about the Iris dataset
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-pink-200">
                3
              </span>
              <p className="font-serif">
                The model calculates the likelihood of each species based on the measurements
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-purple-200">
                4
              </span>
              <p className="font-serif">
                The most likely species is returned as the prediction, like naming a newly discovered bloom
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0 border border-pink-200">
                5
              </span>
              <p className="font-serif">Our garden display reveals your bloom's true identity with a flourish</p>
            </li>
          </ol>
          <div className="flex justify-center space-x-8 my-4">
            <span className="text-3xl">🌸</span>
            <span className="text-3xl">🌺</span>
            <span className="text-3xl">🌷</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Predict

