import { createRoot} from 'react-dom/client';
import App from './app';
import { Container } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as Container);
root.render((<App></App>));


