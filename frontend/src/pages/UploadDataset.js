"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from "../api"
import { Button } from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { Input } from "../components/Input"
import { Label } from "../components/Label"

const UploadDataset = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [trainingResults, setTrainingResults] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!file) {
      setError("Please select a CSV file to upload")
      return
    }

    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      setError("Please upload a CSV file")
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(null)
    setTrainingResults(null)

    // Create form data
    const formData = new FormData()
    formData.append('dataset', file)

    try {
      // Upload and train model with progress tracking
      const response = await fetch(`${API_BASE_URL}/train-custom`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to train model')
      }

      const result = await response.json()
      setTrainingResults(result)
      setSuccess("Model trained successfully! You can now make predictions using your custom dataset.")
      setUploadProgress(100)
    } catch (err) {
      setError(err.message)
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleGoToPrediction = () => {
    // Navigate to prediction page
    navigate('/predict');
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
          Train with Your Own Dataset
        </h1>
        <p className="font-serif text-lg text-purple-700 max-w-2xl mx-auto mt-2">
          Upload your own Iris dataset to train a custom model for iris species prediction.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-pink-200 bg-gradient-to-br from-white/90 to-pink-50/90 overflow-hidden relative">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-rose-700 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dataset Requirements
            </h2>
            
            <div className="mb-6 bg-white/70 p-4 rounded-lg border border-pink-100">
              <p className="text-purple-700 mb-2">Your CSV file should contain:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>4 feature columns: sepal length, sepal width, petal length, petal width</li>
                <li>1 target column with the species names or class values</li>
                <li>Proper column headers in the first row</li>
                <li>No missing values</li>
              </ul>
              <div className="mt-4 p-2 bg-gray-50 rounded text-xs font-mono">
                Example format:
                <pre>sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
7.0,3.2,4.7,1.4,versicolor
6.3,3.3,6.0,2.5,virginica</pre>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/70 p-4 rounded-lg border border-pink-100">
                <Label htmlFor="dataset" className="text-rose-700 font-serif block mb-2">
                  Upload CSV Dataset
                </Label>
                <Input 
                  type="file" 
                  id="dataset" 
                  accept=".csv" 
                  onChange={handleFileChange}
                  className="border-pink-200 w-full"
                />
                {file && (
                  <p className="mt-2 text-sm text-purple-600">
                    Selected file: {file.name} ({Math.round(file.size / 1024)} KB)
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-full transition-colors shadow-md border border-pink-300"
                disabled={loading || !file}
              >
                {loading ? "Training Model..." : "Upload & Train Model"}
              </Button>

              {loading && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-gradient-to-r from-pink-400 to-purple-500 h-2.5 rounded-full transition-all" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}

              {error && (
                <div className="text-red-500 text-center mt-2 p-2 bg-red-50 rounded-lg border border-red-200">
                  Error: {error}
                </div>
              )}

              {success && (
                <div className="text-green-600 text-center mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                  {success}
                </div>
              )}

              {trainingResults && (
                <div className="bg-white/70 p-4 rounded-lg border border-pink-100 mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">Training Results</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-sm text-gray-500">Training Accuracy</p>
                      <p className="text-lg font-bold text-purple-600">{Math.round(trainingResults.train_accuracy * 100)}%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-sm text-gray-500">Testing Accuracy</p>
                      <p className="text-lg font-bold text-purple-600">{Math.round(trainingResults.test_accuracy * 100)}%</p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-md border border-purple-300"
                    onClick={handleGoToPrediction}
                  >
                    Go to Prediction Page
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default UploadDataset 