import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './main.css';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider> 
)
