from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import os
from werkzeug.utils import secure_filename
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)
CORS(app)

# Get base directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Create a directory for uploads if it doesn't exist
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Create a directory for custom models if it doesn't exist
CUSTOM_MODEL_FOLDER = os.path.join(BASE_DIR, 'model', 'custom')
if not os.path.exists(CUSTOM_MODEL_FOLDER):
    os.makedirs(CUSTOM_MODEL_FOLDER)

# Load the trained model and scaler
MODEL_PATH = os.path.join(BASE_DIR, 'iris_model.joblib')
SCALER_PATH = os.path.join(BASE_DIR, 'scaler.joblib')

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

# Custom model paths
CUSTOM_MODEL_PATH = os.path.join(CUSTOM_MODEL_FOLDER, 'custom_model.joblib')
CUSTOM_SCALER_PATH = os.path.join(CUSTOM_MODEL_FOLDER, 'custom_scaler.joblib')
CUSTOM_CLASS_NAMES_PATH = os.path.join(CUSTOM_MODEL_FOLDER, 'class_names.joblib')

# Get iris class names
iris_data = load_iris()
class_names = iris_data.target_names

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = [
            float(data['sepal_length']),
            float(data['sepal_width']),
            float(data['petal_length']),
            float(data['petal_width'])
        ]
        
        # Scale the features
        features_scaled = scaler.transform([features])
        
        # Make prediction
        prediction = model.predict(features_scaled)
        probability = model.predict_proba(features_scaled)
        
        # Get the class name
        predicted_class = class_names[prediction[0]]
        
        return jsonify({
            'prediction': predicted_class,
            'probability': probability[0].tolist(),
            'class_names': class_names.tolist()
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict-custom', methods=['POST'])
def predict_custom():
    try:
        # Check if custom model exists
        if not (os.path.exists(CUSTOM_MODEL_PATH) and 
                os.path.exists(CUSTOM_SCALER_PATH) and 
                os.path.exists(CUSTOM_CLASS_NAMES_PATH)):
            return jsonify({'error': 'No custom model found. Please train a model first.'}), 400
        
        # Load custom model, scaler and class names
        custom_model = joblib.load(CUSTOM_MODEL_PATH)
        custom_scaler = joblib.load(CUSTOM_SCALER_PATH)
        custom_class_names = joblib.load(CUSTOM_CLASS_NAMES_PATH)
        
        data = request.get_json()
        features = [
            float(data['sepal_length']),
            float(data['sepal_width']),
            float(data['petal_length']),
            float(data['petal_width'])
        ]
        
        # Scale the features
        features_scaled = custom_scaler.transform([features])
        
        # Make prediction
        prediction = custom_model.predict(features_scaled)
        probability = custom_model.predict_proba(features_scaled)
        
        # Get the class name
        predicted_class = custom_class_names[prediction[0]]
        
        return jsonify({
            'prediction': predicted_class,
            'probability': probability[0].tolist(),
            'class_names': custom_class_names.tolist()
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/train-custom', methods=['POST'])
def train_custom():
    try:
        # Check if the post request has the file part
        if 'dataset' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        
        file = request.files['dataset']
        
        # If user does not select file, browser also submits an empty part without filename
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        # Save the uploaded file
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # Read the CSV file
        try:
            df = pd.read_csv(file_path)
        except Exception as e:
            return jsonify({'error': f'Error reading CSV file: {str(e)}'}), 400
        
        # Check if the required columns are present
        required_features = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
        missing_columns = [col for col in required_features if col not in df.columns]
        
        if missing_columns:
            return jsonify({'error': f'Missing columns in CSV: {", ".join(missing_columns)}'}), 400
        
        # Check if there's a target column (last column is assumed to be the target)
        if len(df.columns) <= 4:
            return jsonify({'error': 'No target column found in CSV'}), 400
        
        target_column = df.columns[-1]  # Assume the last column is the target
        
        # Extract features and target
        X = df[required_features].values
        y = df[target_column].values
        
        # Get unique class names
        custom_class_names = np.unique(y)
        
        # Convert class names to numeric if they're not already
        if not np.issubdtype(y.dtype, np.number):
            class_mapping = {name: i for i, name in enumerate(custom_class_names)}
            y = np.array([class_mapping[class_name] for class_name in y])
        
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Scale the features
        custom_scaler = StandardScaler()
        X_train_scaled = custom_scaler.fit_transform(X_train)
        X_test_scaled = custom_scaler.transform(X_test)
        
        # Train the model
        custom_model = LogisticRegression(multi_class='multinomial', max_iter=1000)
        custom_model.fit(X_train_scaled, y_train)
        
        # Calculate accuracy
        train_accuracy = custom_model.score(X_train_scaled, y_train)
        test_accuracy = custom_model.score(X_test_scaled, y_test)
        
        # Save the model, scaler, and class names
        joblib.dump(custom_model, CUSTOM_MODEL_PATH)
        joblib.dump(custom_scaler, CUSTOM_SCALER_PATH)
        joblib.dump(custom_class_names, CUSTOM_CLASS_NAMES_PATH)
        
        return jsonify({
            'message': 'Model trained successfully',
            'train_accuracy': float(train_accuracy),
            'test_accuracy': float(test_accuracy),
            'class_names': custom_class_names.tolist() if hasattr(custom_class_names, 'tolist') else list(custom_class_names)
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True)