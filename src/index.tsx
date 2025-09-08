import './tailwind.css';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (!container) throw new Error("No se encontró el div #root en index.html");

const root = createRoot(container);
root.render(<App />);