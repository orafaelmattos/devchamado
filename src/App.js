import './App.css';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000}/>
          <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
