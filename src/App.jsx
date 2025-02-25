import './App.css';
import { useReducer, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import Edit from './pages/Edit';
import Search from './pages/Search';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    category: "CAMPUS",
    content: "1번 기사 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    category: "SOCIETY",
    content: "2번 기사 내용",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data,...state]
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter((item) =>
        String(item.id) !== String(action.id));
      default:
        return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 기사 추가
  const onCreate = (createdDate, category, content) => {
    dispatch ({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        category,
        content,
      }
    });
  }

  // 기존 기사 수정
  const onUpdate = (id, createdDate, category, content) => {
    dispatch ({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        category,
        content,
      }
    });
  }

  // 기존 기사 삭제
  const onDelete = (id) => {
    dispatch ({
      type: "DELETE",
      id,
    });
  }

  return (
    <div className='App'>
      <Header/>
      <div className='content'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/category/:name" element={<Category />} />
        <Route path='/article/:id' element={<Article/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
