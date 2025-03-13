import './App.css';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
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

function reducer(state, action) {
  let nextState;

  switch(action.type) {
    case 'INIT': 
      return action.data;
    case 'CREATE':
      { nextState = [action.data,...state];
        break;
      }
    case 'UPDATE':
      { nextState = state.map((item) =>
        String(item.id) === String(action.data.id) 
        ? action.data 
        : item);
        break;
      }
    case 'DELETE':
      { nextState = state.filter((item) =>
        String(item.id) !== String(action.id));
        break;
      }
      default:
        return state;
  }
  localStorage.setItem("article", JSON.stringify(nextState));
  return nextState;
}

export const ArticleStateContext = createContext();
export const ArticleDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("article");
    if(!storedData){
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    };

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

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

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>
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