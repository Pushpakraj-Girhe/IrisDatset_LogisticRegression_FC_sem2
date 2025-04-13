// Configuration for API endpoints
const API_CONFIG = {
  // Local development API
  local: "http://localhost:5000",
  
  // Production API on Render
  production: "https://iris-classifier-api.onrender.com"
};

// Set this to 'local' for development or 'production' for deployment
const API_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'local';

// Export the base URL to use in API calls
export const API_BASE_URL = API_CONFIG[API_ENV];

// Helper function for making API calls
export const callApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API request failed');
  }
  
  return response.json();
}; 