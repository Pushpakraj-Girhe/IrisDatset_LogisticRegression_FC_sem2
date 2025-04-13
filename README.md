# Iris Flower Classification Web App

This is a full-stack web application that classifies Iris flowers using machine learning. The application consists of a Python Flask backend with a machine learning model and a React frontend.

## Project Structure

```
.
├── backend/
│   ├── api/
│   │   └── app.py
│   ├── model/
│   │   └── train_model.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── IrisForm.js
    │   ├── App.js
    │   └── ...
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Create a Python virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install Python dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Train the model:
   ```bash
   python model/train_model.py
   ```

4. Start the Flask server:
   ```bash
   python api/app.py
   ```

### Frontend Setup

1. Install Node.js dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter the measurements for an Iris flower:
   - Sepal Length (cm)
   - Sepal Width (cm)
   - Petal Length (cm)
   - Petal Width (cm)
3. Click "Predict" to see the classification result

## Technologies Used

- Backend:
  - Python
  - Flask
  - scikit-learn
  - pandas
  - numpy

- Frontend:
  - React
  - Tailwind CSS 