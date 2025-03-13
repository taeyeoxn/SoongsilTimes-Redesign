import { useContext } from 'react';
import { ArticleStateContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import Notfound from './Notfound';
import CategoryInfo from '../components/CategoryInfo';
import ArticleList from '../components/ArticleList';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';

const Category = () => {
  const { name } = useParams();
  const data = useContext(ArticleStateContext);
  const nav = useNavigate();

  const allowedCategories = ['campus', 'society', 'business', 'culture', 'science', 'archive'];
  usePageTitle(`${name.toUpperCase()}`);
  
  if (!allowedCategories.includes(name.toLowerCase())) {
    return <Notfound />;
  }

  const filteredArticles = data.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CategoryInfo category={name} />
        {filteredArticles.map((item) => (
          <ArticleList key={item.id} {...item} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '20px',
        }}
      >
        <Button 
          onClick={() => nav(`/new/${name}`)} 
          text={"기사 작성하기"} 
        />
      </div>
    </div>
  );
};

export default Category;