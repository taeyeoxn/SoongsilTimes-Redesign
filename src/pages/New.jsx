import Editor from '../components/Editor';
import { ArticleDispatchContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const New = () => {
    const {onCreate} = useContext(ArticleDispatchContext);
    const {category} = useParams(); //URL에서 category 값 가져오기

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            category,
            input.title, 
            input.reporter, 
            input.content,
        );
    };

    return (
        <div>
            <Editor onSubmit={onSubmit} categoryData={{category}}/>
        </div>
    )
};

export default New;