// src/pages/_app.js
import '../styles/globals.css'; // Mengimpor CSS global (Tailwind atau lainnya)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />          
      <Component {...pageProps} />
      <Footer />          
    </>
  );
}

export default MyApp;
