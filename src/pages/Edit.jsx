import Editor from '../components/Editor';
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArticleStateContext, ArticleDispatchContext } from '../App';
import { useContext, useEffect, useState } from 'react';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const data = useContext(ArticleStateContext);
    const {onUpdate} = useContext(ArticleDispatchContext);
    const [curArticleItem, setCurArticleItem] = useState();

    useEffect(() => {
            const currentArticleItem = data.find(
                (item) => String(item.id) === String(params.id));
    
        // 존재하지 않는 기사에 접근했을 경우
        if(!currentArticleItem) {
            window.alert("존재하지 않는 기사입니다.")
            nav('/', {replace:true});
        }

        setCurArticleItem(currentArticleItem);
        }, [params.id, data]);

        const onSubmit = (input) => {
            if (
                window.confirm("기사를 정말 수정할까요?")) {
                    onUpdate(
                        params.id, 
                        input.createdDate.getTime(), 
                        curArticleItem.category, 
                        input.image, 
                        input.title, 
                        input.reporter, 
                        input.content
                    );
                    nav(`/category/${curArticleItem.category}`, {replace:true});
                };
            };

    return (
        <div>
            <Editor initData={curArticleItem} onSubmit={onSubmit}/>
        </div>
    );
};

export default Edit;