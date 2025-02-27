import Button from './Button';

const ArticleList = ({id, category, title, reporter, content}) => {

    return (
        <div>
            <div>사진</div>
            <div>{title}</div>
            <div>{reporter}</div>
            <div>{content}</div>
        </div>
    )
}

export default ArticleList;