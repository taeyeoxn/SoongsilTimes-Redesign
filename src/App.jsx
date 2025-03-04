import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Article from './pages/Article';
import New from './pages/New';
import Edit from './pages/Edit';
import Search from './pages/Search';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    category: "campus",
    image: null,
    title: "Facing the Climate Crisis: Climateflation",
    reporter: "Yoo Tae-yeon",
    content: "Are Soongsilians interested in fashion? ST interviewed Soongsilians who wear clothes that express their individuality to other Soongsilians on campus. Get recommendations through...",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    category: "society",
    image: null,
    title: "2번 기사",
    reporter: "짱아",
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

export const ArticleStateContext = createContext();
export const ArticleDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 기사 추가
  const onCreate = (createdDate, category, image, title, reporter, content) => {
    dispatch ({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        category,
        image,
        title,
        reporter,
        content,
      }
    });
  }

  // 기존 기사 수정
  const onUpdate = (id, createdDate, category, image, title, reporter, content) => {
    dispatch ({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        category,
        image,
        title,
        reporter,
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
    <ArticleStateContext.Provider value={data}>
      <ArticleDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
        <div className='App'>
        <Header/>
        <div className='content'>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/category/:name" element={<Category />} />
          <Route path='/article/:id' element={<Article/>} />
          <Route path='/new/:category' element={<New/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
        </div>
        <Footer/>
        </div>
      </ArticleDispatchContext.Provider>
    </ArticleStateContext.Provider>
  )
}

export default App