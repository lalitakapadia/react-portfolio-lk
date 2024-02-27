import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavTabs />
      <main style={{ 
        color: 'Lavender',
        minHeight: '100vh', 
      }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
