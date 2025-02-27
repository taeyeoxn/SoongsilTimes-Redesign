import { useContext } from 'react';
import { ArticleStateContext } from '../App';
import { useParams } from 'react-router-dom';
import Notfound from './Notfound';
import CategoryInfo from '../components/CategoryInfo';
import ArticleList from '../components/ArticleList';
import Button from '../components/Button';

const Category = () => {
    const {name} = useParams();
    const data = useContext(ArticleStateContext);

    const allowedCategories = ['campus', 'society', 'business', 'culture', 'science', 'archive'];
    if (!allowedCategories.includes(name.toLowerCase())) {
        return <Notfound/>
    }

    return (
        <div>
            <CategoryInfo category={name}/>
            {data
            .filter((item) => item.category.toLowerCase() === name.toLowerCase())
            .map((item) => <ArticleList key={item.id} {...item}/>)}
            <Button text={"기사 작성하기"}/>
        </div>
    );
};

export default Category;