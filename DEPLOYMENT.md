# Iris Classifier Deployment Guide

This document explains how to deploy both the backend API and frontend application to free hosting services.

## Backend Deployment (Render.com)

1. Create a free account on [Render.com](https://render.com)

2. Click on the "New +" button and select "Web Service"

3. Connect your GitHub repository or use the "Deploy from Git Repo" option

4. Configure your web service:
   - **Name**: iris-classifier-api
   - **Environment**: Python
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn wsgi:app`
   - **Plan**: Free

5. Set the Python version to 3.9 or higher in the Environment Variables section:
   - Key: `PYTHON_VERSION`
   - Value: `3.11.0`

6. Click "Create Web Service"

Your backend API will be deployed and available at a URL like: `https://iris-classifier-api.onrender.com`

## Frontend Deployment (Netlify)

1. Create a free account on [Netlify](https://netlify.com)

2. From the Netlify dashboard, click "Add new site" → "Import an existing project"

3. Connect to your GitHub repository

4. Configure the build settings:
   - **Base directory**: frontend
   - **Build command**: npm run build
   - **Publish directory**: frontend/build

5. Click "Deploy site"

Your frontend application will be deployed and available at a URL like: `https://iris-classifier.netlify.app`

## Connecting Frontend to Backend

The frontend automatically connects to the production backend when deployed, as configured in `frontend/src/api.js`. 

If you need to update the backend URL:

1. Edit `frontend/src/api.js`
2. Update the `production` URL to match your Render deployment URL
3. Redeploy the frontend

## Environment Variables

No additional environment variables are required for basic functionality.

## Limitations of Free Hosting

- **Render Free Tier**: The free tier "spins down" after 15 minutes of inactivity. The first request after inactivity may take 30-60 seconds to respond while the service spins up.
- **Netlify Free Tier**: Limited to 100GB bandwidth per month.
- **File Uploads**: Custom dataset files are stored temporarily and may be lost when the service restarts. 