import Editor from '../components/Editor';
import { ArticleDispatchContext } from '../App';
import { useContext } from 'react';
import { replace, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const New = () => {
    const {onCreate} = useContext(ArticleDispatchContext);
    const {category} = useParams(); //URL에서 category 값 가져오기
    const nav = useNavigate();

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(), 
            category,
            input.title, 
            input.reporter, 
            input.content,
        );
        alert("기사가 등록되었습니다");
        nav(`/category/${category}`, { replace: true });
    };

    return (
        <div>
            <Editor onSubmit={onSubmit} categoryData={{category}}/>
        </div>
    )
};

export default New;