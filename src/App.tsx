import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginPage from './views/LoginView';
import DashBoardView from './views/DashBoardView';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoardView />} />
          {/* Aquí puedes agregar más rutas según sea necesario */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
