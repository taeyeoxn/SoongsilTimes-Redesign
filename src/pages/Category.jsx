import { useParams } from 'react-router-dom';
import Notfound from './Notfound';
import CategoryInfo from '../components/CategoryInfo';

const Category = () => {
    const {name} = useParams();

    const allowedCategories = ['campus', 'society', 'business', 'culture', 'science', 'archive'];
    if (!allowedCategories.includes(name)) {
        return <Notfound/>
    }

    return (
        <div>
            <CategoryInfo category={name}/>
        </div>
    );
};

export default Category;