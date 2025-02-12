import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/category/:name" element={<Category />} />
      <Route path='/article/:id' element={<Article/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default App
