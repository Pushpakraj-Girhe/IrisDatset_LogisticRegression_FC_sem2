# Custom Dataset Instructions

This document explains how to use the custom dataset feature of the Iris Classifier application.

## Sample Dataset

A sample dataset (`sample_iris_dataset.csv`) has been provided for you to test the custom dataset functionality. This dataset contains measurements of iris flowers and their corresponding species classifications.

The dataset includes:
- 15 samples of Iris Setosa
- 15 samples of Iris Versicolor
- 15 samples of Iris Virginica

## Dataset Format Requirements

When creating your own dataset, ensure it follows these requirements:

1. The file must be in CSV format
2. The first row must contain headers
3. The dataset must include these 5 columns in order:
   - `sepal_length`: Numerical value for sepal length in cm
   - `sepal_width`: Numerical value for sepal width in cm
   - `petal_length`: Numerical value for petal length in cm
   - `petal_width`: Numerical value for petal width in cm
   - `species`: Text label for the iris species (e.g., "setosa", "versicolor", "virginica")
4. All measurements must be numerical values
5. No missing values are allowed

Example of correct format:
```
sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
7.0,3.2,4.7,1.4,versicolor
6.3,3.3,6.0,2.5,virginica
```

## How to Use the Custom Dataset Feature

1. **Prepare your dataset**: Create a CSV file following the format requirements above or use the provided sample dataset.

2. **Upload and train**:
   - Navigate to the "Upload Dataset" page from the navigation menu
   - Click "Choose File" and select your CSV dataset
   - Click "Upload & Train Model"
   - Wait for the model to train (this should take just a few seconds)
   - Once training is complete, you'll see the training results including accuracy metrics

3. **Make predictions with your custom model**:
   - After successful training, click "Go to Prediction Page"
   - On the prediction page, you'll see two options at the top: "Use Default Dataset" and "Use Custom Dataset"
   - Select "Use Custom Dataset" to use your custom-trained model
   - Enter the measurements for your iris flower using the sliders or input fields
   - Click "Identify My Iris Bloom" to get a prediction based on your custom model

## Tips for Creating Custom Datasets

1. **Balance your classes**: Try to have a similar number of examples for each species
2. **Include a variety of measurements**: The more diverse your dataset, the more robust your model will be
3. **Verify your data**: Double-check that all measurements are accurate and consistent
4. **Scale appropriately**: All measurements should be in centimeters (cm)

Enjoy experimenting with different datasets and seeing how they affect the model's predictions! 