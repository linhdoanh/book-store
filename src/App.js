import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/AuthContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <AuthContextProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Router />
            <ToastContainer />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </AuthContextProvider>
  );
}
