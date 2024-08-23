import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Products from './components/Products/Products';
import Cases from './components/Cases/Cases';
import Experts from './components/Experts/Experts';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/mainpage' element={<MainPage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cases' element={<Cases />} />
            <Route path='/experts' element={<Experts />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

