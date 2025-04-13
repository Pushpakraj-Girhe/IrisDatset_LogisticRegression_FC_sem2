import pandas as pd
import numpy as np
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

def train_model():
    # Load the Iris dataset
    iris = load_iris()
    X = iris.data
    y = iris.target
    
    # Create a DataFrame for better visualization
    feature_names = iris.feature_names
    df = pd.DataFrame(X, columns=feature_names)
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train the model (using Logistic Regression instead of Linear Regression for better classification)
    model = LogisticRegression(multi_class='multinomial', max_iter=1000)
    model.fit(X_train_scaled, y_train)
    
    # Save the model and scaler
    joblib.dump(model, 'iris_model.joblib')
    joblib.dump(scaler, 'scaler.joblib')
    
    # Calculate accuracy
    train_accuracy = model.score(X_train_scaled, y_train)
    test_accuracy = model.score(X_test_scaled, y_test)
    
    print(f"Training Accuracy: {train_accuracy:.4f}")
    print(f"Testing Accuracy: {test_accuracy:.4f}")
    
    return model, scaler

if __name__ == "__main__":
    train_model() 