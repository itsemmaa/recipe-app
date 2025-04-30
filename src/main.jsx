import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RecipeProvider } from './context/RecipeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </StrictMode>,
);
