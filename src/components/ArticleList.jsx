import './ArticleList.css';

const ArticleList = ({ id, category, image, title, reporter, content }) => {
    return (
        <div className='ArticleList'>
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