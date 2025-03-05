import Editor from '../components/Editor';
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArticleStateContext, ArticleDispatchContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import useArticle from '../hooks/useArticle';

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onUpdate} = useContext(ArticleDispatchContext);

    const curArticleItem = useArticle(params.id);

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