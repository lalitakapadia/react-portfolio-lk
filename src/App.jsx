import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ 
        background: '#419197',
        minHeight: '100vh', 
      }}>
        <Outlet />
      </main>
      {<Footer />}
    </>
  );
}

export default App;
