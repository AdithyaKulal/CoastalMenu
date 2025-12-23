import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from "@clerk/clerk-react";
import ClerkFlagContext from './ClerkFlagContext';

// Determine the Publishable Key (CRA-friendly: prefer REACT_APP_ env var)
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || process.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.warn('Clerk publishable key not found. Add REACT_APP_CLERK_PUBLISHABLE_KEY (CRA) or VITE_CLERK_PUBLISHABLE_KEY (Vite) to your .env.');
} else {
  console.log('Clerk publishable key detected');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkFlagContext.Provider value={Boolean(PUBLISHABLE_KEY)}>
      {PUBLISHABLE_KEY ? (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      ) : (
        <App />
      )}
    </ClerkFlagContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
