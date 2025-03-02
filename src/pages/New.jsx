import Editor from '../components/Editor';
import { ArticleDispatchContext } from '../App';
import { useContext } from 'react';

const New = () => {
    const {onCreate} = useContext(ArticleDispatchContext);

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            input.title, 
            input.reporter, 
            input.content);
    };

    return (
        <div>
            <Editor onSubmit={onSubmit}/>
        </div>
    )
};

export default New;