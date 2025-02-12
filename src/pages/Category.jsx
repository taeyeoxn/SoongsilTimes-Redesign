import { useParams } from 'react-router-dom';
import Notfound from './Notfound';

const Category = () => {
    const {name} = useParams();

    const allowedCategories = ['campus', 'society', 'business', 'culture', 'science', 'archive'];
    if (!allowedCategories.includes(name)) {
        return <Notfound/>
    }

    return (
        <div>{name} 카테고리 페이지입니다</div>
    );
};

export default Category;