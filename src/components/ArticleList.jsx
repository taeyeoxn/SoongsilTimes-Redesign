import './ArticleList.css';

const ArticleList = ({id, category, title, reporter, content}) => {

    return (
        <div className='ArticleList'>
            <div className='picture'>사진</div>
            <div className='Articlewrapper'>
                <div className='title'>{title}</div>
                <div className='reporter'>By {reporter}</div>
                <div className='articlecontent'>{content}</div>
            </div>
        </div>
    )
}

export default ArticleList;