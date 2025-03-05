import './ArticleList.css';
import { useNavigate } from 'react-router-dom';

const ArticleList = ({ id, category, image, title, reporter, content }) => {
    const nav = useNavigate();

    const onClick = () => {
        nav(`/article/${id}`);
    }

    return (
        <div className='ArticleList'
        onClick={onClick}>
            <div className='picture'>
                {image ? (
                    <img src={image} alt="Article Image" />
                ) : (
                    <div>No image available</div>
                )}
            </div>
            <div className='Articlewrapper'>
                <div className='title'>{title}</div>
                <div className='reporter'>By {reporter}</div>
                <div className='articlecontent'>{content}</div>
            </div>

        </div>
    );
};

export default ArticleList;