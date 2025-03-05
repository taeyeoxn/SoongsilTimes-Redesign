import './Viewer.css';
import { getStringedDate } from '../util/get-stringed-date';

const Viewer = ({createdDate, image, title, reporter, content}) => {
    const ArticleDate = getStringedDate(new Date(createdDate)); 

    return (
        <div>
            <div className='article-title'>{title}</div>

            <div className='sub'>
                <div className='article-reporter'>{reporter}</div>
                <div className='sub-bar'></div>
                <div className='article-date'>{ArticleDate}</div> 
            </div>

            <div className='article-image1'>
            {image ? (
                    <img src={image} alt="Article Image" />
                ) : (
                    <div>No image available</div>
                )}
            </div>
            <div className='article-content'>{content}</div>

        </div>
    );
};

export default Viewer;