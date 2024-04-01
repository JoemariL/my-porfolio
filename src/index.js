import React from 'react';
import './static/css/index.css';
import App from './App';

import { ThemeProvider } from "@material-tailwind/react";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>

);
