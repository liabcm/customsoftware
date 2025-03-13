import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const style = document.createElement('style');
style.textContent = 'html { scroll-behavior: smooth; }';
document.head.appendChild(style);
